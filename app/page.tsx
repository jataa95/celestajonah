import Image from "next/image";
import Link from "next/link";
import Collage from "@/components/Collage";
import ScrollText from "@/components/ScrollText";
import Film from "@/components/Film";
import { artist, collage, posts, works } from "@/lib/content";

export default function Home() {
  const feature = works[0];
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1 className="hero__mark serif">
          Celesta
          <span className="sr-only"> — {artist.fullName}</span>
        </h1>
        <p className="hero__intro">
          {artist.fullName}.<br />
          {artist.role}
        </p>
        <Collage columns={collage} />
      </section>

      {/* STATEMENT */}
      <section className="statement wrap">
        <ScrollText
          words={[
            { text: "Celesta", italic: true },
            { text: "is a painter who renders young African faces in oil and graphite as quiet meditations on" },
            { text: "presence,", italic: true },
            { text: "memory,", italic: true },
            { text: "softness", italic: true },
            { text: "and" },
            { text: "strength.", italic: true },
          ]}
        />
      </section>

      {/* SELECTED WORK */}
      <section className="feature wrap">
        <div className="rule-head">
          <p className="label">Selected work</p>
          <Link href="/works" className="label link-u">All works</Link>
        </div>
        <div className="feature__grid">
          <Link href={`/works/${feature.slug}`} className="feature__img ph" data-reveal style={{ aspectRatio: `${feature.image.w} / ${feature.image.h}` }}>
            <Image src={feature.image.src} alt={feature.image.alt} fill sizes="(max-width: 900px) 100vw, 55vw" />
          </Link>
          <div className="feature__copy" data-reveal>
            <h2 className="serif display-m">
              {feature.title} <br />
              <em>({feature.subtitle})</em>
            </h2>
            <div className="feature__text serif">
              <p>{feature.lede}</p>
              {feature.body.map((b) => <p key={b}>{b}</p>)}
            </div>
            {feature.process?.[0] && (
              <div className="feature__thumb ph" style={{ aspectRatio: `${feature.process[0].w} / ${feature.process[0].h}` }}>
                <Image src={feature.process[0].src} alt={feature.process[0].alt} fill sizes="200px" />
              </div>
            )}
            <dl className="specs">
              <dt>Year</dt><dd>{feature.year}</dd>
              <dt>Medium</dt><dd>{feature.medium}</dd>
              <dt>Series</dt><dd>{feature.subtitle}</dd>
              <dt>Edition</dt><dd>Unique</dd>
            </dl>
            <Link href={`/works/${feature.slug}`} className="btn">View the work →</Link>
          </div>
        </div>
      </section>

      {/* FROM THE STUDIO */}
      <section className="studio">
        <div className="studio__inner wrap">
          <div className="studio__copy" data-reveal>
            <p className="label">From the studio</p>
            <h2 className="serif display-l">
              A sneak peek <br />into <em>Celesta&rsquo;s</em> <br />process.
            </h2>
            <p className="studio__lede">
              Every portrait begins as a pencil drawing, washed over in warm brown, then built up layer by layer until
              the eyes look back.
            </p>
            <Link href="/journal/480-hours" className="label link-u">480 hours in 13 seconds →</Link>
          </div>
          <div className="studio__film" data-reveal>
            <Film film={{ src: "/video/boy.mp4", poster: "/video/boy-poster.jpg", caption: "Studio reel — sound on" }} />
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="journal-teaser">
        <h2 className="serif display-m wrap">Journal</h2>
        <div className="cards">
          {posts.map((p, i) => (
            <Link key={p.slug} href={`/journal/${p.slug}`} className={`card card--${i}`} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <div className="ph card__img">
                <Image src={p.cover.src} alt={p.cover.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
              </div>
              <p className="label mute">{p.tag}</p>
              <p className="label card__t">{p.title}</p>
            </Link>
          ))}
        </div>
        <div className="center">
          <Link href="/journal" className="btn btn--stone">All journal</Link>
        </div>
      </section>
    </>
  );
}
