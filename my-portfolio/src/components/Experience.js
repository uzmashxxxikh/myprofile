import React from "react";

function Experience() {
  const items = [
    { title: "Digital Workflow Projects", date: "2025", desc: "Configured Windows settings, optimized downloads, batch file organization." },
    // Add 2-3 more short ones
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="bg-gray-700 p-4 rounded-xl">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span className="text-sm text-purple-400">{item.date}</span>
            <p className="text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;