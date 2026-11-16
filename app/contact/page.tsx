import type { Metadata } from "next";
import Image from "next/image";
import { artist } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="page wrap">
      <div className="split">
        <div>
          <h1 className="serif display-xl">
            Let&rsquo;s <em>talk.</em>
          </h1>
          <p className="split__text contact__lede">
            For acquisitions, commissioned portraits, exhibitions and press, get in touch with Celesta directly.
          </p>
          <a href={`mailto:${artist.email}`} className="serif contact__email link-u">{artist.email}</a>
          <div className="contact__cols">
            <div>
              <p className="label mute">Follow</p>
              <a className="serif link-u" href={artist.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="serif link-u" href={artist.links.tiktok} target="_blank" rel="noreferrer">TikTok</a>
              <a className="serif link-u" href={artist.links.youtube} target="_blank" rel="noreferrer">YouTube</a>
            </div>
            <div>
              <p className="label mute">Studio</p>
              <span className="serif">{artist.location}</span>
            </div>
          </div>
        </div>
        <figure className="split__img">
          <div className="ph" style={{ aspectRatio: "443 / 608" }}>
            <Image src="/works/field.jpg" alt="The Field" fill sizes="(max-width: 900px) 100vw, 32vw" priority />
          </div>
          <figcaption className="cap">The Field (Violet), 2026</figcaption>
        </figure>
      </div>
    </div>
  );
}
