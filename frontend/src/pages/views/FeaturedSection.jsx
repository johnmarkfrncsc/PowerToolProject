import React from "react";
import Card from "../../components/Card";
import bg from "../../assets/bg.jpg";
import impactDriver from "../../assets/impactDriver.jpg";
import impactDrill from "../../assets/impactDrill.jpg";
import circularSaw from "../../assets/circularSaw.jpg";

const featuredSection = () => {
  return (
    <>
      <section className="bg-white w-full h-screen p-5 text-center">
        <h1>Featured Products</h1>
        <p>
          Our best-selling tools, engineered for peak performance and
          durability.
        </p>

        <figure className="flex flex-wrap gap-10 justify-center">
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
