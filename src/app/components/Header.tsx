import Currently from "./currently";
import Listening from "./listening";
import Reading from "./reading";

export default function Header() {
  return (
    <div className="header">
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <a style={{ color: "inherit", textDecoration: "none" }} href="/">
          Yihui Hu
          <br />
          <span style={{ color: "#a9a9a9", fontSize: 14 }}>何逸晖</span>
        </a>
      </div>
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
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span>Listening:</span>
        <Listening />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span>Reading:</span>
        <Reading />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span>Currently:</span>
        <Currently />
      </div>
      <span />
    </div>
  );
}
