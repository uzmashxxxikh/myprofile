import React from "react";
import profilePic from "../assets/profile1.jpg";

function Hero() {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 text-center md:text-left">
      <img 
        src={profilePic}
        alt="Uzma Shaikh" 
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto md:mx-0 object-cover shadow-2xl"
      />
      <h1 className="text-3xl font-bold">Uzma Shaikh</h1>
      <p className="text-xl text-purple-400">Persistent & Curious Digital Optimizer</p>
      <p className="text-sm text-gray-400">Toronto, Ontario</p>
      <div className="mt-4 flex justify-center md:justify-start gap-4 text-sm">
        <a href="https://www.linkedin.com/in/uzma-shaikh-86108a236/" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/uzmashxxxikh" className="text-purple-400 hover:underline">GitHub</a>
      </div>
      <button className="mt-4 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full text-sm">
        View Resume
      </button>
    </div>
  );
}

export default Hero;