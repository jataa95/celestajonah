"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { artist } from "@/lib/content";
import MenuStrip from "@/components/MenuStrip";

const links = [
  { href: "/", label: "Home", note: "Portraits that look back", img: "/works/field.jpg", cap: "The Field (Violet), 2026" },
  { href: "/works", label: "Works", note: "Oil and graphite, 2026", img: "/works/stripes.jpg", cap: "Stripes, 2026" },
  { href: "/journal", label: "Journal", note: "Notes from the easel", img: "/stills/drawing.jpg", cap: "The drawing" },
  { href: "/about", label: "About", note: "Jonah Abasiekeme", img: "/scenes/studio.jpg", cap: "In the studio" },
  { href: "/contact", label: "Contact", note: "Commissions & enquiries", img: "/works/teddy.jpg", cap: "The Bear, 2026" },
] as const;

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<number | null>(null);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(path);
  if (path !== lastPath) {
    setLastPath(path);
    setOpen(false);
    setHover(null);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const on = (href: string) => (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));

  return (
    <>
      <header className={`nav ${open ? "nav--open" : ""}`}>
        <Link href="/" className="nav__logo serif" aria-label="celestajonah — home">
          celestajonah
        </Link>
        <button className="nav__menu" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
          <span className="nav__roll" aria-hidden>
            <span>{open ? "Close" : "Menu"}</span>
            <span>{open ? "Close" : "Menu"}</span>
          </span>
          <span className={`nav__icon ${open ? "is-x" : ""}`} aria-hidden>
            <i /><i />
          </span>
        </button>
      </header>

      <div id="site-menu" className={`menu ${open ? "menu--open" : ""}`} aria-hidden={!open} inert={!open}>
        <div className="menu__grid">
          <nav aria-label="Main" onMouseLeave={() => setHover(null)}>
            <ol>
              {links.map((l, i) => (
                <li key={l.href} style={{ ["--i" as string]: i }}>
                  <Link
                    href={l.href}
                    className={`menu__link ${on(l.href) ? "is-on" : ""} ${hover === i ? "is-hover" : ""}`}
                    onMouseEnter={() => setHover(i)}
                    onFocus={() => setHover(i)}
                    onClick={() => setOpen(false)}
                  >
                    <span className="label menu__n">{String(i).padStart(2, "0")}</span>
                    <span className="menu__label serif">{l.label}</span>
                    <span className="menu__note">{l.note}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <figure className="menu__art" aria-hidden>
            <div className="menu__frame">
              {links.map((l, i) => {
                const active = (hover ?? Math.max(0, links.findIndex((x) => on(x.href)))) === i;
                return (
                  <div key={l.href} className={`menu__img ${active ? "is-active" : ""}`}>
                    <Image src={l.img} alt="" fill sizes="(max-width: 900px) 40vw, 30vw" />
                  </div>
                );
              })}
            </div>
            <figcaption className="menu__cap">
              {links.map((l, i) => {
                const active = (hover ?? Math.max(0, links.findIndex((x) => on(x.href)))) === i;
                return <span key={l.href} className={active ? "is-active" : ""}>{l.cap}</span>;
              })}
            </figcaption>
          </figure>
          <MenuStrip active={open} />
        </div>
        <div className="menu__foot">
          <div className="menu__foot-col">
            <span className="label menu__foot-h">Write</span>
            <a href={`mailto:${artist.email}`} className="link-u">{artist.email}</a>
          </div>
          <div className="menu__foot-col menu__social">
            <span className="label menu__foot-h">Follow</span>
            <a href={artist.links.instagram} target="_blank" rel="noreferrer" className="link-u">Instagram</a>
            <a href={artist.links.tiktok} target="_blank" rel="noreferrer" className="link-u">TikTok</a>
            <a href={artist.links.youtube} target="_blank" rel="noreferrer" className="link-u">YouTube</a>
          </div>
        </div>
      </div>
    </>
  );
}
