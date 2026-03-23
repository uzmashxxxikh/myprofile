import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

function GitHubContributions() {
  const theme = {
    dark: ["#374151", "#6d28d9", "#7c3aed", "#8b5cf6", "#a78bfa"],  // 5 colors: low to high activity (purple theme)
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors duration-300">
      <div className="flex items-center justify-center mb-6">
        <CodeBracketIcon className="h-8 w-8 text-purple-400 mr-3" />
        <h2 className="text-3xl font-bold text-center">GitHub Activity</h2>
      </div>
      
      <p className="text-center text-gray-400 mb-8">
        My coding journey over the past year - every square represents a day of learning and building
      </p>
      
      <div className="overflow-x-auto">
        <div className="flex justify-center">
          <GitHubCalendar
            username="uzmashxxxikh"  // Replace with your real GitHub username!
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            theme={theme}
            style={{ margin: "0 auto" }}
            colorScheme="dark"
          />
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <a
          href="https://github.com/uzmashxxxikh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          <CodeBracketIcon className="h-5 w-5" />
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default GitHubContributions;