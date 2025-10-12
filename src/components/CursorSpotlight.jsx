import { useEffect } from "react";

const CursorSpotlight = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".glass-spotlight");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default CursorSpotlight;
