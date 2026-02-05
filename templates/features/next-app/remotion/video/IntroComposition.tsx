import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const IntroComposition = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        background: "radial-gradient(circle at top, #0ea5e9 0%, #0f172a 65%)",
        color: "#f8fafc",
        display: "flex",
        fontFamily: "Inter, sans-serif",
        fontSize: 80,
        justifyContent: "center",
        letterSpacing: -2,
        opacity
      }}
    >
      dev-toolbox remotion
    </AbsoluteFill>
  );
};
