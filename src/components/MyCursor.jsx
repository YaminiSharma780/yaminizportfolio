import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useMyTheme from "../hooks/useMyTheme";

export default function MyCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(followerRef.current, {
        x,
        y,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  const [mode] = useMyTheme();

  return (
    <>
      <div className={`my-cursor ${mode ? "dark" : ""}`} ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
}
