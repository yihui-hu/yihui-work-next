"use client";

import "../app/styles/globals.css";
import "../app/styles/home.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Cards from "./components/cards";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}
