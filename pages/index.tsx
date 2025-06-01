import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
const Home = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Intro/>
      <Services/>
    </main>
  );
};

export default Home;