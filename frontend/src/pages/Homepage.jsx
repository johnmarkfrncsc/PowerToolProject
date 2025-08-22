import React from "react";
import Navbar from "../components/common/Navbar.jsx";
import FeaturedSection from "../components/home/FeaturedSection.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import AboutUsSection from "../components/home/AboutUsSection.jsx";
import CallActionSection from "../components/home/CallActionSection.jsx";

const Homepage = () => {
  return (
    <>
      <div className="bg-gray-50 h-screen w-full text-black">
        <Navbar />

        <HeroSection />

        <FeaturedSection />
        <AboutUsSection />
        <CallActionSection />
      </div>
    </>
  );
};

export default Homepage;
