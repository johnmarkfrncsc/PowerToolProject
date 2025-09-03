import React from "react";

const ProductModal = ({ open, onClose, product }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0  backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-neutral-50 p-8 rounded-lg min-w-[300px] relative flex flex-col items-center m-8">
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 text-2xl text-gray-600 hover:text-gray-800"
        >
          <i className="bi bi-x-circle"></i>
        </button>
        <h2 className="text-xl font-semibold mb-2">{product?.name}</h2>
        <img
          src={product.image}
          alt={product?.name}
          className="mb-2 max-h-60 md:max-h-auto"
        />
        <div>
          <p className="mb-2">{product?.description}</p>
          <p className="mb-2">
            <strong>Brand:</strong> {product?.brand}
          </p>
          <p className="mb-2">
            <strong>Category:</strong> {product?.category}
          </p>
          <p className="font-medium mb-4">
            <strong>Price:</strong> ₱{product?.price}.00
          </p>
        </div>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
