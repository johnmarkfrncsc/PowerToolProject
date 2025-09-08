import React, { useState } from "react";

const ProductModal = ({ open, onClose, product }) => {
  const [showFull, setShowFull] = useState(false);

  if (!open) return null;

  const sentences = product?.description ? product.description.split(".") : [];
  const firstSentence = sentences[0] ? sentences[0] + "." : "";
  const rest = sentences.slice(1).join(".") ? sentences.slice(1).join(".") : "";

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-neutral-50 border-2 border-gray-200 m-8 p-4 rounded-lg min-w-[200px] relative flex flex-col items-center max-h-[90vh] overflow-y-scroll ">
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 text-2xl text-gray-600 hover:text-gray-800"
        >
          <i className="bi bi-x-circle"></i>
        </button>

        <h2 className="text-xl font-semibold mb-2">{product?.ItemCode}</h2>

        <img
          src={product.image}
          alt={product?.name}
          className="mb-2 max-h-60 md:max-h-auto"
        />
        <h2 className="text-xl font-semibold mb-2">{product?.name}</h2>
        <div>
          <p className="mb-2 textarea-md text-gray-700">
            {showFull ? product?.description : firstSentence}
            {rest && (
              <span
                className="text-blue-600 cursor-pointer ml-2"
                onClick={() => setShowFull(!showFull)}
              >
                {showFull ? "Read less" : "Read more"}
              </span>
            )}
          </p>
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
