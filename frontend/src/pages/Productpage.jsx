import React, { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct.js";
import ProductHero from "../components/product/ProductHero";
import ProductFilter from "../components/product/ProductFilter";
import Card from "../components/common/Card";

const Productpage = () => {
  const {
    products,
    brandProduct: brand, //Aliasing for clarity
    categoryProduct: category, //Aliasing for clarity
    priceProduct: price, //Aliasing for clarity
    setBrand,
    setCategory,
    setPrice,
  } = useProduct({});

  return (
    <>
      <ProductHero />
      <main className="w-full bg-white">
        <div className="">
          <ProductFilter
            brand={brand}
            category={category}
            price={price}
            changeBrand={(e) => setBrand(e.target.value)}
            changeCategory={(e) => setCategory(e.target.value)}
            changePrice={(e) => setPrice(Number(e.target.value))}
          />
          <section className="w-full bg-white text-black flex flex-col flex-wrap md:flex-row justify-center p-4 gap-4">
            {products.map((product) => {
              return <Card key={product._id} product={product} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default Productpage;
