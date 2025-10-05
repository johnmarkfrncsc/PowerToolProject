import React, { useState } from "react";
import { useCart } from "../cart/CartContext";
import SuccessModal from "./SuccessModal"; // Import the new modal

const ProductModal = ({ open, onClose, product }) => {
  const { addToCart } = useCart();
  const [showFull, setShowFull] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // State for success modal

  if (!open) return null;

  const sentences = product?.description ? product.description.split(".") : [];
  const firstSentence = sentences[0] ? sentences[0] + "." : "";
  const rest = sentences.slice(1).join(".") ? sentences.slice(1).join(".") : "";

  const handleAddToCart = () => {
    addToCart(product);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    onClose(); // Close product modal as well
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
        <div className="bg-neutral-50 border-2 border-gray-200 rounded-lg m-8 p-4 relative flex flex-col items-center min-w-[200px] max-h-[90vh] overflow-y-auto ">
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

          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <SuccessModal open={showSuccess} onClose={handleCloseSuccess} />
    </>
  );
};

export default ProductModal;
