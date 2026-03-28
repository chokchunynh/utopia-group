import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Utopia Group — Malaysia's #1 AI Implementation Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #116dff 0%, #3d8bff 50%, #06B6D4 100%)",
          }}
        />

        {/* Subtle dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.4,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            padding: "60px",
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-2px",
              color: "#0a0a0a",
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            UTOPIA GROUP
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 4,
              borderRadius: 2,
              background: "#116dff",
              marginBottom: 24,
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#4b5563",
              textAlign: "center",
              lineHeight: 1.3,
              maxWidth: 800,
            }}
          >
            {"Malaysia's #1 AI Implementation Partner"}
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 40,
            }}
          >
            {[
              { value: "35+", label: "Companies" },
              { value: "173", label: "Business Units" },
              { value: "400+", label: "Staff" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: "#116dff",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#6b7280",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            background: "#116dff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            utopiagroup.com.my
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
