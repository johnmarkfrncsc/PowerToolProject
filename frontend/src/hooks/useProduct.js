import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useProduct = ({ limit }) => {
  const [brandProduct, setBrand] = useState("");
  const [categoryProduct, setCategory] = useState("");
  const [priceProduct, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/items?limit=${limit}&brand=${brandProduct}&category=${categoryProduct}&price=${priceProduct}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    getProduct();
  }, [limit, brandProduct, categoryProduct, priceProduct]);
  return {
    products,
    brandProduct,
    setBrand,
    categoryProduct,
    setCategory,
    priceProduct,
    setPrice,
  };
};

export default useProduct;
