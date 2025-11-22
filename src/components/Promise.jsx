import React from "react";

const promisePoints = [
  {
    title: "Seamless Alignment With U.S Time Zones",
    description: "Work with a team that operates during your business hours for real-time collaboration and instant communication",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Cost-Effective Excellence",
    description: "Access premium development talent with significant savings compared to local agencies",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "End-to-End Partnership",
    description: "Comprehensive solutions from strategic planning to development and ongoing maintenance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-6m0 0l3 3m-3-3l-3 3" />
      </svg>
    )
  },
  {
    title: "Dedicated Project Management",
    description: "Single point of contact ensuring your vision is perfectly executed and delivered on time",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Scalable Team Resources",
    description: "Flexible team sizing that adapts to your project needs and business growth",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Quality Assurance Focus",
    description: "Rigorous testing protocols ensuring robust, secure, and high-performing applications",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

const Promise = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
      {/* Background Effects - Matching PastWorkSnapshot */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Updated Header - Matching Our Expertise component */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge - Matching Our Expertise */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Our Promise To You
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our <span className="text-primary">Commitment</span>
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Delivering exceptional value through strategic partnerships built on trust, quality, and measurable results
          </p>
        </div>

        {/* Enhanced Grid Layout - Matching PastWorkSnapshot Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {promisePoints.map((point, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-white/60 backdrop-blur-md rounded-2xl p-8
                         border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                         hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:translate-y-[-4px]
                         transition-all duration-500 text-center"
            >
              {/* Icon Container - Matching PastWorkSnapshot */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary">
                  {point.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Value Proposition Section - Matching PastWorkSnapshot CTA Style */}
        <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Vision?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Join industry leaders who trust us to deliver innovative solutions that drive growth and exceed expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group/btn inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold 
                         hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
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
              <span>View Our Work</span>
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

        {/* Enhanced Trust Indicators - Matching your style */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm font-medium mb-8">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>NDA Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Agile Methodology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;