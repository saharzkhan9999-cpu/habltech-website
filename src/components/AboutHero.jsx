import React from "react";
import { about_pic } from "../assets/app";

const AboutHero = () => {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 mt-24 md:mt-32 py-12 lg:py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
      
      {/* Added background effects */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content - Enhanced with subtle improvements */}
        <div className="flex flex-col md:w-1/2 justify-center text-center md:text-left">
          {/* Added a subtle badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto md:mx-0 w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Trusted Development Partner
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            About <span className="text-primary">Us</span>
          </h1>

          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl">
            Our Team, Our Approach, <br className="hidden md:block" />
            Our Promise to Deliver Excellence.
          </p>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
            At <span className="text-primary font-semibold">HABLTECH</span>, we
            combine creativity and technology to build meaningful digital
            experiences. Our goal is simple: empower businesses through
            innovative solutions that drive success.
          </p>

          {/* Added key features */}
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            {[
              "Custom Solutions",
              "Agile Development", 
              "24/7 Support",
              "Quality Focus"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Added CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 text-center"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 text-center"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right Image - Enhanced with hover effects */}
        <div className="flex justify-center md:justify-end md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/15 transition-all duration-500"></div>
          <img
            src={about_pic}
            alt="HABLTECH About Illustration"
            className="relative w-full max-w-[480px] md:max-w-[520px] object-contain group-hover:scale-105 transition-transform duration-500 rounded-2xl shadow-xl"
          />
          
          {/* Added floating element */}
         
        </div>
      </div>
    </section>
  );
};

export default AboutHero;