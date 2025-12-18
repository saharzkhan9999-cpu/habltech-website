import React from "react";

const approachData = [
  {
    title: "Understanding Your Needs",
    description: "Deep dive into your business goals, challenges, and user requirements",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
  },
  {
    title: "Create a Tailored Plan",
    description: "Custom strategy and roadmap designed specifically for your project",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Deliver Quality Solutions",
    description: "Build with best practices, clean code, and rigorous testing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Ensure Ongoing Support",
    description: "Continuous maintenance, updates, and performance optimization",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const OurApproach = () => {
  return (
    <section className="relative w-full px-6 sm:px-10 lg:px-16 py-20 lg:py-24 bg-gradient-to-br from-white via-white/50 to-gray-50 overflow-hidden mt-2 max-w-7xl mx-auto">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Our Approach
          </h2>
          <p className="text-gray-600 mt-4 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From strategy to launch — we build, design, and automate with quality.
          </p>
        </div>

        {/* Enhanced Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachData.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8
                         rounded-2xl bg-white/60 backdrop-blur-md
                         border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                         hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] 
                         hover:translate-y-[-8px] transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Process Flow Visualization */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              A Proven Process That Delivers Results
            </h3>
            
            {/* Desktop/Tablet Horizontal Flow */}
            <div className="hidden md:flex items-center justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2 -z-10"></div>
              
              {[
                { step: "1", name: "Discover", desc: "Understand Needs" },
                { step: "2", name: "Plan", desc: "Tailored Strategy" },
                { step: "3", name: "Build", desc: "Quality Development" },
                { step: "4", name: "Support", desc: "Ongoing Maintenance" }
              ].map((stage, index) => (
                <div key={index} className="flex flex-col items-center relative z-10">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/90 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/25">
                    <span className="text-white font-bold text-lg">{stage.step}</span>
                  </div>
                  
                  {/* Step Info */}
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">{stage.name}</h4>
                    <p className="text-gray-600 text-sm">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="md:hidden space-y-8">
              {[
                { step: "1", name: "Discover", desc: "Deep dive into your business goals and user requirements" },
                { step: "2", name: "Plan", desc: "Create custom strategy and project roadmap" },
                { step: "3", name: "Build", desc: "Develop with best practices and rigorous testing" },
                { step: "4", name: "Support", desc: "Provide continuous maintenance and optimization" }
              ].map((stage, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  {/* Step Number with Connecting Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/90 rounded-full flex items-center justify-center shadow-lg shadow-primary/25 z-10">
                      <span className="text-white font-bold text-sm">{stage.step}</span>
                    </div>
                    {/* Vertical Line */}
                    {index < 3 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-primary/30 to-primary/10 mt-2 flex-1"></div>
                    )}
                  </div>
                  
                  {/* Step Info */}
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">{stage.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8 md:mt-12">
              <a
                href="/process"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
              >
                <span>Learn More About Our Process</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;