import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <>
      <div className="card bg-white w-80 py-4 md:py-8 md:w-50 lg:w-70 xl:w-90 shadow-md">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-orange-400 border-0 shadow-none">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
