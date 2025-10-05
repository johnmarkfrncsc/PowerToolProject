import React from "react";

const SuccessModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-green-50 border-2 border-green-200 rounded-lg m-8 p-6 relative flex flex-col items-center min-w-[200px]">
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          Successfully added the item to the cart!
        </h2>
        <button
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          View more products
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
