
import React from "react";

import Hero from "./Hero.jsx";
import Donate from "./Donate";
import About from "./About";
import Stats from "./Stats";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Donation from "./Donation";
import Impact from "./Impact";


const Home = () => {

    return (
    <div className="pt-24">
      <Hero />
      
      <About />
      <Donate />
      <Stats />
      <Team />
      <Testimonials />
      <Donation />
      <Impact />
          
    </div>
  );
};

export default Home;