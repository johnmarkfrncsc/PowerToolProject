import React from "react";
import Card from "../common/Card";
import impactDrill from "../../assets/FeaturedImage/impactDrill.jpg";

const ProductContent = () => {
  return (
    <>
      <section className="w-full bg-white text-black flex flex-col flex-wrap md:flex-row justify-center  gap-4">
        <Card
          title="Item Title, will replace with fetch items in backed"
          image={`${impactDrill}`}
          price="1200"
          description="Item description, will replace after fetching items in backend"
        />
        <Card
          title="Item Title, will replace with fetch items in backend"
          image={`${impactDrill}`}
          price="1200"
          description="Item description, will replace after fetching items in backend"
        />
        <Card
          title="Item Title, will replace with fetch items in backed"
          image={`${impactDrill}`}
          price="1200"
          description="Item description, will replace after fetching items in backend"
        />
        <Card
          title="Item Title, will replace with fetch items in backend"
          image={`${impactDrill}`}
          price="1200"
          description="Item description, will replace after fetching items in backend"
        />
        <Card
          title="Item Title, will replace with fetch items in backend"
          image={`${impactDrill}`}
          price="1200"
          description="Item description, will replace after fetching items in backend"
        />
      </section>
    </>
  );
};

export default ProductContent;
