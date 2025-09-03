/* this jsx.file is for Price Filter when tablet size or laptop size */
import React from "react";
import { useState } from "react";

const PriceFilter = ({ onChange, price }) => {
  const handleInputChange = (e) => {
    let value = e.target.value;
    if (value === "") {
      onChange(e); // Let the parent component handle the empty value
    } else {
      const parsedValue = parseInt(value);
      if (!isNaN(parsedValue)) {
        e.target.value = parsedValue;
        onChange(e);
      }
    }
  };

  return (
    <>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-black">Price Range</h4>
        <input
          type="range"
          className="w-full text-orange-secondary"
          min="0"
          max="2000"
          step="1"
          value={price}
          onChange={onChange}
        />
        <div>
          <div className="flex justify-betweeen gap-2 **:w-full">
            <input
              type="number"
              placeholder="0"
              className="input bg-amber-200 text-black mb-1 rounded-3xl"
              value={price}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="2000"
              className="input bg-amber-200 text-black rounded-3xl"
              value={price}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <p className="text-orange-500">
            <span className="text-black">Price: </span>
            {price.toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
