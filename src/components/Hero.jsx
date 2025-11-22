import React from "react";
import { heroImg } from "../assets/app";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    {
      title: "Communication",
      description: "Clear, proactive, and timezone-aligned.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Reliability",
      description: "Trusted engineering with proven delivery.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Transparency",
      description: "Open communication & real-time progress.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Scalability",
      description: "Flexible teams built for your growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];


  return (
    <section className="w-full mt-24 lg:mt-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      
      {/* Hero Section - Clean without reload animations */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        
        {/* Background Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 blur-[80px] rounded-full -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[120px] rounded-full -z-10"></div>

        {/* Left Content */}
        <div className="flex flex-col lg:w-1/2 text-center lg:text-left">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto lg:mx-0 w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Trusted by Clients Worldwide
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Your Offshore Engineering <br />
            Partner That Feels{' '}
            <span className="text-primary relative inline-block">
              In-House
              <span className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 -z-10 rounded-full"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl mt-6 text-gray-600 leading-relaxed">
            Full-service development partner based in Karachi, perfectly aligned with U.S.
            time zones.{' '}
            <span className="font-semibold text-gray-800 bg-gradient-to-r from-primary/10 to-transparent px-1 rounded">
              Reliable. Scalable. Efficient.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group/cta bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 
                         hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 
                         flex items-center justify-center gap-2 text-center"
            >
              <span>Let's Build Together</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover/cta:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="https://calendly.com/habltech"
              target="_blank"
              rel="nooper noreferrer"
              className="group/cta2 border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-semibold 
                         hover:border-primary hover:text-primary hover:scale-105 
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Book a Call</span>
            </Link>
          </div>

          
         
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 relative group">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/15 transition-all duration-500"></div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <img
              src={heroImg}
              alt="HABLTECH Hero Visual - Professional Development Team"
              className="relative w-full max-w-[500px] lg:max-w-[600px] object-contain group-hover:scale-105 transition-transform duration-500 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Who We Are + What We Do Section */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 lg:p-12 mt-20 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Who We Are */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Founder-led, senior engineering team operating in U.S.-aligned hours,
              delivering reliable support and transparent collaboration.
            </p>
            
            {/* Info List */}
            <div className="mt-8 space-y-4">
              {[
                "Senior-led development teams",
                "U.S. timezone alignment",
                "Agile methodology experts",
                "Continuous integration & deployment"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-gray-700 group">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              What We Do
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/10"
                >
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="text-center mt-16">
        <p className="text-gray-500 text-sm font-medium mb-8">Trusted by innovative companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70 hover:opacity-100 transition-opacity duration-300">
          {["TechCorp", "InnovateCo", "GlobalSoft", "NextGen", "FutureLabs"].map((company, index) => (
            <div
              key={index}
              className="w-24 h-16 bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center text-gray-600 font-semibold text-sm border border-gray-100 hover:border-primary/20 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;