import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "solid" | "line"; className?: string };

/** Premium pill button: rolling label + arrow disc that slides through on hover. */
export default function Btn({ href, children, variant = "solid", className = "" }: Props) {
  const inner = (
    <>
      <span className="btn__roll">
        <span>{children}</span>
        <span aria-hidden>{children}</span>
      </span>
      <span className="btn__disc" aria-hidden>
        <svg viewBox="0 0 16 16" width="14" height="14"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <svg viewBox="0 0 16 16" width="14" height="14"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
    </>
  );
  const cls = `btn btn--${variant} ${className}`;
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>{inner}</Link>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  );
}
