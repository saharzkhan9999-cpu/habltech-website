import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "MOBILE APP DEVELOPMENT",
    description: "Reach your users in their pockets with intuitive and robust mobile applications. We deliver seamless experiences across iOS and Android, from concept to launch.",
    features: [
      "Native iOS & Android Development",
      "Cross-Platform Solutions",
      "User-Centered UI/UX Design",
      "App Store Deployment & Management"
    ],
    stack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "GraphQL", "AWS Amplify"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "DESKTOP APPLICATION DEVELOPMENT",
    description: "Empower your team with high-performance desktop software. We develop secure, cross-platform applications that streamline complex workflows and integrate with your core systems.",
    features: [
      "Custom Business & Productivity Tools",
      "Data-Intensive & Real-Time Applications",
      "Cross-Platform Compatibility (Windows, macOS, Linux)",
      "Legacy System Modernization"
    ],
    stack: ["Electron", ".NET MAUI", "Java", "Python", "C++", "SQLite"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "CUSTOM ERP & BUSINESS DEVELOPMENT",
    description: "Unify your operations with a tailored Enterprise Resource Planning system. We automate core processes—from supply chain to finance—to provide real-time visibility and drive efficiency.",
    features: [
      "Process Analysis & Workflow Automation",
      "Integrated CRM, HR, and Finance Modules",
      "Real-Time Analytics & Reporting Dashboards",
      "Scalable & Modular Architecture"
    ],
    stack: ["Odoo", "Microsoft Power Platform", "Python", "Node.js", "SQL", "Power BI", "Tableau"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "SPECIALIZED SOFTWARE & DIGITAL AUTOMATION",
    description: "Solve unique challenges and pioneer new opportunities with cutting-edge technology. We develop bespoke solutions that set you apart.",
    features: [
      "AI & Machine Learning Integration",
      "IoT & Connected Device Ecosystems",
      "Blockchain & Smart Contract Development",
      "API-First & Microservices Architecture"
    ],
    stack: ["Python (TensorFlow, PyTorch)", "Go", "Rust", "IoT Platforms", "Blockchain Protocols", "Kubernetes", "Docker"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Main Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 mt-[80px] py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Heading Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Expertise
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive development services that help businesses grow, streamline operations, and stay ahead of the competition
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col p-8 
                           rounded-2xl bg-white/60 backdrop-blur-md
                           border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                           hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] 
                           hover:translate-y-[-8px] transition-all duration-300"
              >
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features Section */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Section */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Our Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-gray-800 rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to Leverage Our Expertise?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our comprehensive development services can bring your vision to life and drive your business forward.
              </p>
              
              {/* Enhanced Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group/btn inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold 
                           hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  <span>Start Your Project</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="/portfolio"
                  className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                           hover:bg-gray-50 hover:scale-105 transition-all duration-300
                           border border-gray-200 shadow-sm"
                >
                  <span>View Case Studies</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transform group-hover/btn2:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;