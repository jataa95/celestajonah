import Btn from "@/components/Btn";

export default function NotFound() {
  return (
    <div className="page wrap">
      <h1 className="serif display-xl">Not <em>here.</em></h1>
      <p style={{ margin: "1.5rem 0 2rem" }}>This page has moved, or never existed.</p>
      <Btn href="/">Back home</Btn>
    </div>
  );
}
