import React from "react";
import Card from "../../components/Card";
import bg from "../../assets/bg.jpg";

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
          <Card title="Impact drill" image={`${bg}`} />
          <Card title="gago" />
        </figure>
      </section>
    </>
  );
};

export default featuredSection;
