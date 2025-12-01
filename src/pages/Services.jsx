import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import servicePamphletPDF from "../assets/pdf/service-pamphlet-habltech.pdf"; 

const services = [
  {
    title: "MOBILE APP DEVELOPMENT",
    description: "Reach your users on their phones with strong and easy-to-use mobile apps. We build smooth iOS and Android apps from the first idea to the final launch.",
    features: [
      "Native iOS & Android Development",
      "Cross-Platform Solutions",
      "User-Centered UI/UX Design",
      "App Store Deployment & Management",
      "Performance Optimization",
      "Ongoing Maintenance & Support"
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
    borderColor: "border-primary/20",
    gradient: "from-primary/5 to-primary/10",
    projects: "450+"
  },
  {
    title: "DESKTOP APPLICATION DEVELOPMENT",
    description: "We develop secure, cross-platform desktop software designed to automate workflows, boost productivity, and connect smoothly with your core business systems.",
    features: [
      "Custom Business & Productivity Tools",
      "Data-Intensive & Real-Time Applications",
      "Cross-Platform Compatibility (Windows, macOS, Linux)",
      "Legacy System Modernization",
      "Enterprise Security Integration",
      "Automated Deployment Solutions"
    ],
    stack: ["Electron", ".NET MAUI", "Java", "Python", "C++", "SQLite"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-secondary"
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
    borderColor: "border-secondary/20",
    gradient: "from-secondary/5 to-secondary/10",
    projects: "320+"
  },
  {
    title: "CUSTOM ERP & BUSINESS DEVELOPMENT",
    description: "Bring clarity to your operations with a tailored ERP that automates core tasks and keeps finance, supply chain, and teams aligned in real time.",
    features: [
      "Process Analysis & Workflow Automation",
      "Integrated CRM, HR, and Finance Modules",
      "Real-Time Analytics & Reporting Dashboards",
      "Scalable & Modular Architecture",
      "Multi-Company & Multi-Currency Support",
      "Custom Integration Development"
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
    borderColor: "border-primary/15 border-secondary/15",
    gradient: "from-primary/5 via-white/50 to-secondary/5",
    projects: "680+"
  },
  {
    title: "SPECIALIZED SOFTWARE & DIGITAL AUTOMATION",
    description: "Transform your operations with cutting-edge automation, AI integration, and specialized software solutions that drive efficiency and innovation.",
    features: [
      "AI & Machine Learning Integration",
      "IoT & Connected Device Ecosystems",
      "Blockchain & Smart Contract Development",
      "API-First & Microservices Architecture",
      "Robotic Process Automation (RPA)",
      "Predictive Analytics Solutions"
    ],
    stack: ["Python (TensorFlow, PyTorch)", "Go", "Rust", "IoT Platforms", "Blockchain Protocols", "Kubernetes", "Docker"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-secondary"
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
    borderColor: "border-secondary/20 border-primary/20",
    gradient: "from-secondary/5 to-primary/5",
    projects: "350+"
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 md:py-24 bg-gradient-to-br from-white via-white/50 to-gray-50 mt-[60px] sm:mt-[70px] lg:mt-20 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Heading Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Expertise
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive development services that help businesses grow, streamline operations, 
              and stay ahead of the competition with cutting-edge technology solutions.
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group flex flex-col p-6 sm:p-8 
                           rounded-2xl bg-white/60 backdrop-blur-md
                           border ${service.borderColor}
                           shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                           hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] 
                           hover:translate-y-[-4px] transition-all duration-500
                           relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 group-hover:bg-white/90 transition-all duration-300 flex-shrink-0 group-hover:scale-110 shadow-sm">
                      {service.icon}
                    </div>
                    {/* Project Count Badge */}
                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      {service.projects}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features Section */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider flex items-center">
                    <span className="w-4 h-0.5 bg-primary mr-2"></span>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-gray-600 text-sm group/feature">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Section */}
                <div className="mt-auto pt-6 border-t border-gray-200/60">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider flex items-center">
                    <span className="w-4 h-0.5 bg-primary mr-2"></span>
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-white/80 text-gray-700 rounded-lg text-xs font-medium border border-gray-200/60 shadow-sm hover:shadow-md hover:border-primary/20 hover:bg-white transition-all duration-300 group/tech"
                      >
                        <span className="group-hover/tech:text-primary transition-colors duration-300">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-6 pt-4 border-t border-gray-200/60">
                  <button className="group/btn w-full flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-300">
                    <span>View Service Details</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section - Replacing Statistics */}
          <div className="mb-16">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our Services
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We combine technical expertise with business understanding to deliver solutions that drive real results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: "🎯",
                    title: "Proven Expertise",
                    description: "Decades of experience delivering successful projects across industries"
                  },
                  {
                    icon: "⚡",
                    title: "Agile Development",
                    description: "Flexible, iterative approach with regular client collaboration"
                  },
                  {
                    icon: "🔒",
                    title: "Enterprise Security",
                    description: "Industry-standard security protocols and data protection"
                  },
                  {
                    icon: "🔄",
                    title: "Ongoing Support",
                    description: "Continuous maintenance and updates for long-term success"
                  }
                ].map((item, index) => (
                  <div key={index} className="group text-center p-6 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core Values */}
              <div className="mt-12 pt-8 border-t border-gray-200/60">
                <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Client-Centric Approach",
                      description: "We put your business goals at the center of every solution we build"
                    },
                    {
                      title: "Quality Excellence",
                      description: "Rigorous testing and best practices ensure reliable, scalable solutions"
                    },
                    {
                      title: "Innovation Focus",
                      description: "Staying ahead with cutting-edge technologies and modern approaches"
                    }
                  ].map((value, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200/60 hover:border-primary/20 transition-all duration-300 group">
                      <h4 className="font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Overview */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 border border-white/40 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Our Proven Process
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  From concept to deployment, we follow a structured approach that ensures quality, efficiency, and success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { step: "01", title: "Discover", desc: "Requirements Analysis" },
                  { step: "02", title: "Design", desc: "Solution Architecture" },
                  { step: "03", title: "Develop", desc: "Agile Implementation" },
                  { step: "04", title: "Deliver", desc: "Quality Deployment" }
                ].map((phase, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {phase.step}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">{phase.title}</div>
                    <div className="text-sm text-gray-600">{phase.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our custom solutions and innovation-driven approach can accelerate your product and business growth.
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
                
                  <a
                               href={servicePamphletPDF}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                                          hover:bg-gray-50 hover:scale-105 transition-all duration-300
                                          border border-gray-200 shadow-sm"
                             >
                               <span>Our Service</span>
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;