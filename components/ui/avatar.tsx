import * as React from "react"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { src?: string; fallback?: string }>(
  ({ className, src, fallback, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[var(--color-surface-2)]",
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          className="aspect-square h-full w-full object-cover"
          alt="Avatar"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--color-surface-2)] text-[var(--color-text)]">
          {fallback || "HH"}
        </div>
      )}
    </div>
  )
)
Avatar.displayName = "Avatar"

export { Avatar }