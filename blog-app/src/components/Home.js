import React from "react";
import { Link } from "react-router-dom";
import { 
  MagnifyingGlassIcon,
  HeartIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/outline";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-pink-800 dark:text-pink-300 mb-6 transition-colors duration-300">
              Welcome to My Research
            </h1>
            <p className="text-xl md:text-2xl text-pink-600 dark:text-pink-400 mb-8 leading-relaxed transition-colors duration-300">
              Exploring the mysteries of ancient civilizations, archaeology, and the fascinating world of Babylon
            </p>
            <div className="flex items-center justify-center space-x-2 text-pink-500 dark:text-pink-400 transition-colors duration-300">
              <HeartIcon className="h-6 w-6" />
              <span className="text-lg font-medium">Passionate about history from Toronto</span>
              <HeartIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Card */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/research"
            className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-200 dark:border-gray-700 block"
          >
            <div className="flex items-center mb-6">
              <div className="bg-pink-500 dark:bg-pink-600 p-4 rounded-full mr-6 group-hover:bg-pink-600 dark:group-hover:bg-pink-500 transition-colors duration-300">
                <BuildingLibraryIcon className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-pink-800 dark:text-pink-300 transition-colors duration-300">Currently Researching</h2>
            </div>
            <p className="text-pink-600 dark:text-pink-400 text-lg leading-relaxed mb-6 transition-colors duration-300">
              Dive deep into my ongoing research on ancient civilizations, with a special focus on Babylon, 
              archaeological discoveries, and the rich tapestry of human history that continues to fascinate and inspire.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-lg border border-pink-200 dark:border-gray-600 transition-colors duration-300">
                <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-2 transition-colors duration-300">🏛️ Babylon</h4>
                <p className="text-pink-600 dark:text-pink-400 text-sm transition-colors duration-300">Exploring the legendary city and its cultural impact</p>
              </div>
              <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-lg border border-pink-200 dark:border-gray-600 transition-colors duration-300">
                <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-2 transition-colors duration-300">🏺 Ancient Civilizations</h4>
                <p className="text-pink-600 dark:text-pink-400 text-sm transition-colors duration-300">Studying the rise and fall of great empires</p>
              </div>
              <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-lg border border-pink-200 dark:border-gray-600 transition-colors duration-300">
                <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-2 transition-colors duration-300">⚱️ Archaeology</h4>
                <p className="text-pink-600 dark:text-pink-400 text-sm transition-colors duration-300">Uncovering secrets through archaeological evidence</p>
              </div>
            </div>
            <div className="flex items-center text-pink-500 dark:text-pink-400 font-medium group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors duration-300">
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
              <span>Explore my research →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* About This Research */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-pink-200 dark:border-gray-700 transition-colors duration-300">
            <h2 className="text-3xl font-bold text-pink-800 dark:text-pink-300 mb-6 text-center transition-colors duration-300">About My Research Journey</h2>
            <div className="prose prose-pink max-w-none">
              <p className="text-pink-600 dark:text-pink-400 text-lg leading-relaxed mb-4 transition-colors duration-300">
                While my professional focus is on software development, I have a deep passion for ancient history 
                and archaeology. This research space allows me to explore and document my fascination with 
                civilizations that shaped our world thousands of years ago.
              </p>
              <p className="text-pink-600 dark:text-pink-400 text-lg leading-relaxed mb-4 transition-colors duration-300">
                From the hanging gardens and ziggurats of Babylon to the broader tapestry of ancient civilizations, 
                I'm constantly amazed by the ingenuity, culture, and mysteries left behind by our ancestors. 
                Archaeological discoveries continue to reshape our understanding of these remarkable societies.
              </p>
              <p className="text-pink-600 dark:text-pink-400 text-lg leading-relaxed transition-colors duration-300">
                Join me as I delve into historical texts, archaeological findings, and scholarly research to 
                better understand these fascinating chapters of human history. Each discovery adds another 
                piece to the incredible puzzle of our shared past.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;