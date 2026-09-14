import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);
    const handleMouseLeaveWindow = () => setHidden(true);
    const handleMouseEnterWindow = () => setHidden(false);

    document.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", handleMouseLeaveWindow);
    window.addEventListener("mouseover", handleMouseEnterWindow);

    const interactiveEls = document.querySelectorAll(
      "a, button, .project-card, .skill-item, input, textarea"
    );

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", handleMouseLeaveWindow);
      window.removeEventListener("mouseover", handleMouseEnterWindow);

      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${hovering ? "hovering" : ""} ${
          hidden ? "hidden" : ""
        }`}
      />
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${hidden ? "hidden" : ""}`}
      />
    </>
  );
}

export default CustomCursor;