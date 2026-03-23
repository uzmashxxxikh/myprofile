import React from "react";
import profilePic from "../assets/profile1.jpg";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-end order-2 md:order-1">
          <div className="relative">
            <img 
              src={profilePic}
              alt="Uzma Shaikh" 
              className="w-80 h-80 sm:w-96 sm:h-96 rounded-full object-cover shadow-2xl border-4 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center md:text-left order-1 md:order-2">
          <div className="mb-6">
            <p className="text-purple-400 text-lg mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Uzma Shaikh
            </h1>
            <p className="text-2xl md:text-3xl text-purple-400 mb-4 font-semibold">
              Software Developer | Full-Stack | Mobile App Development
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Toronto, Ontario • Passionate about creating innovative digital solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/uzma-shaikh-86108a236/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/uzmashxxxikh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-lg hover:underline"
            >
              GitHub
            </a>
            <a 
              href="mailto:uzmashxikh@hotmail.com"
              className="text-green-400 hover:text-green-300 transition-colors duration-200 text-lg hover:underline"
            >
              Email
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="/Uzma_Shaikh_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 inline-block text-center"
            >
              View Resume
            </a>
            <button 
              onClick={scrollToAbout}
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
          <ChevronDownIcon className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}

export default Hero;