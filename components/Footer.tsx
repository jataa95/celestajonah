import Link from "next/link";
import { artist, works } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__cols">
          <div>
            <p className="footer__lede serif">
              Faces of <em>presence,</em> <em>memory,</em> <em>softness</em> and <em>strength.</em>
            </p>
          </div>
          <div>
            <p className="label footer__h">Works</p>
            {works.slice(0, 4).map((w) => (
              <Link key={w.slug} href={`/works/${w.slug}`} className="link-u">{w.title}</Link>
            ))}
          </div>
          <div>
            <p className="label footer__h">Explore</p>
            <Link href="/works" className="link-u">All works</Link>
            <Link href="/journal" className="link-u">Journal</Link>
            <Link href="/about" className="link-u">About</Link>
          </div>
          <div>
            <p className="label footer__h">Connect</p>
            <Link href="/contact" className="link-u">Contact</Link>
            <a href={artist.links.instagram} target="_blank" rel="noreferrer" className="link-u">Instagram</a>
            <a href={artist.links.tiktok} target="_blank" rel="noreferrer" className="link-u">TikTok</a>
            <a href={artist.links.youtube} target="_blank" rel="noreferrer" className="link-u">YouTube</a>
          </div>
        </div>
        <div className="footer__base">
          <span className="footer__mark serif" aria-hidden>Celesta</span>
          <p className="label">© 2026 {artist.known} · {artist.location}</p>
        </div>
      </div>
    </footer>
  );
}
