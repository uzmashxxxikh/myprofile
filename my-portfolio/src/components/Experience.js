import React from "react";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

function Experience() {
  const experiences = [
    {
      title: "Deputy Returning Officer (DRO)",
      company: "Federal and Provincial Elections",
      location: "Toronto, Ontario",
      date: "2025",
      type: "Contract",
      description: [
        "Managed electoral processes and ensured compliance with election protocols",
        "Facilitated democratic participation in government elections",
        "Supervised polling station operations and staff coordination",
        "Maintained accurate records and handled sensitive electoral materials"
      ],
      skills: ["Leadership", "Compliance", "Process Management", "Communication"]
    },
    {
      title: "Student Developer",
      company: "George Brown College",
      location: "Toronto, Ontario", 
      date: "2023 - Present",
      type: "Academic",
      description: [
        "Developing full-stack applications using modern technologies",
        "Building mobile applications with Kotlin and Android SDK",
        "Working with databases including PostgreSQL, MySQL, and MongoDB",
        "Implementing microservices architecture with Spring Boot"
      ],
      skills: ["Full-Stack Development", "Mobile Development", "Database Design", "Software Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <BriefcaseIcon className="h-6 w-6 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <p className="text-xl text-purple-300 mb-2">{exp.company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm mb-4">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{exp.date}</span>
                    </div>
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;