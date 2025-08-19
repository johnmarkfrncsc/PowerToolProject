import React from "react";
import Navbar from "../components/common/Navbar.jsx";
import FeaturedSection from "../components/home/FeaturedSection.jsx";

import HeroSection from "../components/home/HeroSection.jsx";

const Homepage = () => {
  return (
    <>
      <div className="bg-white h-screen w-full text-black">
        <Navbar />

        <HeroSection />

        <FeaturedSection />
      </div>
    </>
  );
};

export default Homepage;
