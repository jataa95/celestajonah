import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { onEasel, works } from "@/lib/content";

export const metadata: Metadata = { title: "Works" };

export default function WorksPage() {
  return (
    <div className="page wrap">
      <h1 className="serif display-xl page__title">
        Wor<em>ks</em>
      </h1>
      <div className="works-grid">
        {works.map((w, i) => (
          <Link key={w.slug} href={`/works/${w.slug}`} className="wcard" data-reveal style={{ ["--d" as string]: `${(i % 2) * 90}ms` }}>
            <div className="ph wcard__img" style={{ aspectRatio: `${w.image.w} / ${w.image.h}` }}>
              <Image src={w.image.src} alt={w.image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="wcard__meta">
              <h2 className="serif">
                {w.title} <span className="mute">({w.subtitle})</span>
              </h2>
              <span className="label mute">{w.year}</span>
            </div>
            <p className="wcard__medium serif">{w.medium}</p>
          </Link>
        ))}
      </div>
      <div className="easel">
        <div className="rule-head">
          <p className="label">On the easel</p>
          <p className="label mute">New work in progress</p>
        </div>
        <div className="easel__row">
          {onEasel.map((m) => (
            <figure key={m.src} data-reveal>
              <div className="ph" style={{ aspectRatio: `${m.w} / ${m.h}` }}>
                <Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 50vw, 25vw" />
              </div>
              <figcaption className="cap">{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
