import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon, ArrowLeftIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../contexts/ThemeContext";
import Logo from "../assets/Logo.png";

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "research", label: "Currently Researching", path: "/research" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pink-100/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-pink-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Back Button */}
          <div className="flex items-center space-x-4">
            <a
              href="http://localhost:3000"
              className="flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200"
              title="Back to Portfolio"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Portfolio</span>
            </a>
            
            <div className="flex items-center">
              <img src={Logo} alt="Uzma's Blog" className="h-10 w-10 rounded-lg shadow-md" />
              <span className="ml-3 text-xl sm:text-2xl font-bold text-pink-800 dark:text-pink-300">Uzma's Blog</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-pink-500 dark:bg-pink-600 text-white"
                      : "text-pink-700 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-gray-700 hover:text-pink-800 dark:hover:text-pink-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700 transition-colors duration-200"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700 transition-colors duration-200"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-pink-200 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:bg-pink-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 dark:focus:ring-pink-400 transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-pink-100 dark:bg-gray-800 border-t border-pink-200 dark:border-gray-700 transition-colors duration-300">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-pink-500 dark:bg-pink-600 text-white"
                    : "text-pink-700 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-gray-700 hover:text-pink-800 dark:hover:text-pink-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;