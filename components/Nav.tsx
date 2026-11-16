"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mid = [
  ["/journal", "Journal"],
  ["/about", "About"],
  ["/works", "All"],
] as const;

export default function Nav() {
  const path = usePathname();
  const on = (href: string) => path === href || path.startsWith(href + "/");
  return (
    <header className="nav">
      <Link href="/works" className="nav__side">
        <span className="plus" aria-hidden>+</span> Works
      </Link>
      <nav className="nav__mid" aria-label="Main">
        {mid.map(([href, label], i) => (
          <span key={href}>
            <Link href={href} className={`link-u ${on(href) ? "is-on" : ""}`}>{label}</Link>
            {i < mid.length - 1 && <span className="nav__sep"> / </span>}
          </span>
        ))}
      </nav>
      <Link href="/contact" className="nav__side nav__side--r">
        Contact <span className="plus" aria-hidden>+</span>
      </Link>
    </header>
  );
}
