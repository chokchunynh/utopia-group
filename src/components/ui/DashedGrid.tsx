export default function DashedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          mask: "radial-gradient(circle at center, white 0%, transparent 70%)",
          WebkitMask:
            "radial-gradient(circle at center, white 0%, transparent 70%)",
        }}
      >
        <defs>
          <pattern
            id="dashed-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="6 6"
              className="text-gray-300/60"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dashed-grid)" />
      </svg>
    </div>
  );
}
