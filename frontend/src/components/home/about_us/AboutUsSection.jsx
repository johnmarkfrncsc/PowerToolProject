import React from "react";
import AboutUsCard from "../about_us/AboutUsCard";

const AboutUsSection = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-gray-50 text-center py-8">
        <h1 className="text-2xl font-bold">Why Choose Us?</h1>
        <p className="textarea-sm font-light mb-4">
          We're committed to delivering excellence in every tool we make.
        </p>

        <div className="justify-center items-center flex flex-col md:flex-row gap-4 p-4">
          <AboutUsCard
            title="Unmatched Quality"
            description="Our tools are built with the highest-grade materials to withstand the toughest jobs."
            icon="bi bi-shield-check"
          />
          <AboutUsCard
            title="Innovative Design"
            description="Ergonomic and efficient designs that make your work easier and faster."
            icon="bi bi-lightning-charge"
          />
          <AboutUsCard
            title="Customer Satisfaction"
            description="We stand behind our products with a commitment to excellent customer service."
            icon="bi bi-star"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
