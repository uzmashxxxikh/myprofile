import React from "react";
import { GitHubCalendar } from "react-github-calendar";

function GitHubContributions() {
  const theme = {
    dark: ["#374151", "#6d28d9", "#7c3aed", "#8b5cf6", "#a78bfa"],  // 5 colors: low to high activity (purple theme)
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-center mb-4">GitHub Contributions (Last Year)</h2>
      <div className="overflow-x-auto">
        <GitHubCalendar
          username="uzmashxxxikh"  // ← Replace with your real GitHub username!
          blockSize={10}
          blockMargin={4}
          fontSize={12}
          theme={theme}  // Now valid with 5 dark colors
          style={{ margin: "0 auto" }}
        />
      </div>
    </div>
  );
}

export default GitHubContributions;