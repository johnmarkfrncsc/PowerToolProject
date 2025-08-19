import React from "react";
import Card from "../../components/Card";

const featuredSection = () => {
  return (
    <>
      <section className="bg-white w-full h-screen">
        <h1>Featured Products</h1>
        <p>
          Our best-selling tools, engineered for peak performance and
          durability.
        </p>

        <figure className="flex flex-wrap gap-10 justify-center">
          <Card />
          <Card />
          <Card />
        </figure>
      </section>
    </>
  );
};

export default featuredSection;
