"use client";
import { useEffect, useRef } from "react";
import type { Film as F } from "@/lib/content";

/** Studio reel: autoplays muted while visible; native controls let visitors turn sound on. */
export default function Film({ film, className = "" }: { film: F; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.3 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <figure className={`film ${className}`}>
      <video ref={ref} src={film.src} poster={film.poster} muted loop playsInline controls preload="metadata" />
      <figcaption className="cap">{film.caption}</figcaption>
    </figure>
  );
}
