import React from "react";

const PriceFilter = ({ onChange, price }) => {
  return (
    <>
      <div value={price} onChange={onChange}>
        <h4 className="font-semibold text-lg mb-2 text-black">Price Range</h4>
        <input
          type="range"
          className="w-full text-orange-secondary"
          min="0"
          max="500"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>₱0</span>
          <span>₱500+</span>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
