import React from "react";
import { HeartIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-200 dark:bg-gray-800 border-t border-pink-300 dark:border-gray-700 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Back to Portfolio Link */}
          <div className="mb-6">
            <a
              href="http://localhost:3000"
              className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200 font-medium"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Portfolio
            </a>
          </div>

          {/* Blog Info */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-pink-800 dark:text-pink-300 mb-2 transition-colors duration-300">Uzma's Blog</h3>
            <p className="text-pink-600 dark:text-pink-400 max-w-2xl mx-auto transition-colors duration-300">
              A personal space for sharing thoughts, discoveries, and the journey of continuous learning 
              in software development and beyond.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center space-x-6 mb-6 text-pink-600 dark:text-pink-400">
            <a 
              href="mailto:uzmashxikh@hotmail.com"
              className="hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/uzma-shaikh-86108a236/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/uzmashxxxikh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-pink-300 dark:border-gray-700 pt-6 transition-colors duration-300">
            <div className="flex items-center justify-center space-x-2 text-pink-600 dark:text-pink-400 text-sm transition-colors duration-300">
              <span>© {currentYear} Uzma Shaikh. Written with</span>
              <HeartIcon className="h-4 w-4 text-pink-500 dark:text-pink-400" />
              <span>from Toronto</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;