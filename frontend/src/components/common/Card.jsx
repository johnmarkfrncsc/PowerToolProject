import React, { useState } from "react";
import ProductModal from "../product/ProductModal";

const Card = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="card bg-red-200  py-4 md:w-50 max-h-[90vh] lg:w-70 xl:w-90 shadow-md">
      <figure className=" md:max-h-auto">
        <img src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.ItemCode}</h2>
        <h2 className="card-title">{product.item}</h2>
        <p className="text-orange-600 font-semibold">
          ₱ {""}
          {product.price}.00
        </p>
        <p>
          {product.brand} <br />
          {product.category}
        </p>
        <p className="text-gray-500 hidden ">{product.description}</p>
        <div className="card-actions justify-center">
          <button
            className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
            onClick={() => setModalOpen(true)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={{
          ItemCode: product.ItemCode,
          name: product.item,
          image: product.image,
          description: product.description,
          brand: product.brand,
          category: product.category,
          price: product.price,
          _id: product._id,
        }}
      />
    </div>
  );
};

export default Card;
