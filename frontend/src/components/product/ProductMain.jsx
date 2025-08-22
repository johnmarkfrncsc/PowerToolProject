import React from "react";
import ProductContent from "./ProductContent";
import ProductFilter from "./ProductFilter";

const ProductMain = () => {
  return (
    <>
      <main className="w-full bg-white">
        <div className="md:flex">
          <ProductFilter />
          <ProductContent />
        </div>
      </main>
    </>
  );
};

export default ProductMain;
