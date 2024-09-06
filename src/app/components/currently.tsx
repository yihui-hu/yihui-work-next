import Image from "next/image";
import { motion } from "framer-motion";

export default function Currently() {
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        className="currently-img-wrapper"
        whileHover={{ rotate: 8 }}
        dragSnapToOrigin={true}
        drag
      >
        <Image
          src="https://yihui-work.s3.us-east-2.amazonaws.com/sg_sota.webp"
          width={133}
          height={100}
          alt="currently missing summer in Singapore"
          className="currently-img"
          draggable={false}
        />
      </motion.div>
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          opacity: 0.4,
          userSelect: "none",
          fontSize: 9,
          zIndex: 1,
        }}
      >
        missing summer in singapore
      </div>
    </div>
  );
}
