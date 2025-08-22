import React from "react";

const ProductFilter = () => {
  return (
    <>
      <div className="dropdown md:hidden ">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-orange-600 border-0 text-white m-1"
        >
          Filters
          <i class="bi bi-filter"></i>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-200 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <details open>
              <summary className="font-bold">Category</summary>
              <ul>
                <li>Drills & Drivers</li>
                <li>Saw and Blades</li>
                <li>Hand Tools</li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary className="font-bold">Brand</summary>
              <ul>
                <li>Brand 1</li>
                <li>Brand 2</li>
                <li>Brand 3</li>
              </ul>
            </details>
          </li>
          <div>
            <h4 class="font-semibold text-lg mb-2 text-orange-600">
              Price Range
            </h4>
            <input type="range" class="w-full range-xs" min="0" max="500" />
            <div class="flex justify-between text-sm text-base-100 mt-2">
              <span>0</span>
              <span>500+</span>
            </div>
          </div>
        </ul>
      </div>

      <aside
        className="hidden md:flex flex-col md:w-1/4 p-6 bg-white rounded-xl shadow-lg h-min md:sticky top-10 
        filter-sidebar md:transform-none "
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Filters</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-gray-800">
              Category
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Drills & Drivers</li>
              <li>Saw and Blades</li>
              <li>Hand Tools</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-gray-800">Brand</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <ul>
                <li>Brand 1</li>
                <li>Brand 2</li>
                <li>Brand 3</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-gray-800">
              Price Range
            </h4>
            <input
              type="range"
              className="w-full text-orange-secondary"
              min="0"
              max="500"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductFilter;
