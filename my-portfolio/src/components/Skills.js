import React from "react";
import { 
  SiReact, 
  SiGit, 
  SiDocker, 
  SiMongodb, 
  SiNodedotjs as SiNodeJs, 
  SiPostman, 
  SiSpringboot as SiSpringBoot, 
  SiPython, 
  SiMysql, 
  SiPostgresql,
  SiJavascript
} from "react-icons/si";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

function Skills() {
  const skills = [
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Spring Boot", icon: <SiSpringBoot className="text-green-700" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "Java", icon: <CheckBadgeIcon className="text-red-600" /> },  // No official icon — badge looks great!
    { name: "C#", icon: <CheckBadgeIcon className="text-purple-600" /> },  // No official icon
    { name: "Express", icon: <CheckBadgeIcon className="text-gray-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "AWS", icon: <CheckBadgeIcon className="text-orange-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 bg-black rounded" /> },
    { name: "Tailwind CSS", icon: <CheckBadgeIcon className="text-teal-500" /> },  // Tailwind logo not in react-icons/si yet
    { name: "Node.js", icon: <SiNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Windows Optimization", icon: <CheckBadgeIcon className="text-purple-600" /> },
    { name: "File Management", icon: <CheckBadgeIcon className="text-indigo-600" /> },
    { name: "Troubleshooting", icon: <CheckBadgeIcon className="text-pink-600" /> },
    { name: "Batch Scripting", icon: <CheckBadgeIcon className="text-red-600" /> },
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-4">
      <h2 className="text-lg font-bold mb-4 text-white">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-purple-700 hover:bg-purple-600 transition-all duration-300 px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-xs font-medium shadow-md hover:shadow-lg"
          >
            <span className="text-lg">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;