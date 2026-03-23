import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubContributions from "./components/GitHubContributions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        
        {/* GitHub Contributions */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <GitHubContributions />
          </div>
        </section>
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;