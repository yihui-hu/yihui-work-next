import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Reading() {
  const [opacity, setOpacity] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);

  return (
    <motion.div
      style={{ position: "relative", marginLeft: 10, marginTop: 10 }}
      onHoverStart={() => setOpacity(0)}
      onHoverEnd={() => setOpacity(1)}
    >
      <motion.div className="book-top" animate={{ opacity: opacity }} />
      <motion.div className="book-spine" animate={{ opacity: opacity }} />
      <motion.div
        whileHover={{ translateX: -10, translateY: -10 }}
        transition={{ type: "easeInOut" }}
      >
        <Image
          className="book"
          src="https://m.media-amazon.com/images/I/61rS4ktR59L._AC_UF1000,1000_QL80_.jpg"
          width="100"
          height="150"
          alt="A New Program for Graphic Design by David Reinfurt"
          priority={true}
          style={{ userSelect: "none" }}
          draggable="false"
        />
      </motion.div>
    </motion.div>
  );
}
