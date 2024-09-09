"use client";

import { useState } from "react";
import "../app/styles/globals.css";
import "../app/styles/home.css";
import Header from "./components/Header";
import Cards from "./components/cards";
import { motion } from "framer-motion";
import { CardsContext, defaultFocusedCard } from "./cardsContext";

export default function Home() {
  const [focusedCard, setFocusedCard] = useState<string | null>(
    defaultFocusedCard.focusedCard
  );

  return (
    <motion.div className="container" onHoverStart={() => setFocusedCard(null)}>
      <CardsContext.Provider value={{ focusedCard, setFocusedCard }}>
        <Header />
        <Cards />
      </CardsContext.Provider>
    </motion.div>
  );
}
