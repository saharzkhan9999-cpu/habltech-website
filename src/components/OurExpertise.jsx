import React from "react";
import servicePamphletPDF from "../assets/pdf/service-pamphlet-habltech.pdf";

const OurExpertise = () => {
  const expertiseData = [
    {
      title: "MOBILE APP DEVELOPMENT",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      description: "Reach your users on their phones with fast and dependable mobile apps. We build smooth iOS and Android apps, and handle everything from idea to launch.",
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
      stack: ["Electron", ".NET MAUI", "Java", "Python", "C++", "SQLite", "Nginx", "MongoDB"]
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
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            What We Excel At
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Expertise</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We specialize in custom software development across web, mobile, and desktop
            platforms delivering tailored digital solutions that accelerate growth, optimize operations,
            and give businesses a competitive edge in their market.
          </p>
        </div>

        {/* Expertise Grid - Enhanced Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-xl p-5 sm:p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                
                {/* Icon with Number Badge - Improved */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary">
                          {item.icon}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold shadow-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Title - Better for Long Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Hover Badge */}
                  <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                    <div className="text-primary text-xs font-medium px-3 py-1 bg-primary/10 rounded-full whitespace-nowrap">
                      Learn More
                    </div>
                  </div>
                </div>
                
                {/* Description - Improved Readability */}
                <div className="mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
                
                {/* Features List - Grid Layout */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tech Stack - Improved Layout */}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700">Tech Stack</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {item.stack.length} technologies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.stack.length > 5 && (
                      <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                        +{item.stack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Enhanced */}
        <div className="relative bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 lg:p-10 text-center border border-white/40 backdrop-blur-sm overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Let's discuss how we can apply our proven expertise to deliver outstanding results for your next project.
            </p>
            
            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="/contact"
                className="group/btn inline-flex items-center gap-3 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold 
                           hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25
                           w-full sm:w-auto justify-center"
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
                href={servicePamphletPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold 
                           hover:bg-gray-50 hover:scale-105 hover:border-primary/30 hover:text-primary
                           border border-gray-200 shadow-sm transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-500 group-hover/btn2:text-primary transition-colors duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Service Brochure</span>
              </a>
            </div>

            {/* Trust Indicators - Improved */}
            <div className="pt-6 sm:pt-8 border-t border-gray-200/60">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { text: "Enterprise Security", icon: "🔒", desc: "Bank-level protection" },
                  { text: "NDA Protected", icon: "📝", desc: "Confidentiality assured" },
                  { text: "Agile Teams", icon: "🔄", desc: "Flexible methodology" },
                  { text: "24/7 Support", icon: "🛠️", desc: "Always available" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg mx-auto mb-2">
                      {item.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-700">{item.text}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;