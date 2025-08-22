import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <>
      <div className="card w-auto shadow-lg md:py-8 md:h-80 md:w-50 lg:w-70  ">
        <figure>
          <i className={`${icon} text-orange-500  text-4xl`}></i>
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
