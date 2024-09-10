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
      <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
        <div
        className="header-card"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            transform: "rotate(-2deg)",
            height: "fit-content",
          }}
        >
          <a style={{ color: "inherit", textDecoration: "none" }} href="/">
            Yihui Hu
            <br />
            <span style={{ color: "#a9a9a9", fontSize: 14 }}>何逸晖</span>
          </a>
        </div>
        <div
          className="header-card"
          style={{
            transform: "rotate(2deg)",
            paddingInline: 8,
            paddingBlock: 4,
            height: "fit-content",
          }}
        >
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
        </div>
        <div
          className="works-index-container header-card"
          style={{ transform: "rotate(-1deg)" }}
        >
          <div style={{ display: "flex", flexDirection: "row", paddingTop: 2 }}>
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
            <div className="works-index">
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
      </div>
      <div
        className="currently-container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 48,
          alignItems: "center",
          height: "fit-content",
        }}
      >
        <Listening />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            transform: "rotate(4deg)",
          }}
        >
          <Reading />
        </div>
        <Currently />
      </div>
    </div>
  );
}
