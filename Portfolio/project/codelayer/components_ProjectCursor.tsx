import { useEffect, useState } from "react";

export default function ProjectCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", show);
      card.addEventListener("mouseleave", hide);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", show);
        card.removeEventListener("mouseleave", hide);
      });
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[9999] transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)"
      }}
    >
      <div className="w-[110px] h-[110px] rounded-full border border-orange-500 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-orange-500 backdrop-blur-sm">
        View Project
      </div>
    </div>
  );
}