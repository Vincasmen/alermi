import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Openinghours from "../components/Openinghours";
import Separator from "../components/Separator";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Separator />
      <Openinghours />
    </div>
  );
};

export default Home;
