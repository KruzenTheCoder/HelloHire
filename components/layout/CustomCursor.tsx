"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const { x, y, isTouch } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    // Detect reduced motion preference
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    setIsVisible(true);
    document.body.classList.add("cursor-active");

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-text]'
      );
      if (interactive) {
        setIsHovering(true);
        setHoverText(
          interactive.getAttribute("data-cursor-text") || "Click"
        );
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-text]'
      );
      if (interactive) {
        setIsHovering(false);
        setHoverText("");
      }
    };

    document.addEventListener("mouseover", handleMouseEnter, { passive: true });
    document.addEventListener("mouseout", handleMouseLeave, { passive: true });

    return () => {
      document.body.classList.remove("cursor-active");
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isTouch]);

  if (!isVisible || isTouch) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        animate={{
          x: x - (isHovering ? 30 : 15),
          y: y - (isHovering ? 30 : 15),
          width: isHovering ? 60 : 30,
          height: isHovering ? 60 : 30,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          border: `1.5px solid ${isHovering ? "#E8448A" : "rgba(232, 68, 138, 0.5)"}`,
          backgroundColor: isHovering
            ? "rgba(232, 68, 138, 0.12)"
            : "transparent",
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mixBlendMode: "difference",
        }}
      >
        {isHovering && hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              fontSize: "0.55rem",
              fontWeight: 600,
              color: "#E8448A",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        animate={{
          x: x - 3,
          y: y - 3,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 35,
          mass: 0.2,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#E8448A",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
