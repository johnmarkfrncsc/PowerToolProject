import React from "react";
import Navbar from "../components/Navbar.jsx";

const Homepage = () => {
  return (
    <>
      <div className="bg-white h-screen w-full text-black">
        <Navbar />

        <main className="min-h-screen">
          <h1 className="text-3xl font-bold text-base-100">
            Power Your Project with Precision and{" "}
            <span className="text-3xl font-bold text-orange-400">Strength</span>
            .
          </h1>
          <p className="py-6">
            Discover the finest tools built for professionals and DIY
            enthusiasts alike. Uncompromising quality for every task.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </main>
      </div>
    </>
  );
};

export default Homepage;
