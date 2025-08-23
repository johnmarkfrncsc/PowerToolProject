import React from "react";
import MainImage from "../../assets/MainImage.jpg";

const HeroSection = () => {
  return (
    <>
      <main className="bg-gray-50 mb-4">
        <div className="flex p-10 bg-[url('./assets/MainImage.jpg')] bg-cover bg-center md:invisible md:justify-center ">
          <article className="flex-col md:visible">
            <h1 className="text-2xl font-bold text-base-100">
              Power Your Project with Precision and{" "}
              <span className="text-2xl font-bold text-orange-500">
                Strength
              </span>
              .
            </h1>
            <p className="py-6 text-sm">
              Discover the finest tools built for professionals and DIY
              enthusiasts alike. Uncompromising quality for every task.
            </p>
            <button className="btn bg-amber-600 border-0 shadow-none rounded-3xl">
              Explore Products
            </button>
          </article>

          <figure>
            <img
              className="hidden md:block md:visible w-200"
              src={MainImage}
              alt=""
            />
          </figure>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
