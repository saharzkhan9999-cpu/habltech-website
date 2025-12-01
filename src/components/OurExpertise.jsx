import React from "react";
import servicePamphletPDF from "../assets/pdf/service-pamphlet-habltech.pdf"; // Import the PDF file

const OurExpertise = () => {
  const expertiseData = [
    {
      title: "MOBILE APP DEVELOPMENT",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      description: " Reach your users on their phones with fast and dependable mobile apps. We build smooth iOS and Android apps, and handle everything from idea to launch.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions", 
        "User-Centered UI/UX Design",
        "App Store Deployment & Management"
      ],
      stack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "GraphQL", "AWS Amplify"]
    },
    {
      title: "DESKTOP APPLICATION DEVELOPMENT",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "We develop secure, cross-platform desktop software designed to automate workflows, boost productivity, and connect smoothly with your core business systems.",
      features: [
        "Custom Business & Productivity Tools",
        "Data-Intensive & Real-Time Applications",
        "Cross-Platform Compatibility (Windows, macOS, Linux)",
        "Legacy System Modernization"
      ],
      stack: ["Electron", ".NET MAUI", "Java", "Python", "C++", "SQLite"]
    },
    {
      title: "CUSTOM ERP & BUSINESS DEVELOPMENT", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Bring clarity to your operations with a tailored ERP that automates core tasks and keeps finance, supply chain, and teams aligned in real time.",
      features: [
        "Process Analysis & Workflow Automation",
        "Integrated CRM, HR, and Finance Modules", 
        "Real-Time Analytics & Reporting Dashboards",
        "Scalable & Modular Architecture"
      ],
      stack: ["Odoo", "Microsoft Power Platform", "Python", "Node.js", "SQL", "Power BI", "Tableau"]
    },
    {
      title: "SPECIALIZED SOFTWARE & DIGITAL AUTOMATION",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Empower your business to solve unique challenges and seize new opportunities through custom technology crafted for your competitive advantage.",
      features: [
        "AI & Machine Learning Integration",
        "IoT & Connected Device Ecosystems",
        "Blockchain & Smart Contract Development", 
        "API-First & Microservices Architecture"
      ],
      stack: ["Python (TensorFlow, PyTorch)", "Go", "Rust", "IoT Platforms", "Blockchain Protocols", "Kubernetes", "Docker"]
    }
  ];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
      {/* Background Effects - Matching Promise component */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Previous Version Header - The better looking one */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge - Like the previous version */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            What We Excel At
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our <span className="text-primary">Expertise</span>
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            We specialize in custom software development across web, mobile, and desktop
            platforms delivering tailored digital solutions that accelerate growth, optimize operations,
            and give businesses a competitive edge in their market.
          </p>
        </div>

        {/* Expertise Grid - Matching Promise component card style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white/60 backdrop-blur-md rounded-2xl p-8
                         border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                         hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:translate-y-[-4px]
                         transition-all duration-500"
            >
              {/* Card Header */}
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
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
              <div className="mt-auto">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Our Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Updated with more descriptive content */}
        <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can apply our proven expertise to deliver outstanding results for your next project.
          </p>
          
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
            
            {/* Updated button with better description */}
            <a
              href={servicePamphletPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                         hover:bg-gray-50 hover:scale-105 transition-all duration-300
                         border border-gray-200 shadow-sm"
            >
              <span>Service Brochure</span>
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

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-500">
            {[
              { text: "Enterprise-Grade Security", icon: "🔒" },
              { text: "NDA Protection", icon: "📝" },
              { text: "Agile Methodology", icon: "🔄" },
              { text: "24/7 Support", icon: "🛠️" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;