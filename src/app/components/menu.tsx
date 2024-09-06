import { motion } from "framer-motion";

export default function Menu() {
  return (
    <motion.div className="home-menu">
      <span>About</span>
      <span>Works</span>
      <span>Colophon</span>
    </motion.div>
  );
}
