import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import brochurePDF from "../assets/pdf/brochure-habltech.pdf";

const Process = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project strategy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      deliverables: ["Project Requirements", "Technical Specification", "Timeline & Milestones", "Budget Estimate"],
      duration: "1-2 weeks",
      team: ["Project Manager", "Business Analyst", "Solution Architect"]
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and interactive prototypes to visualize the user experience and interface before development begins.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      deliverables: ["Wireframes", "UI/UX Design", "Interactive Prototypes", "Design System"],
      duration: "2-3 weeks",
      team: ["UI/UX Designer", "Product Designer", "Project Manager"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our engineering team builds your solution using best practices, with continuous testing and quality assurance throughout the process.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      deliverables: ["Code Development", "Quality Assurance", "Performance Testing", "Security Audits"],
      duration: "4-12 weeks",
      team: ["Frontend Developers", "Backend Developers", "QA Engineers", "DevOps"]
    },
    {
      step: "04",
      title: "Launch & Deployment",
      description: "We handle the complete deployment process, ensuring a smooth transition to production with minimal downtime and maximum reliability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      deliverables: ["Production Deployment", "Performance Monitoring", "User Training", "Documentation"],
      duration: "1-2 weeks",
      team: ["DevOps Engineer", "Project Manager", "Technical Lead"]
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "We provide ongoing support, maintenance, and optimization to ensure your solution continues to perform at its best.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      deliverables: ["Ongoing Support", "Regular Updates", "Performance Optimization", "Feature Enhancements"],
      duration: "Ongoing",
      team: ["Support Engineers", "DevOps", "Project Manager"]
    }
  ];

  const methodologies = [
    {
      name: "Agile Development",
      description: "Iterative approach with regular sprints and continuous delivery",
      benefits: ["Flexible to changes", "Faster time to market", "Continuous improvement"],
      icon: "🔄"
    },
    {
      name: "Quality First",
      description: "Comprehensive testing and code reviews at every stage",
      benefits: ["Bug-free delivery", "Better performance", "Long-term reliability"],
      icon: "✅"
    },
    {
      name: "Transparent Communication",
      description: "Regular updates and open channels for collaboration",
      benefits: ["No surprises", "Better alignment", "Faster decision making"],
      icon: "💬"
    }
  ];

  const processHighlights = [
    {
      icon: "⚡",
      title: "Fast Start-up",
      description: "Get your project rolling within 1-2 weeks of kickoff"
    },
    {
      icon: "🔄",
      title: "Iterative Approach",
      description: "Regular demos and feedback loops ensure alignment"
    },
    {
      icon: "🔒",
      title: "Risk Mitigation",
      description: "Proactive identification and resolution of potential issues"
    },
    {
      icon: "📊",
      title: "Transparent Reporting",
      description: "Clear visibility into progress and milestones"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Main Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-16 py-8 lg:py-12 mb-2 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden max-w-7xl mx-auto ">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Our Methodology
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Development Process</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A transparent, collaborative approach that ensures your project's success from concept to launch and beyond. 
              Every step is designed to deliver exceptional quality and value.
            </p>
          </div>

          {/* Process Highlights Section */}
          <div className="mb-16">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Why Our Process Delivers Results
                </h3>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                  Our structured approach combines proven methodologies with flexibility to adapt to your unique needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processHighlights.map((highlight, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      {highlight.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-tight">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Steps with Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -z-10 transform lg:-translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Step Number & Icon - Desktop */}
                  <div className="hidden lg:flex flex-shrink-0 relative">
                    <div className="relative group">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/90 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                        <span className="text-white text-xl font-bold">{step.step}</span>
                      </div>
                      <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
                    </div>
                  </div>

                  {/* Step Number & Icon - Mobile */}
                  <div className="flex lg:hidden items-center gap-4 mb-4">
                    <div className="relative group">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/90 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                        <span className="text-white text-lg font-bold">{step.step}</span>
                      </div>
                      <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 -z-10"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 bg-white/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/40 
                                 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] 
                                 hover:translate-y-[-4px] transition-all duration-500 group`}>
                    
                    {/* Desktop Header */}
                    <div className="hidden lg:flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Key Deliverables
                        </h4>
                        <div className="space-y-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Team */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Team Involved
                        </h4>
                        <div className="space-y-2">
                          {step.team.map((member, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                              <span className="text-sm">{member}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodologies Section */}
          <div className="mt-20 lg:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Methodologies
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Proven approaches that ensure quality, efficiency, and successful project delivery every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 
                             shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] 
                             hover:translate-y-[-8px] transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {method.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                  <div className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our proven process can bring your vision to life with quality and efficiency. 
                Get a free consultation and detailed project estimate within 24 hours.
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
                  href={brochurePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                           hover:bg-gray-50 hover:scale-105 transition-all duration-300
                           border border-gray-200 shadow-sm"
                >
                  <span>Habltech Brochurer</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transform group-hover/btn2:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
      <Footer/>
    </>
  );
};

export default Process;