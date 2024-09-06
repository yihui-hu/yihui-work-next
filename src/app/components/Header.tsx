import Currently from "./Currently";
import Listening from "./Listening";
import Reading from "./Reading";

export default function Header() {
  return (
    <div
      style={{
        margin: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 32,
        fontSize: 13,
      }}
    >
      <span>
        <a style={{ color: "inherit", textDecoration: "none" }} href="/">
          yihui_hu
        </a>
      </span>
      <span>
        I like to design and program. <br />
        Previously at{" "}
        <a className="link" href="https://apple.com">
          Apple
        </a>{" "}
        and{" "}
        <a className="link" href="https://typo.by">
          Typo*
        </a>
        . <br />
        <br />
        Find me on{" "}
        <a className="link" href="https://are.na/yihui-h">
          Are.na
        </a>
        ,{" "}
        <a className="link" href="https://github.com/yihui-hu">
          GitHub
        </a>
        , <br />
        <a className="link" href="https://twitter.com/_yihui">
          Twitter
        </a>
        ,{" "}
        <a className="link" href="https://linkedin.com/in/yihuihu">
          LinkedIn
        </a>
        , and{" "}
        <a className="link" href="https://read.cv/yihui">
          Read.cv
        </a>
        .
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span>Listening:</span>
        <Listening />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span>Reading:</span>
        <Reading />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span>Currently:</span>
        <Currently />
      </div>
    </div>
  );
}
