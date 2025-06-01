import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Updates from "./components/Updates";
import Footer from "./components/Footer";
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
      <Footer/>
    </main>
  );  
};

export default Home;
