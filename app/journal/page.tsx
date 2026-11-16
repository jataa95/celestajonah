import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/content";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <div className="page">
      <h1 className="serif display-xl page__title wrap">Journal</h1>
      <div className="cards">
        {posts.map((p, i) => (
          <Link key={p.slug} href={`/journal/${p.slug}`} className={`card card--${i}`} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
            <div className="ph card__img">
              <Image src={p.cover.src} alt={p.cover.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
            </div>
            <p className="label mute">{p.tag}</p>
            <p className="label card__t">{p.title}</p>
            <p className="card__x serif">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
