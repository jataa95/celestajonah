import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Film from "@/components/Film";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt, openGraph: { images: [p.cover.src] } } : {};
}

export default async function PostPage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const i = posts.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = posts[i];
  const next = posts[(i + 1) % posts.length];

  return (
    <article className="page wrap post">
      <header className="post__head">
        <p className="label mute">
          <Link href="/journal" className="link-u">Journal</Link> / {p.tag}
        </p>
        <h1 className="serif display-l">{p.title}</h1>
        <p className="post__x serif">{p.excerpt}</p>
      </header>
      <div className="post__body">
        <div className="post__text">
          {p.body.map((b) => <p key={b}>{b}</p>)}
        </div>
        <div className="post__media">
          {p.film ? (
            <Film film={p.film} />
          ) : (
            <div className="ph" style={{ aspectRatio: `${p.cover.w} / ${p.cover.h}` }}>
              <Image src={p.cover.src} alt={p.cover.alt} fill sizes="(max-width: 900px) 100vw, 40vw" priority />
            </div>
          )}
        </div>
      </div>
      {p.gallery && (
        <div className="post__gallery">
          {p.gallery.map((m) => (
            <figure key={m.src} data-reveal>
              <div className="ph" style={{ aspectRatio: `${m.w} / ${m.h}` }}>
                <Image src={m.src} alt={m.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
              </div>
              {m.caption && <figcaption className="cap">{m.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      <Link href={`/journal/${next.slug}`} className="next">
        <span className="label mute">Next entry</span>
        <span className="serif next__t">{next.title}</span>
        <span className="ph next__img" style={{ aspectRatio: `${next.cover.w} / ${next.cover.h}` }}>
          <Image src={next.cover.src} alt="" fill sizes="200px" />
        </span>
      </Link>
    </article>
  );
}
