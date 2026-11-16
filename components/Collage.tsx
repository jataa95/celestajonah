"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { works, type Media } from "@/lib/content";

const workBySrc = new Map(works.map((w) => [w.image.src, w.slug]));

// Gentle drift while the sticky hero is covered by the next section.
const speeds = [0.22, 0.08, 0.03, 0.13, 0.26];

/** Five-column photo collage; each column drifts at its own speed on scroll. */
export default function Collage({ columns }: { columns: Media[][] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cols = Array.from(root.querySelectorAll<HTMLElement>(".collage__col"));
    const hero = root.closest<HTMLElement>(".hero");
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      cols.forEach((c, i) => (c.style.transform = `translate3d(0, ${-y * speeds[i % speeds.length]}px, 0)`));
      // 0 → 1 as the next section covers the hero; drives the recede effect in CSS.
      const extra = hero ? hero.offsetHeight - window.innerHeight : 0;
      hero?.style.setProperty("--p", Math.min(1, Math.max(0, (y - extra) / window.innerHeight)).toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={ref} className="collage">
      {columns.map((col, ci) => (
        <div key={ci} className={`collage__col collage__col--${ci}`}>
          {col.map((m, mi) => (
            <figure
              key={m.src + mi}
              className="collage__item"
              style={{ ["--d" as string]: `${(ci * 2 + mi) * 80}ms`, ["--g" as string]: (m.h / m.w).toFixed(3) }}
            >
              {workBySrc.has(m.src) ? (
                <Link href={`/works/${workBySrc.get(m.src)}`} className="ph">
                  <Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 45vw, 26vw" priority={mi === 0} />
                </Link>
              ) : (
                <div className="ph">
                  <Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 45vw, 26vw" priority={mi === 0} />
                </div>
              )}
              {m.caption && <figcaption className="cap">{m.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
