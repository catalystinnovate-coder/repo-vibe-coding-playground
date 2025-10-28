
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter">
          Innovate. Accelerate.
          <span className="block bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
            Dominate.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-400">
          We are the catalyst for your digital transformation, crafting bespoke solutions that drive growth and redefine industries.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors duration-300">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
