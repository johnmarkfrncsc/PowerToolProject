import React from "react";
import Navbar from "../components/Navbar.jsx";
import bg from "../assets/bg.jpg";

const Homepage = () => {
  return (
    <>
      <div className="bg-white h-screen w-full text-black">
        <Navbar />

        <main className="flex flex-col md:flex-row justify-center p-10 bg-[url('./assets/MainImage.jpg')] bg-cover bg-center ">
          <article className="">
            <h1 className="text-2xl font-bold text-base-100">
              Power Your Project with Precision and{" "}
              <span className="text-2xl font-bold text-orange-400">
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
        </main>
      </div>
    </>
  );
};

export default Homepage;
