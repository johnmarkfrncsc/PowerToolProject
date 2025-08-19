import React from "react";
import Card from "../common/Card";
import bg from "../../assets/bg.jpg";
import impactDriver from "../../assets/FeaturedImage/impactDriver.jpg";
import impactDrill from "../../assets/FeaturedImage/impactDrill.jpg";
import circularSaw from "../../assets/FeaturedImage/circularSaw.jpg";

const featuredSection = () => {
  return (
    <>
      <section className="bg-gray-50 w-full min-h-screen text-center p-5">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <p className="textarea-sm font-light mb-8">
          Our best-selling tools, engineered for peak performance and
          durability.
        </p>

        <figure className="flex flex-wrap gap-10 justify-center pb-12">
          <Card
            title="Impact drill"
            image={`${impactDrill}`}
            description="Lightweight and powerful, perfect for jobs in tight spaces."
          />
          <Card
            title="High-Torque Impact Driver"
            image={`${impactDriver}`}
            description="Delivers unmatched power for tough fastening applications."
          />
          <Card
            title="Precision Circular Saw"
            image={`${circularSaw}`}
            description="Smooth, accurate cuts every time. The go-to tool for woodworking."
          />
        </figure>
      </section>
    </>
  );
};

export default featuredSection;
