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
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNextdotjs as SiNextJs,
  SiVercel,
  SiJenkins,
  SiLinux,
  SiSqlite,
  SiOracle,
  SiKotlin,
  SiAndroid,
  SiGooglecloud
} from "react-icons/si";
import { CheckBadgeIcon, CommandLineIcon } from "@heroicons/react/24/solid";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <CheckBadgeIcon className="text-red-600" /> },
        { name: "Python", icon: <SiPython className="text-yellow-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 bg-black rounded" /> },
        { name: "C#", icon: <CheckBadgeIcon className="text-purple-600" /> },
        { name: "C", icon: <CheckBadgeIcon className="text-blue-600" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        { name: "SQL", icon: <CheckBadgeIcon className="text-blue-700" /> },
        { name: "Bash", icon: <CommandLineIcon className="text-green-600" /> },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
        { name: "Spring Boot", icon: <SiSpringBoot className="text-green-700" /> },
        { name: "Next.js", icon: <SiNextJs className="text-white" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: ".NET", icon: <CheckBadgeIcon className="text-blue-600" /> },
        { name: "Express", icon: <CheckBadgeIcon className="text-gray-400" /> },
        { name: "Node.js", icon: <SiNodeJs className="text-green-600" /> },
        { name: "Tailwind CSS", icon: <CheckBadgeIcon className="text-teal-500" /> },
        { name: "Jetpack Compose", icon: <SiAndroid className="text-green-500" /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
        { name: "Oracle SQL", icon: <SiOracle className="text-red-600" /> },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "AWS", icon: <CheckBadgeIcon className="text-orange-500" /> },
        { name: "Google Cloud Vision API", icon: <SiGooglecloud className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Jenkins", icon: <SiJenkins className="text-blue-600" /> },
        { name: "Linux", icon: <SiLinux className="text-yellow-500" /> },
        { name: "Android SDK", icon: <SiAndroid className="text-green-500" /> },
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "Windows Optimization", icon: <CheckBadgeIcon className="text-purple-600" /> },
        { name: "File Management", icon: <CheckBadgeIcon className="text-indigo-600" /> },
        { name: "Troubleshooting", icon: <CheckBadgeIcon className="text-pink-600" /> },
        { name: "Batch Scripting", icon: <CheckBadgeIcon className="text-red-600" /> },
        { name: "Mobile Development", icon: <SiAndroid className="text-green-500" /> },
        { name: "Full-Stack Development", icon: <CheckBadgeIcon className="text-blue-500" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-purple-700 hover:bg-purple-600 transition-all duration-300 px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;