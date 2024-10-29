

// src/pages/Home.js
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import MenuBar from "../components/MenuBar";
import AboutUs from "../components/AboutUs";
import WhatWeDo from "../components/WhatWeDo";
import LetsTalk from "../components/LetsTalk";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";



const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <MenuBar />
      <AboutUs />
      <WhatWeDo />
      <LetsTalk />
      <WhyChooseUs />
      <Testimonials />
      {/* Other sections will follow */}
    </div>
  );
};

export default Home;
