"use client";

import Image from "next/image";
import { worksReversed } from "../data/works";
import { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { RightArrow, UpRightArrow } from "./arrows";
import { CardsContext } from "../cardsContext";

export default function Cards() {
  const [screen, setScreen] = useState<Window | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const positionsRef = useRef<{ [key: number]: { x: string; y: string } }>({}); // Ref to store positions of each card
  const [zIndices, setZIndices] = useState<{
    [key: number]: number;
  }>({}); // State to store z-indices of each card
  const { focusedCard } = useContext(CardsContext);

  useEffect(() => {
    setScreen(window);
    setLoading(false);

    let initialZIndices: { [key: number]: number } = {};
    for (let i = 0; i < 19; i++) {
      let newZIndex = i + 100;
      initialZIndices[i] = newZIndex;
    }
    initialZIndices[-1] = 120; // This is our max zIndex, which will increment whenever user interacts w/ a card
    setZIndices(initialZIndices);
  }, []);

  const handleImageClick = (index: number) => {
    const newZIndices = { ...zIndices };
    newZIndices[-1] += 1;
    newZIndices[index] = newZIndices[-1];
    setZIndices(newZIndices);
  };

  // Generate random positions and store them in the ref
  const getRandomPosition = (index: number) => {
    if (!positionsRef.current[index] && screen !== undefined) {
      const randomX =
        Math.random() * (100 - (worksReversed[index].width / screen.innerWidth) * 100);
      const randomY =
        Math.random() *
        (100 - (worksReversed[index].height / (screen.innerHeight - 200)) * 100);
      positionsRef.current[index] = { x: `${randomX}vw`, y: `${randomY}vh` };
    }
    return positionsRef.current[index];
  };

  return !loading
    ? worksReversed.map((item, index) => {
        if (screen === undefined) return null;
        const { x, y } = getRandomPosition(index);
        const zIndex = zIndices[index];
        const cardInFocus =
          focusedCard !== null ? (focusedCard === item.id ? true : false) : true;

        return (
          <motion.div
            key={item.img_url}
            className="card-container"
            drag
            dragMomentum={false}
            style={{ zIndex: zIndex }}
            onMouseDown={() => handleImageClick(index)} // Handle click to set active index
            onTouchStart={() => handleImageClick(index)}
            whileHover={{ translateY: -4 }}
          >
            <div
              className={`card-${index} card`}
              style={{
                left: x,
                top: y,
                filter: cardInFocus ? "unset" : "blur(12px)",
                opacity: cardInFocus ? 1 : 0,
              }}
            >
              <div className="card-header">
                <a className="card-name card-link" href={item.url}>
                  <span>{item.id}</span>
                  {item.external ? <UpRightArrow /> : <RightArrow />}
                </a>
                <span className="card-name" style={{ opacity: 0.2 }}>
                  {item.year}
                </span>
              </div>
              <Image
                src={item.img_url}
                alt={item.img_url}
                width={item.width}
                height={item.height}
                draggable={false}
                priority={true}
                style={{ borderRadius: 6 }}
              />
            </div>
          </motion.div>
        );
      })
    : null;
}
