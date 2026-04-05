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
          background: "linear-gradient(135deg, #0f1729 0%, #1a2744 40%, #0d3b66 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(17,109,255,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
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
            padding: "48px 60px",
          }}
        >
          {/* Pill badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(6,182,212,0.4)",
              backgroundColor: "rgba(6,182,212,0.1)",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#06B6D4",
              }}
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#67e8f9",
                letterSpacing: "0.5px",
              }}
            >
              We Operate 173 Business Units on AI
            </span>
          </div>

          {/* Logo text */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: "-3px",
              color: "#ffffff",
              lineHeight: 1,
              marginBottom: 16,
            }}
          >
            UTOPIA GROUP
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              lineHeight: 1.4,
              maxWidth: 700,
              marginBottom: 40,
            }}
          >
            {"Malaysia's #1 AI Implementation Partner"}
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 56,
            }}
          >
            {[
              { value: "RM130M+", label: "Group Revenue" },
              { value: "35+", label: "Companies" },
              { value: "400+", label: "Staff on AI" },
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
                    fontSize: 40,
                    fontWeight: 800,
                    color: "#116dff",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.5)",
                    marginTop: 6,
                    fontWeight: 500,
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
            background: "linear-gradient(90deg, #116dff 0%, #3d8bff 50%, #06B6D4 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            utopiagroup.com.my
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
