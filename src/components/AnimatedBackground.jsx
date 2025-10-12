import { motion } from "framer-motion";

const AnimatedBackground = ({ variant = "default" }) => {
  const patterns = {
    default: [
      {
        size: 400,
        color: "rgba(129, 140, 248, 0.08)",
        position: { top: "80px", left: "-40px" },
        animate: { x: [0, 100, 0], y: [0, 50, 0] },
        transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
      },
      {
        size: 500,
        color: "rgba(236, 72, 153, 0.08)",
        position: { bottom: "80px", right: "-40px" },
        animate: { x: [0, -100, 0], y: [0, -50, 0] },
        transition: { duration: 25, repeat: Infinity, ease: "easeInOut" },
      },
    ],
    center: [
      {
        size: 350,
        color: "rgba(129, 140, 248, 0.08)",
        position: { top: "25%", left: "25%" },
        animate: { x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] },
        transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
      },
      {
        size: 450,
        color: "rgba(236, 72, 153, 0.08)",
        position: { bottom: "25%", right: "25%" },
        animate: { x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] },
        transition: { duration: 22, repeat: Infinity, ease: "easeInOut" },
      },
    ],
    minimal: [
      {
        size: 300,
        color: "rgba(129, 140, 248, 0.08)",
        position: { top: "40px", right: "80px" },
        animate: { y: [0, 30, 0] },
        transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
      },
      {
        size: 350,
        color: "rgba(236, 72, 153, 0.08)",
        position: { bottom: "80px", left: "80px" },
        animate: { y: [0, -30, 0] },
        transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
      },
    ],
  };

  const shapes = patterns[variant] || patterns.default;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
            borderRadius: "9999px",
            filter: "blur(60px)",
            ...shape.position,
          }}
          animate={shape.animate}
          transition={shape.transition}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
