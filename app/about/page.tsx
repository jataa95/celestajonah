import Btn from "@/components/Btn";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollText from "@/components/ScrollText";
import { artist, themes } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="page wrap">
      <div className="split">
        <div>
          <p className="label mute">About</p>
          <h1 className="serif display-l">
            Jonah <br />
            <em>Abasiekeme</em>
          </h1>
          <p className="serif split__sub"><em>Known as Celesta · Nigerian portrait painter</em></p>
          <div className="split__text">
            <p>
              Jonah Abasiekeme, known as Celesta, is a Nigerian artist who paints portraits in oil and draws in
              graphite. Her sitters are mostly young: girls in wrapped scarves, a boy against a smoky wall, a child
              holding a bear. They look straight back at you.
            </p>
            <p>
              Each work begins as a careful pencil drawing, washed in a warm brown underpainting of oil colour and
              turpentine, then built up layer by layer. A single canvas can take{" "}
              <Link href="/journal/480-hours" className="link-u">four hundred and eighty hours</Link>.
            </p>
            <p>
              She shares the process openly with a growing community on Instagram and TikTok. Her red series was
              recently shown together on the gallery wall for the first time.
            </p>
          </div>
        </div>
        <figure className="split__img" data-reveal>
          <div className="ph" style={{ aspectRatio: "576 / 1024" }}>
            <Image src="/scenes/studio.jpg" alt="Celesta at the easel" fill sizes="(max-width: 900px) 100vw, 32vw" priority />
          </div>
          <figcaption className="cap">In the studio</figcaption>
        </figure>
      </div>

      <section className="statement">
        <ScrollText
          words={[
            { text: "That which you" },
            { text: "need", italic: true },
            { text: "is always" },
            { text: "around you.", italic: true },
          ]}
        />
      </section>

      <ol className="themes">
        {themes.map((t, i) => (
          <li key={t} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
            <span className="label mute">{String(i + 1).padStart(2, "0")}</span>
            <span className="serif"><em>{t}</em></span>
          </li>
        ))}
      </ol>
      <div className="row-btns">
        <Btn href="/works">View works</Btn>
        <Btn href="/contact" variant="line">Commissions &amp; enquiries</Btn>
        <Btn href={`mailto:${artist.email}`} variant="line">Email</Btn>
      </div>
    </div>
  );
}
