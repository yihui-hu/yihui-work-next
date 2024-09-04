"use client";

import "../app/styles/globals.css";
import "../app/styles/home.css";
import Image from "next/image";
import workImages from "./data/workImages";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [screen, setScreen] = useState<Window | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setScreen(window);
    setLoading(false);
  }, []);

  return (
    <div className="container">
      {!loading
        ? workImages.map((item, index) => {
            if (screen === undefined) {
              return null;
            }
            const randomX =
              Math.random() * (100 - (item.width / screen.innerWidth) * 100);
            const randomY =
              Math.random() * (100 - (item.height / screen.innerHeight) * 100);

            return (
              <motion.div drag dragMomentum={false} style={{ cursor: "grab" }}>
                <Image
                  src={item.url}
                  alt={item.url}
                  key={item.url}
                  width={item.width}
                  height={item.height}
                  className={`image-${index}`}
                  draggable={false}
                  style={{
                    left: `${randomX}vw`,
                    top: `${randomY}vh`,
                  }}
                />
              </motion.div>
            );
          })
        : null}
    </div>
  );
}
