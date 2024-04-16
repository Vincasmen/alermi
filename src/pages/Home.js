import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Openinghours from "../components/Openinghours";
import Separator from "../components/Separator";
import Insurance from "../components/Insurance";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Separator />
      <Openinghours />
      <Separator />
      <Insurance />
      <Separator />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
