import Btn from "@/components/Btn";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Film from "@/components/Film";
import { artist, works } from "@/lib/content";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const w = works.find((x) => x.slug === slug);
  return w ? { title: w.title, description: w.lede, openGraph: { images: [w.image.src] } } : {};
}

export default async function WorkPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const i = works.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const w = works[i];
  const next = works[(i + 1) % works.length];
  const subject = encodeURIComponent(`Enquiry: ${w.title} (${w.subtitle})`);

  return (
    <article className="page wrap">
      <div className="detail">
        <div className="detail__copy">
          <p className="label mute">
            <Link href="/works" className="link-u">Works</Link> / {String(i + 1).padStart(2, "0")}
          </p>
          <h1 className="serif display-l">
            {w.title} <br />
            <em>({w.subtitle})</em>
          </h1>
          <p className="detail__lede serif">{w.lede}</p>
          {w.body.map((b) => <p key={b} className="detail__body">{b}</p>)}
          <dl className="specs">
            <dt>Year</dt><dd>{w.year}</dd>
            <dt>Medium</dt><dd>{w.medium}</dd>
            <dt>Artist</dt><dd>{artist.known}</dd>
            <dt>Edition</dt><dd>Unique</dd>
          </dl>
          <Btn href={`mailto:${artist.email}?subject=${subject}`}>Enquire about this work</Btn>
        </div>
        <div className="detail__media">
          <div className="ph" style={{ aspectRatio: `${w.image.w} / ${w.image.h}` }}>
            <Image src={w.image.src} alt={w.image.alt} fill sizes="(max-width: 900px) 100vw, 58vw" priority />
          </div>
          {(w.film || w.process?.length) && (
            <div className="detail__grid">
              {w.film && <Film film={w.film} />}
              {w.process?.map((m) => (
                <figure key={m.src} data-reveal>
                  <div className="ph" style={{ aspectRatio: w.film ? "9 / 16" : `${m.w} / ${m.h}` }}>
                    <Image src={m.src} alt={m.alt} fill sizes="(max-width: 900px) 50vw, 29vw" />
                  </div>
                  {m.caption && <figcaption className="cap">{m.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link href={`/works/${next.slug}`} className="next">
        <span className="label mute">Next work</span>
        <span className="serif next__t">{next.title}</span>
        <span className="ph next__img" style={{ aspectRatio: `${next.image.w} / ${next.image.h}` }}>
          <Image src={next.image.src} alt="" fill sizes="200px" />
        </span>
      </Link>
    </article>
  );
}
