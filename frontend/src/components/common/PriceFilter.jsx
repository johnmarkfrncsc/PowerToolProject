/* this jsx.file is for Price Filter when tablet size or laptop size */
import React from "react";
import { useState } from "react";

const PriceFilter = ({ onChange, price }) => {
  return (
    <>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-black">Price Range</h4>
        <input
          type="range"
          className="w-full text-orange-secondary"
          min="0"
          max="200"
          step="1"
          value={price}
          onChange={onChange}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <p>selectedPrice{price.toLocaleString()}</p>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
