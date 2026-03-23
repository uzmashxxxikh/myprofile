import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { SiLinkedin, SiGithub, SiReact, SiTailwindcss } from "react-icons/si";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/uzma-shaikh-86108a236/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: <SiGithub className="h-5 w-5" />,
      href: "https://github.com/uzmashxxxikh",
      color: "hover:text-purple-400"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Uzma Shaikh</h3>
            <p className="text-gray-400 leading-relaxed">
              Software Developer passionate about creating innovative solutions 
              and building meaningful digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a 
                  href="mailto:uzmashxikh@hotmail.com"
                  className="hover:text-purple-400 transition-colors duration-200"
                >
                  uzmashxikh@hotmail.com
                </a>
              </p>
              <p className="text-gray-400">Toronto, Ontario</p>
              <p className="text-gray-400">Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Uzma Shaikh</span>
            </div>


            
     
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;