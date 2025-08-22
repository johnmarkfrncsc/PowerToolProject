import React from "react";

const CallActionSection = () => {
  return (
    <>
      <section>
        <div className="bg-orange-500 text-white py-4">
          <div className="container mx-auto flex flex-col items-center justify-between p-4">
            <h1 className="text-2xl font-bold">Forge Your Next Project</h1>
            <p className="py-4 font-light text-sm">
              Step up to the tools that professionals trust and feel the power
              in your hands.
            </p>
            <button className="btn shadow-none border-0 bg-white text-orange-500">
              View All Tools
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallActionSection;
