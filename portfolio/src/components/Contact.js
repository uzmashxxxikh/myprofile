import React, { useState } from "react";
import { 
  EnvelopeIcon, 
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:uzmashxikh@hotmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      label: "Email",
      value: "uzmashxikh@hotmail.com",
      href: "mailto:uzmashxikh@hotmail.com"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      label: "Location",
      value: "Toronto, Ontario, Canada",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/uzma-shaikh-86108a236/",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "GitHub",
      icon: <SiGithub className="h-6 w-6" />,
      href: "https://github.com/uzmashxxxikh",
      color: "text-purple-400 hover:text-purple-300"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                or just connecting with fellow developers. Whether you're looking for a 
                passionate developer or want to collaborate on something exciting, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                  <div className="text-purple-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white hover:text-purple-300 transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-300">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition-all duration-300 hover:scale-110 p-3 bg-gray-800 rounded-xl hover:bg-gray-700`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-500 mb-2">Message Sent!</h4>
                <p className="text-gray-300">Your email client should open shortly. Thank you for reaching out!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-vertical"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;