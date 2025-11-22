import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      deliverables: ["Project Requirements", "Technical Specification", "Timeline & Milestones", "Budget Estimate"]
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
      deliverables: ["Wireframes", "UI/UX Design", "Interactive Prototypes", "Design System"]
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
      deliverables: ["Code Development", "Quality Assurance", "Performance Testing", "Security Audits"]
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
      deliverables: ["Production Deployment", "Performance Monitoring", "User Training", "Documentation"]
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
      deliverables: ["Ongoing Support", "Regular Updates", "Performance Optimization", "Feature Enhancements"]
    }
  ];

  const methodologies = [
    {
      name: "Agile Development",
      description: "Iterative approach with regular sprints and continuous delivery",
      benefits: ["Flexible to changes", "Faster time to market", "Continuous improvement"]
    },
    {
      name: "Quality First",
      description: "Comprehensive testing and code reviews at every stage",
      benefits: ["Bug-free delivery", "Better performance", "Long-term reliability"]
    },
    {
      name: "Transparent Communication",
      description: "Regular updates and open channels for collaboration",
      benefits: ["No surprises", "Better alignment", "Faster decision making"]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Main Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 mt-[70px] sm:mt-[80px] lg:mt-24 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 blur-[80px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Process
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              A transparent, collaborative approach that ensures your project's success from concept to launch and beyond.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary to-primary/90 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                      <span className="text-white text-2xl lg:text-3xl font-bold">{step.step}</span>
                    </div>
                    <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Methodologies Section */}
          <div className="mt-20 lg:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Methodologies
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Proven approaches that ensure quality, efficiency, and successful project delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:translate-y-[-8px] transition-all duration-500"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                  <div className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-gray-900 to-primary py-16 px-8 rounded-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] -z-10" />
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our proven process can bring your vision to life with quality and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group/btn inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold 
                           hover:bg-gray-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg
                           border-2 border-white hover:border-primary/20"
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
                  className="group/btn2 inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-xl font-semibold 
                           hover:bg-white/10 hover:scale-105 transition-all duration-300
                           border-2 border-white/30 hover:border-white/60"
                >
                  <span>See Case Studies</span>
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

              {/* Additional info */}
              <p className="text-gray-300 mt-6 text-sm">
                Get a free consultation and project estimate within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Process;