import React from "react";

function Projects() {
  const projects = ["Snapchat Memories Archive Organizer", "Windows Power Settings Optimizer", "File Metadata Troubleshooter"];

  return (
    <div className="bg-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-2 text-sm">
        {projects.map((proj) => (
          <li key={proj} className="bg-gray-700 p-3 rounded-lg">• {proj}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;