import Hero from "@/components/home-page/Hero";
import Slider from "@/components/home-page/Slider";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Hero />
      <Slider />
    </div>
  );
};

export default HomePage;
