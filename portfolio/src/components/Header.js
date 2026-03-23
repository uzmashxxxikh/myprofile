// Header.js (or Hero.js)
import React from "react";

function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <img 
            src="/assets/profile.jpg"
            alt="Uzma Shaikh" 
            className="rounded-full w-64 h-64 object-cover mx-auto md:mx-0 shadow-2xl"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Uzma Shaikh</h1>
          <p className="text-2xl text-purple-400 mb-4">Digital Optimizer | Troubleshooting Expert</p>
          <p className="text-lg text-gray-300 mb-6">Toronto, Ontario • Persistent & Curious</p>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://linkedin.com/in/yourprofile" className="text-blue-400 hover:underline">LinkedIn</a>
            <a href="https://github.com/yourusername" className="text-purple-400 hover:underline">GitHub</a>
          </div>
          <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold">
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;