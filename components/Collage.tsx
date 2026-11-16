"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Media } from "@/lib/content";

const speeds = [0.35, 0.1, -0.05, 0.18, 0.4];

/** Five-column photo collage; each column drifts at its own speed on scroll. */
export default function Collage({ columns }: { columns: Media[][] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cols = Array.from(root.querySelectorAll<HTMLElement>(".collage__col"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      cols.forEach((c, i) => (c.style.transform = `translate3d(0, ${-y * speeds[i % speeds.length]}px, 0)`));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={ref} className="collage">
      {columns.map((col, ci) => (
        <div key={ci} className={`collage__col collage__col--${ci}`}>
          {col.map((m, mi) => (
            <figure key={m.src + mi} className="collage__item" style={{ ["--d" as string]: `${(ci * 3 + mi) * 70}ms` }}>
              <div className="ph" style={{ aspectRatio: `${m.w} / ${m.h}` }}>
                <Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 45vw, 26vw" priority={mi === 0} />
              </div>
              {m.caption && <figcaption className="cap">{m.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
