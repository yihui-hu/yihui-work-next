import Link from "next/link";
import "../app/styles/globals.css";
import "../app/styles/home.css";

export default function NotFound() {
  return (
    <div className="header">
      <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
        <Link
          href="/"
          className="header-card hoverable-work"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            transform: "rotate(-2deg)",
            height: "fit-content",
            paddingInline: 8,
            paddingBlock: 4,
          }}
        >
          how did we get here?
        </Link>
      </div>
    </div>
  );
}
