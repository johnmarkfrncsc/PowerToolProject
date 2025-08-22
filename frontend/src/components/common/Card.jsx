import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/items`);
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
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.item}</h2>
            <p className="text-orange-600 font-bold">{product.price}</p>
            <p>{product.category}</p>
            <p>{product.brand}</p>
            <p>{product.description}</p>
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
