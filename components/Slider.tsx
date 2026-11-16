import Image from "next/image";
import type { Media } from "@/lib/content";

/** Mobile hero: two rows of pictures gliding sideways in opposite directions. */
export default function Slider({ columns }: { columns: Media[][] }) {
  const all = columns.flat();
  const rows = [all.filter((_, i) => i % 2 === 0), all.filter((_, i) => i % 2 === 1)];
  return (
    <div className="slider" aria-hidden>
      {rows.map((row, r) => (
        <div key={r} className={`slider__row ${r ? "slider__row--rev" : ""}`}>
          <div className="slider__track">
            {[...row, ...row].map((m, i) => (
              <div key={i} className="slider__item ph" style={{ aspectRatio: `${m.w} / ${m.h}` }}>
                <Image src={m.src} alt="" fill sizes="45vw" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
