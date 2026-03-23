import React from "react";
import { AcademicCapIcon, BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        {/* Philosophy Statement */}
        <div className="mb-12 text-center">
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto italic">
            My work is driven by a belief that I am not just learning to code, but learning to direct 
            my own evolution as a thinker, teammate, and builder in the tech world. Drawing on experiences 
            in web, mobile, and cybersecurity projects.
          </p>
        </div>
        
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-purple-300">Computer Programming and Analysis</h4>
                <p className="text-gray-300">George Brown College</p>
                <p className="text-sm text-gray-400">2023 - Present</p>
                <p className="text-sm text-gray-300 mt-2">
                  Comprehensive program covering full-stack development, database management, 
                  and software engineering principles.
                </p>
              </div>
            </div>
          </div>

          {/* Employment */}
          <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <BriefcaseIcon className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold">Employment</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-purple-300">Deputy Returning Officer (DRO)</h4>
                <p className="text-gray-300">Federal and Provincial Elections</p>
                <p className="text-sm text-gray-400">2025</p>
                <p className="text-sm text-gray-300 mt-2">
                  Managed electoral processes, ensured compliance with election protocols, 
                  and facilitated democratic participation in government elections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="mt-8 bg-gray-800 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <MapPinIcon className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-gray-300">Toronto, Ontario</span>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm a passionate software developer with a strong foundation in full-stack development 
            and mobile app creation. My approach combines technical expertise with persistent 
            problem-solving, always curious to learn new technologies and optimize digital solutions. 
            Currently pursuing my diploma while building real-world applications that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;