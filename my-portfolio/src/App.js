import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubContributions from "./components/GitHubContributions";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Left: Profile (full width on mobile) */}
          <div className="order-1">
            <Hero />
          </div>

          {/* Middle: Experience + Projects */}
          <div className="order-3 md:order-2 space-y-6">
            <Experience />
            <Projects />
          </div>

          {/* Right: Skills + Contact */}
          <div className="order-2 md:order-3 space-y-6">
            <Skills />
          </div>
          {/* Bottom: GitHub Contributions (full width) */}
          <div className="order-4 md:col-span-3 mt-8">
            <GitHubContributions />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;