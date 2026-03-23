import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CurrentlyResearching from "./components/CurrentlyResearching";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App bg-pink-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300">
          <Navigation />
          
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<CurrentlyResearching />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;