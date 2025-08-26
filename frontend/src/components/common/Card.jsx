import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ limit, brand, category, price }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/items?limit=${limit}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="card bg-white w-80 py-4 md:py-8 md:w-50 lg:w-70 xl:w-90 shadow-md"
        >
          <figure className="max-h-100 md:max-h-auto">
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.item}</h2>
            <p className="text-orange-600 font-bold">
              ₱ {""}
              {product.price}.00
            </p>
            <p>
              {product.brand} <br />
              {product.category}
            </p>
            <p className="text-gray-500">{product.description}</p>
            <div className="card-actions justify-center">
              <button className="btn bg-orange-600 border-0 shadow-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
