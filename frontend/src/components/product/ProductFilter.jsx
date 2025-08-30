import React from "react";
import CategoryFilter from "../common/CategoryFilter";
import BrandFilter from "../common/BrandFilter";
import PriceFilter from "../common/PriceFilter";

const ProductFilter = ({
  category,
  brand,
  price,
  changeBrand,
  changeCategory,
  changePrice,
}) => {
  return (
    <>
      <div className="dropdown text-base-100 ">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-orange-400 border-0 text-white m-4 hover:bg-orange-600 "
        >
          Filters
          <i className="bi bi-sliders2"></i>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-200 rounded-box ml-2 z-1 w-5/2 p-2 shadow-sm"
        >
          <CategoryFilter category={category} onChange={changeCategory} />

          <BrandFilter brand={brand} onChange={changeBrand} />

          <PriceFilter price={price} onChange={changePrice} />
        </ul>
      </div>

      {/* change filter icon to aside filter when in md-lg screen */}

      {/* <aside
        className="hidden md:flex flex-col md:w-1/2 p-6 ml-4 bg-neutral-100  rounded-xl shadow-lg shadow-orange-400 h-min md:sticky top-10
        filter-sidebar md:transform-none "
      >
        <h3 className="text-2xl font-bold mb-6 text-black">Filters</h3>

        <div className="space-y-6">
          <CategoryFilter category={category} onChange={changeCategory} />

          <BrandFilter brand={brand} onChange={changeBrand} />

          <PriceFilter price={price} onChange={changePrice} />
        </div>
      </aside> */}
    </>
  );
};

export default ProductFilter;
