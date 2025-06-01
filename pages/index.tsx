import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Updates from "./components/Updates";
const Home = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Intro />
      <Services />
      <Steps />
      <Events />
      <Testimonials />
      <Updates/>
    </main>
  );  
};

export default Home;
