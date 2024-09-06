"use client";

import "../app/styles/globals.css";
import "../app/styles/home.css";
import Header from "./components/Header";
import Cards from "./components/cards";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}
