import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Steps from "./components/Steps";
const Home = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Intro/>
      <Services/>
      <Steps/>
      <div className=" mt-[343px]">

      </div>
    </main>
  );
};

export default Home;