import React from "react";
import Navbar from "../components/common/Navbar";
import ProductHero from "../components/product/ProductHero";
import ProductFilter from "../components/product/ProductFilter";
import ProductContent from "../components/product/ProductContent";

const Productpage = () => {
  return (
    <>
      <Navbar />
      <ProductHero />
      <main className="w-full bg-white">
        <div className="md:flex">
          <ProductFilter />
          <ProductContent />
        </div>
      </main>
    </>
  );
};

export default Productpage;
