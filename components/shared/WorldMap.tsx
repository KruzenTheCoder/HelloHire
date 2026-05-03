"use client";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   REAL-GEOGRAPHY WORLD MAP
   Renders accurate country silhouettes from
   TopoJSON using a d3-geo projection, and
   exposes a `project(lon, lat)` helper via
   render-prop so callers can position
   markers and arcs in the same coordinate
   space as the map paths.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

import { useEffect, useMemo, useState, ReactNode } from "react";
import { geoEqualEarth, geoPath, GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";

// World atlas (110m resolution) served from /public
const TOPOJSON_URL = "/world-countries-110m.json";

// Logical viewBox — all projections are fitted to this so overlays align.
export const MAP_WIDTH = 960;
export const MAP_HEIGHT = 500;

export interface ProjectFn {
  (lon: number, lat: number): [number, number];
}

interface WorldMapProps {
  /** Additional class name for the <svg> wrapper */
  className?: string;
  /** Inline style for the <svg> wrapper */
  style?: React.CSSProperties;
  /** Fill colour for country land */
  fill?: string;
  /** Stroke colour for country borders */
  stroke?: string;
  /** Stroke width */
  strokeWidth?: number;
  /**
   * Render-prop that receives the projection helper and the
   * computed country paths. Use this to layer markers, arcs,
   * and other SVG children inside the same coordinate space.
   */
  children?: (args: {
    project: ProjectFn;
    countries: Feature<Geometry>[];
    width: number;
    height: number;
  }) => ReactNode;
  /** Opacity applied to the <g> containing the countries */
  landOpacity?: number;
  /** Whether to animate in country paths with a stagger */
  animateIn?: boolean;
}

let cachedTopo: Topology | null = null;
let cachedPromise: Promise<Topology> | null = null;

async function loadTopo(): Promise<Topology> {
  if (cachedTopo) return cachedTopo;
  if (!cachedPromise) {
    cachedPromise = fetch(TOPOJSON_URL, { cache: "force-cache" })
      .then((r) => r.json() as Promise<Topology>)
      .then((t) => {
        cachedTopo = t;
        return t;
      });
  }
  return cachedPromise;
}

export default function WorldMap({
  className,
  style,
  fill = "rgba(232, 68, 138, 0.08)",
  stroke = "rgba(232, 68, 138, 0.35)",
  strokeWidth = 0.5,
  children,
  landOpacity = 1,
}: WorldMapProps) {
  const [topology, setTopology] = useState<Topology | null>(cachedTopo);

  useEffect(() => {
    let alive = true;
    if (!topology) {
      loadTopo().then((t) => {
        if (alive) setTopology(t);
      });
    }
    return () => {
      alive = false;
    };
  }, [topology]);

  // Build the projection + path generator once per topology load.
  const { projection, pathGen, countries } = useMemo(() => {
    if (!topology) {
      return {
        projection: null as GeoProjection | null,
        pathGen: null as ReturnType<typeof geoPath> | null,
        countries: [] as Feature<Geometry>[],
      };
    }

    const collection = feature(
      topology,
      topology.objects.countries as GeometryCollection
    ) as FeatureCollection<Geometry>;

    const proj = geoEqualEarth().fitSize([MAP_WIDTH, MAP_HEIGHT], collection);
    const path = geoPath(proj);

    return {
      projection: proj,
      pathGen: path,
      countries: collection.features,
    };
  }, [topology]);

  const project: ProjectFn = useMemo(() => {
    return (lon, lat) => {
      if (!projection) return [0, 0];
      const p = projection([lon, lat]);
      return p ? [p[0], p[1]] : [0, 0];
    };
  }, [projection]);

  return (
    <svg
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g style={{ opacity: landOpacity }}>
        {pathGen &&
          countries.map((c, i) => {
            const d = pathGen(c);
            if (!d) return null;
            return (
              <path
                key={(c.id as string) ?? i}
                d={d}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
      </g>

      {children && pathGen
        ? children({ project, countries, width: MAP_WIDTH, height: MAP_HEIGHT })
        : null}
    </svg>
  );
}

/** Build a great-circle-ish quadratic SVG arc between two lon/lat points. */
export function arcPath(
  project: ProjectFn,
  from: [number, number],
  to: [number, number],
  curvature = 0.35
): { d: string; mid: [number, number] } {
  const [x1, y1] = project(from[0], from[1]);
  const [x2, y2] = project(to[0], to[1]);

  // Control point — perpendicular to the chord, offset by curvature × length
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  // Perpendicular unit vector, pulling the arc upward on the map.
  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);
  const lift = dist * curvature;
  // Always lift arcs "up" on screen (negative y) so they feel like great-circles
  const sign = ny < 0 ? 1 : -1;
  const cx = (x1 + x2) / 2 + nx * lift * sign;
  const cy = (y1 + y2) / 2 + ny * lift * sign;

  return {
    d: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`,
    mid: [cx, cy],
  };
}
