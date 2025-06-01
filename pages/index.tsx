import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
const Home = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Intro/>
    </main>
  );
};

export default Home;
