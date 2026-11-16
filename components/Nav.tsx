"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { artist } from "@/lib/content";

const links = [
  ["/", "Home"],
  ["/works", "Works"],
  ["/journal", "Journal"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(path);
  if (path !== lastPath) {
    setLastPath(path);
    setOpen(false);
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
        <button className="nav__menu" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
          <span>{open ? "Close" : "Menu"}</span>
          <span className={`nav__icon ${open ? "is-x" : ""}`} aria-hidden>
            <i /><i />
          </span>
        </button>
      </header>

      <div id="site-menu" className={`menu ${open ? "menu--open" : ""}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Main">
          <ol>
            {links.map(([href, label], i) => (
              <li key={href} style={{ ["--i" as string]: i }}>
                <Link href={href} className={`menu__link serif ${on(href) ? "is-on" : ""}`} onClick={() => setOpen(false)}>
                  <span className="label menu__n">{String(i).padStart(2, "0")}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="menu__foot">
          <a href={`mailto:${artist.email}`} className="link-u">{artist.email}</a>
          <span className="menu__social">
            <a href={artist.links.instagram} target="_blank" rel="noreferrer" className="link-u">Instagram</a>
            <a href={artist.links.tiktok} target="_blank" rel="noreferrer" className="link-u">TikTok</a>
            <a href={artist.links.youtube} target="_blank" rel="noreferrer" className="link-u">YouTube</a>
          </span>
        </div>
      </div>
    </>
  );
}
