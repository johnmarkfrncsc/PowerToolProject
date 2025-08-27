import React from "react";

const BrandFilter = ({ onChange, brand }) => {
  return (
    <>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-black">Brand</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <select
            className="h-10 border-2 **:text-black"
            value={brand}
            onChange={onChange}
          >
            <option value="">Select brand</option>
            <option value="toyohama">Toyohama</option>
            <option value="dewalt">DE WALT</option>
            <option value="bosch">BOSCH</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default BrandFilter;
