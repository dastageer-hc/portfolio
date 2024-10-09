import React from "react";

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Dastageer HC
        </h1>
        <p className="text-2xl mb-8 animate-fade-in-delay">
          Front-End Developer & Cosmic Code Conjurer
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors animate-pulse-slow">
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
