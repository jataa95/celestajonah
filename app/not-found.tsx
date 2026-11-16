import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page wrap">
      <h1 className="serif display-xl">Not <em>here.</em></h1>
      <p style={{ margin: "1.5rem 0 2rem" }}>This page has moved, or never existed.</p>
      <Link href="/" className="btn">Back home</Link>
    </div>
  );
}
