import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Reading() {
  const isMobile = useMediaQuery("(max-width: 876px)");
  const [opacity, setOpacity] = useState<number>(1);

  return (
    <motion.a
      style={{
        position: "relative",
        marginLeft: 10,
        marginTop: 10,
        cursor: "pointer",
      }}
      href="https://www.goodreads.com/book/show/51572616-a-new-program-for-graphic-design"
    >
      <motion.div className="book-top" animate={{ opacity: opacity }} />
      <motion.div className="book-spine" animate={{ opacity: opacity }} />
      <motion.div
        whileHover={{ translateX: -8, translateY: -4 }}
        transition={{ type: "easeInOut", duration: 0.2 }}
        onHoverStart={() => setOpacity(0)}
        onHoverEnd={() => setOpacity(1)}
      >
        <Image
          className="book"
          src="https://m.media-amazon.com/images/I/61rS4ktR59L._AC_UF1000,1000_QL80_.jpg"
          width={isMobile ? 60 : 80}
          height={isMobile ? 90 : 120}
          alt="A New Program for Graphic Design by David Reinfurt"
          priority={true}
          style={{ userSelect: "none" }}
          draggable="false"
        />
      </motion.div>
    </motion.a>
  );
}
