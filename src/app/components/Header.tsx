import { RightArrow } from "./arrows";
import Currently from "./currently";
import Listening from "./listening";
import Reading from "./reading";
import { CardsContext } from "../cardsContext";
import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import { works } from "../data/works";

interface HoverableWorkProps {
  id: string;
  children: ReactNode;
  url: string;
}

export default function Header() {
  const { setFocusedCard } = useContext(CardsContext);

  const HoverableWork = ({ id, children, url }: HoverableWorkProps) => {
    return (
      <motion.a
        href={url}
        className="hoverable-work"
        onHoverStart={() => setFocusedCard(id)}
        onHoverEnd={() => setFocusedCard(null)}
        style={{ cursor: "pointer" }}
      >
        {children}
      </motion.a>
    );
  };

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
        <br />
        <br />
        <a className="about-link" href="/about">
          More about me <RightArrow />
        </a>
      </span>
      <div className="works-index-container">
        <div
          style={{
            paddingInline: 8,
            paddingBottom: 2,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          works <div style={{ fontSize: 11, color: "#b9b9b9" }}>(18)</div>
        </div>
        <hr style={{ border: "0.5px solid #e9e9e9" }} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="works-index">
            {works.slice(0, 9).map((work) => {
              return (
                <HoverableWork id={work.id} url={work.url} key={work.id}>
                  {work.id}{" "}
                  <span style={{ color: "#b9b9b9" }}>{work.year}</span>
                </HoverableWork>
              );
            })}
          </div>
          <div
            className="works-index"
            style={{ borderLeft: "1px solid #e9e9e9" }}
          >
            {works.slice(10).map((work) => {
              return (
                <HoverableWork id={work.id} url={work.url} key={work.id}>
                  {work.id}{" "}
                  <span style={{ color: "#b9b9b9" }}>{work.year}</span>
                </HoverableWork>
              );
            })}
          </div>
        </div>
      </div>
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
    </div>
  );
}
