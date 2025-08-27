import React from "react";

const CategoryFilter = ({ onChange, category }) => {
  return (
    <>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-black">Category</h4>
        <select
          className="h-10 border-2  text-gray-600 **:text-black"
          value={category}
          onChange={onChange}
        >
          <option value="">Select category</option>
          <option value="drills & drivers">Drills & Drivers</option>
          <option value="Saw & Blades">Saw & Blades</option>
          <option value="Hand Tools">Hand Tools</option>
        </select>
      </div>
    </>
  );
};

export default CategoryFilter;
