"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Touch devices have no hover, so pictures there turn from grey to colour
 * while they sit in the central band of the screen (works for vertical
 * scrolling and for the sideways-sliding hero rows).
 */
export default function FocusColor() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const els = document.querySelectorAll<HTMLElement>(".ph");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("in-focus", e.isIntersecting)),
      { rootMargin: "-47% -30% -47% -30%", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
