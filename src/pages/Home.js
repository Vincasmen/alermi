import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Openinghours from "../components/Openinghours";
import Separator from "../components/Separator";
import Insurance from "../components/Insurance";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Separator />
      <Openinghours />
      <Insurance />
      <FAQ />
    </div>
  );
};

export default Home;
