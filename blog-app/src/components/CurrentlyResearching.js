import React from "react";
import { 
  MagnifyingGlassIcon, 
  BeakerIcon, 
  BookOpenIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline";

function CurrentlyResearching() {
  const researchTopics = [
    {
      id: 1,
      title: "Babylon: The Legendary Ancient City",
      status: "Active Research",
      description: "Exploring the rich history, culture, and significance of Babylon - from its rise under Hammurabi to its legendary Hanging Gardens and the reign of Nebuchadnezzar II.",
      progress: 85,
      technologies: ["Historical Texts", "Archaeological Evidence", "Cuneiform Scripts", "Mesopotamian Studies"],
      resources: [
        { name: "The Babylonian Chronicles", url: "#" },
        { name: "Archaeological Reports from Iraq", url: "#" },
        { name: "Code of Hammurabi Analysis", url: "#" },
        { name: "Neo-Babylonian Empire Studies", url: "#" }
      ],
      lastUpdated: "March 18, 2026",
      keyFindings: [
        "Babylon's role as a center of learning and law",
        "The engineering marvels of the Ishtar Gate",
        "Cultural exchange along ancient trade routes",
        "The mystery of the Hanging Gardens"
      ]
    },
    {
      id: 2,
      title: "Ancient Civilizations: Rise and Fall of Empires",
      status: "In Progress",
      description: "Comprehensive study of major ancient civilizations including Mesopotamia, Egypt, Indus Valley, and their interconnections, trade networks, and cultural exchanges.",
      progress: 70,
      technologies: ["Comparative History", "Archaeological Dating", "Cultural Analysis", "Trade Route Mapping"],
      resources: [
        { name: "Cambridge Ancient History", url: "#" },
        { name: "UNESCO World Heritage Sites", url: "#" },
        { name: "Ancient Trade Networks Database", url: "#" },
        { name: "Civilization Timeline Studies", url: "#" }
      ],
      lastUpdated: "March 15, 2026",
      keyFindings: [
        "Parallel development of writing systems",
        "Common patterns in urban planning",
        "Religious and mythological similarities",
        "Technology transfer between civilizations"
      ]
    },
    {
      id: 3,
      title: "Archaeological Methods and Discoveries",
      status: "Exploring",
      description: "Understanding modern archaeological techniques, recent discoveries, and how new technologies are revolutionizing our understanding of ancient civilizations.",
      progress: 55,
      technologies: ["Ground-Penetrating Radar", "Carbon Dating", "Digital Reconstruction", "Satellite Archaeology"],
      resources: [
        { name: "Journal of Archaeological Science", url: "#" },
        { name: "National Geographic Archaeology", url: "#" },
        { name: "Digital Archaeology Techniques", url: "#" },
        { name: "Recent Mesopotamian Excavations", url: "#" }
      ],
      lastUpdated: "March 12, 2026",
      keyFindings: [
        "LiDAR revealing hidden structures",
        "DNA analysis of ancient populations",
        "3D modeling of archaeological sites",
        "Climate data from ancient periods"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active Research": return "bg-green-100 text-green-800 border-green-200";
      case "In Progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Planning": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Exploring": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active Research": return <MagnifyingGlassIcon className="h-4 w-4" />;
      case "In Progress": return <BeakerIcon className="h-4 w-4" />;
      case "Planning": return <LightBulbIcon className="h-4 w-4" />;
      case "Exploring": return <BookOpenIcon className="h-4 w-4" />;
      default: return <MagnifyingGlassIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 dark:text-pink-300 mb-4 transition-colors duration-300">
            Currently Researching
          </h1>
          <p className="text-xl text-pink-600 dark:text-pink-400 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
            Exploring the fascinating world of ancient civilizations, with deep dives into Babylon, 
            archaeological discoveries, and the rich tapestry of human history that continues to captivate and inspire.
          </p>
        </div>

        {/* Research Topics */}
        <div className="grid gap-8">
          {researchTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200 dark:border-gray-700"
            >
              {/* Topic Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-pink-800 dark:text-pink-300 mb-2 transition-colors duration-300">
                    {topic.title}
                  </h2>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(topic.status)}`}>
                    {getStatusIcon(topic.status)}
                    <span className="ml-1">{topic.status}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-pink-500 mb-2">Progress</div>
                  <div className="flex items-center">
                    <div className="w-32 bg-pink-200 rounded-full h-2 mr-3">
                      <div 
                        className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-pink-700 font-semibold">{topic.progress}%</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-pink-600 dark:text-pink-400 text-lg leading-relaxed mb-6 transition-colors duration-300">
                {topic.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-pink-800 dark:text-pink-300 mb-3 transition-colors duration-300">Research Methods & Sources</h4>
                <div className="flex flex-wrap gap-2">
                  {topic.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-pink-100 dark:bg-gray-700 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-pink-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Findings */}
              {topic.keyFindings && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-pink-800 dark:text-pink-300 mb-3 transition-colors duration-300">Key Findings</h4>
                  <ul className="space-y-2">
                    {topic.keyFindings.map((finding, index) => (
                      <li key={index} className="text-pink-600 dark:text-pink-400 flex items-start transition-colors duration-300">
                        <span className="text-pink-400 dark:text-pink-500 mr-2 mt-1">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Resources */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-pink-800 dark:text-pink-300 mb-3 transition-colors duration-300">Key Resources</h4>
                <div className="space-y-2">
                  {topic.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-200"
                    >
                      <BookOpenIcon className="h-4 w-4 mr-2" />
                      <span className="underline">{resource.name}</span>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-sm text-pink-500 dark:text-pink-400 transition-colors duration-300">
                Last updated: {topic.lastUpdated}
              </div>
            </div>
          ))}
        </div>

        {/* Research Philosophy */}
        <div className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-pink-200 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-pink-800 dark:text-pink-300 mb-4 text-center transition-colors duration-300">My Research Philosophy</h3>
            <p className="text-pink-600 dark:text-pink-400 text-lg leading-relaxed text-center max-w-3xl mx-auto transition-colors duration-300">
              While my professional life revolves around modern technology, I find immense joy in exploring the 
              ancient world. History teaches us about human ingenuity, resilience, and the timeless patterns 
              that connect us across millennia. Each archaeological discovery and historical insight adds depth 
              to our understanding of who we are and where we came from. I approach this research with the same 
              methodical curiosity I bring to software development - always questioning, always learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyResearching;