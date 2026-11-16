"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { works } from "@/lib/content";

const DRIFT = -0.45; // px per frame when left alone

/**
 * Mobile menu filmstrip: drifts slowly on its own, can be dragged and flung
 * with momentum, loops endlessly, and the cards lean with the speed of travel.
 */
export default function MenuStrip({ active }: { active: boolean }) {
  const row = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const r = row.current;
    const t = track.current;
    if (!active || !r || !t || r.offsetParent === null) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let x = 0;
    let v = still ? 0 : DRIFT;
    let dragging = false;
    let lastX = 0;
    let lastT = 0;
    let raf = 0;
    const half = () => t.scrollWidth / 2;

    const frame = () => {
      if (!dragging) {
        const target = still ? 0 : DRIFT;
        v += (target - v) * 0.035; // momentum eases back into the drift
        x += v;
      }
      const h = half();
      if (h > 0) {
        if (x <= -h) x += h;
        if (x > 0) x -= h;
      }
      const lean = Math.max(-8, Math.min(8, v * 0.9));
      t.style.transform = `translate3d(${x}px, 0, 0)`;
      t.style.setProperty("--lean", `${lean}deg`);
      t.style.setProperty("--squeeze", String(1 - Math.min(0.06, Math.abs(v) * 0.004)));
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const down = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastT = performance.now();
      v = 0;
      r.setPointerCapture(e.pointerId);
      r.classList.add("is-dragging");
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      x += dx;
      const dt = Math.max(1, now - lastT);
      v = v * 0.4 + (dx / dt) * 16 * 0.6; // px per frame, smoothed
      lastX = e.clientX;
      lastT = now;
    };
    const up = () => {
      dragging = false;
      r.classList.remove("is-dragging");
    };

    r.addEventListener("pointerdown", down);
    r.addEventListener("pointermove", move);
    r.addEventListener("pointerup", up);
    r.addEventListener("pointercancel", up);
    return () => {
      cancelAnimationFrame(raf);
      r.removeEventListener("pointerdown", down);
      r.removeEventListener("pointermove", move);
      r.removeEventListener("pointerup", up);
      r.removeEventListener("pointercancel", up);
    };
  }, [active]);

  return (
    <div className="menu__strip" aria-hidden>
      <div className="menu__divider"><span /></div>
      <div ref={row} className="menu__strip-row">
        <div ref={track} className="menu__strip-track">
          {[...works, ...works].map((w, i) => (
            <figure key={i} className="menu__strip-item">
              <div className="menu__strip-img">
                <Image src={w.image.src} alt="" fill sizes="40vw" draggable={false} />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
