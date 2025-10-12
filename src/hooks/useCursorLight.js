import { useEffect } from "react";

export const useCursorLight = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const cards = document.querySelectorAll(
          ".liquid-glass-cursor-reactive"
        );

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();

          const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
          const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

          card.style.setProperty("--mouse-x", `${mouseX}%`);
          card.style.setProperty("--mouse-y", `${mouseY}%`);
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [enabled]);
};
