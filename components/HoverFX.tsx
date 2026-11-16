"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Premium image hover for mouse users:
 *  - the image frame insets, the picture zooms and drifts against the cursor
 *  - a soft cursor disc trails the pointer and grows into "View" over linked images
 * Disabled for touch devices and reduced-motion users.
 */
export default function HoverFX() {
  const disc = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const path = usePathname();

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = disc.current;
    if (!fine || still || !el) return;
    document.documentElement.classList.add("fx-on");

    let x = -100, y = -100, cx = x, cy = y, raf = 0;
    let active: HTMLElement | null = null;

    const tick = () => {
      cx += (x - cx) * 0.16;
      cy += (y - cy) * 0.16;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const leave = () => {
      if (!active) return;
      active.classList.remove("is-hover");
      active.style.removeProperty("--mx");
      active.style.removeProperty("--my");
      active = null;
      el.classList.remove("is-on", "is-link");
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(".ph");
      if (target !== active) {
        leave();
        if (target) {
          active = target;
          target.classList.add("is-hover");
          const link = target.closest("a");
          el.classList.add("is-on");
          el.classList.toggle("is-link", !!link);
          if (label.current) label.current.textContent = link ? (link.dataset.cursor ?? "View") : "";
        }
      }
      if (active) {
        const r = active.getBoundingClientRect();
        active.style.setProperty("--mx", ((x - r.left) / r.width - 0.5).toFixed(3));
        active.style.setProperty("--my", ((y - r.top) / r.height - 0.5).toFixed(3));
      }
    };
    const onOut = (e: PointerEvent) => { if (!e.relatedTarget) leave(); };
    const onDown = () => el.classList.add("is-down");
    const onUp = () => el.classList.remove("is-down");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("scroll", leave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      leave();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("scroll", leave);
      document.documentElement.classList.remove("fx-on");
    };
  }, [path]);

  return (
    <div ref={disc} className="cursor" aria-hidden>
      <span className="cursor__disc">
        <span ref={label} className="cursor__label" />
      </span>
    </div>
  );
}
