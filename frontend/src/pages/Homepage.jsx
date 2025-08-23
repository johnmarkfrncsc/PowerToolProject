import FeaturedSection from "../components/home/FeaturedSection.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import AboutUsSection from "../components/home/about_us/AboutUsSection.jsx";
import CallActionSection from "../components/home/CallActionSection.jsx";

const Homepage = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen w-full text-black">
        <HeroSection />
        <FeaturedSection />
        <AboutUsSection />
        <CallActionSection />
      </div>
    </>
  );
};

export default Homepage;
