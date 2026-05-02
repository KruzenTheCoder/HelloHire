export default function GlowDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div
        style={{
          height: "1px",
          width: "100%",
          maxWidth: "600px",
          background:
            "linear-gradient(90deg, transparent, #E8448A, transparent)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
