import React from "react";
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon,
  ServerIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";
import { SiKotlin, SiSpringboot, SiAndroid, SiGooglecloud, SiPostgresql, SiDocker, SiSwift, SiIos, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "SipSip - Plant Care Mobile App",
      description: "An Android app built in Kotlin that helps users keep their plants healthy by tracking watering schedules and care tasks.",
      longDescription: "SipSip lets users create plant profiles with details such as species, location, and care frequency, then notifies them when it's time to water or perform maintenance. The app demonstrates Android app architecture, UI layouts, and Kotlin integration with external services for plant information.",
      tech: [
        { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
        { name: "Jetpack Compose", icon: <SiAndroid className="text-green-500" /> },
        { name: "Android SDK", icon: <SiAndroid className="text-green-500" /> },
        { name: "Room Database", icon: <SiAndroid className="text-green-500" /> },
        { name: "Google Cloud Vision API", icon: <SiGooglecloud className="text-blue-500" /> }
      ],
      category: "Mobile App",
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      demoLink: "https://sipsip-eight.vercel.app/",
      githubLink: "https://github.com/uzmashxxxikh/SipSip---Plant-Care-Mobile-App",
      features: [
        "Plant identification using AI",
        "Personalized care schedules",
        "Push notifications for watering",
        "Local data storage with Room"
      ]
    },
    {
      title: "Student Wellness Hub",
      description: "A microservice-based platform designed to support student mental health and wellness through comprehensive resource management.",
      longDescription: "Built with Spring Boot microservices architecture, this platform provides students with access to wellness resources, appointment scheduling, and progress tracking with containerized deployment.",
      tech: [
        { name: "Java", icon: <CodeBracketIcon className="text-red-600" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> }
      ],
      category: "Web Application",
      icon: <ServerIcon className="h-8 w-8" />,
      githubLink: "#", // Add your GitHub link here
      features: [
        "Microservices architecture",
        "RESTful API design",
        "Database optimization",
        "Containerized deployment"
      ]
    },
    {
      title: "Expense Tracking - Personal iOS App",
      description: "A native iOS application that helps users track daily expenses with a clean and intuitive interface.",
      longDescription: "Users can add, edit, and delete transactions, categorize spending, and view their history in a structured list to better understand their financial habits. Data is persisted locally on the device so entries remain available across app launches.",
      tech: [
        { name: "Swift", icon: <SiSwift className="text-orange-500" /> },
        { name: "iOS", icon: <SiIos className="text-gray-400" /> },
        { name: "UIKit/SwiftUI", icon: <SiSwift className="text-orange-500" /> },
        { name: "Core Data", icon: <SiIos className="text-gray-400" /> }
      ],
      category: "Mobile App",
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      githubLink: "https://github.com/uzmashxxxikh/Expense_Tracking",
      features: [
        "Transaction management (add, edit, delete)",
        "Expense categorization",
        "Local data persistence",
        "Clean, intuitive interface"
      ]
    },
    {
      title: "Real-time Chat Web App",
      description: "A browser-based chat application that allows multiple users to join a room and exchange messages in real time through a responsive interface.",
      longDescription: "The project focuses on core messaging features: joining a chat, sending and receiving messages, and updating the conversation live without page reloads. Demonstrates understanding of client-server communication and event-driven UI behavior.",
      tech: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "WebSockets", icon: <CodeBracketIcon className="text-green-600" /> }
      ],
      category: "Web Application",
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
      githubLink: "https://github.com/uzmashxxxikh/101504303_lab_test1_chat_app",
      features: [
        "Real-time messaging",
        "Multi-user chat rooms",
        "Responsive web interface",
        "Live conversation updates"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="text-purple-400 mr-3">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-lg">{project.description}</p>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.longDescription}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-start text-sm">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <div key={i} className="bg-gray-700 hover:bg-gray-600 transition-colors duration-200 px-3 py-2 rounded-full flex items-center gap-2 text-white text-sm">
                          <span className="text-base">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
                      >
                        <EyeIcon className="h-4 w-4" />
                        <span>Live Demo</span>
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
                      >
                        <CodeBracketIcon className="h-4 w-4" />
                        <span>View Code</span>
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;