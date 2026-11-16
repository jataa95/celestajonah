"use client";
import { useEffect, useRef, type ReactNode } from "react";

type Word = { text: string; italic?: boolean };

/** Large serif statement whose words darken one by one as it scrolls through the viewport. */
export default function ScrollText({ words, className = "" }: { words: Word[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("span[data-w]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const lit = p * spans.length;
      spans.forEach((s, i) => s.style.setProperty("--o", String(Math.min(1, Math.max(0, lit - i)))));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const out: ReactNode[] = [];
  words.forEach((w, wi) =>
    w.text.split(" ").forEach((t, ti) => {
      out.push(
        <span key={`${wi}-${ti}`} data-w className={w.italic ? "it" : undefined}>
          {t}
        </span>,
        " ",
      );
    }),
  );
  return (
    <p ref={ref} className={`scrolltext serif ${className}`}>
      {out}
    </p>
  );
}
