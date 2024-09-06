import Image from "next/image";
import { motion } from "framer-motion";

export default function Currently() {
  return (
    <motion.div whileHover={{ rotate: 4 }}>
      <Image
        src="https://yihui-work.s3.us-east-2.amazonaws.com/sg_sota.webp"
        width="133"
        height="100"
        alt="currently missing summer in Singapore"
        className="currently-img"
      />
    </motion.div>
  );
}
