import React from "react";

const CategoryFilter = ({ onChange, category }) => {
  return (
    <>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-black">Category</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <select
            className="h-10 border-0 outline-0 text-gray-600 **:text-black w-full"
            value={category}
            onChange={onChange}
          >
            <option value="">Select Category</option>
            <option value="drills & drivers">Drills & Drivers</option>
            <option value="Saw & Blades">Saw & Blades</option>
            <option value="Hand Tools">Hand Tools</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
