import React from "react";

const ProductFilter = () => {
  return (
    <>
      <div className="dropdown text-base-100 md:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-orange-600 border-0 text-white m-1"
        >
          Filters
          <i className="bi bi-filter"></i>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-200 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <select
              className="h-10 border-2 text-gray-600 **:text-black"
              // value={category}
              // onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="drills & drivers">Drills & Drivers</option>
              <option value="Saw & Blades">Saw & Blades</option>
              <option value="Hand Tools">Hand Tools</option>
            </select>
          </li>

          <li>
            <select
              className="h-10 border-2 **:text-black"
              // value={category}
              // onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="drills & drivers">Drills & Drivers</option>
              <option value="Saw & Blades">Saw & Blades</option>
              <option value="Hand Tools">Hand Tools</option>
            </select>
          </li>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-orange-600">
              Price Range
            </h4>
            <input type="range" className="w-full range-xs" min="0" max="500" />
            <div className="flex justify-between text-sm text-base-100 mt-2">
              <span>0</span>
              <span>500+</span>
            </div>
          </div>
        </ul>
      </div>

      {/* change filter icon to aside filter when in md-lg screen */}

      <aside
        className="hidden md:flex flex-col md:w-1/4 p-6 bg-white rounded-xl shadow-lg h-min md:sticky top-10 
        filter-sidebar md:transform-none "
      >
        <h3 className="text-2xl font-bold mb-6 text-black">Filters</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-black">Category</h4>
            <select
              className="h-10 border-2  text-gray-600 **:text-black"
              // value={category}
              // onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="drills & drivers">Drills & Drivers</option>
              <option value="Saw & Blades">Saw & Blades</option>
              <option value="Hand Tools">Hand Tools</option>
            </select>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-black">Brand</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <select
                className="h-10 border-2 **:text-black"
                // value={brand}
                // onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Select brand</option>
                <option value="toyohama">Toyohama</option>
                <option value="dewalt">DE WALT</option>
                <option value="bosch">BOSCH</option>
              </select>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-black">
              Price Range
            </h4>
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
        </div>
      </aside>
    </>
  );
};

export default ProductFilter;
