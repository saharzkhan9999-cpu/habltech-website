import React from "react";
import { about_pic } from "../assets/app";
import { Link } from "react-router-dom";

const AboutHero = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "1800+", label: "Projects Delivered" },
    { number: "810+", label: "Happy Clients" },
    { number: "36", label: "Countries Served" }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "Cutting-edge solutions that push boundaries"
    },
    {
      icon: "🤝",
      title: "Client First",
      description: "Your success is our primary focus"
    },
    {
      icon: "⚡",
      title: "Agile Excellence",
      description: "Fast, flexible, and efficient delivery"
    },
    {
      icon: "🛡️",
      title: "Quality Assured",
      description: "Enterprise-grade security and reliability"
    }
  ];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-20 md:py-24 bg-gradient-to-br from-white via-white/50 to-gray-50 mt-[60px] sm:mt-[70px] lg:mt-20 relative overflow-hidden">
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content - Enhanced */}
        <div className="flex flex-col lg:w-1/2 justify-center text-center lg:text-left">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto lg:mx-0 w-fit border border-primary/20 hover:bg-primary/15 transition-all duration-300 group/trust">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover/trust:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Trusted by 810+ Clients Worldwide
          </div>

          {/* Enhanced Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Building Digital <span className="text-primary">Excellence</span> Since 1999
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-gray-700 mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
            Your Partner in <span className="text-primary">Innovation</span>, Your Solution for <span className="text-primary">Growth</span>
          </p>

          {/* Enhanced Description */}
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            At <span className="text-primary font-semibold">HABLTECH</span>, we've spent 25+ years transforming 
            businesses through cutting-edge technology solutions. We combine deep technical expertise with 
            strategic thinking to deliver digital products that drive real business impact.
          </p>

          {/* Key Stats */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-md">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left group/stat">
                <div className="text-2xl font-bold text-primary group-hover/stat:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-3 group/value p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover/value:scale-110 group-hover/value:bg-primary/20 transition-all duration-300 text-lg">
                  {value.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm group-hover/value:text-primary transition-colors duration-300">
                    {value.title}
                  </div>
                  <div className="text-gray-600 text-xs">{value.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group/cta bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 
                         hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 
                         flex items-center justify-center gap-2 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
              <span className="relative">Start Your Project</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover/cta:translate-x-1 transition-transform duration-300 relative" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/process"
              className="group/cta2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold 
                         hover:border-primary hover:text-primary hover:scale-105 hover:shadow-md
                         transition-all duration-300 flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover/cta2:scale-110 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span>Our Process</span>
            </Link>
          </div>
        </div>

        {/* Right Image - Enhanced */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 relative group">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-500 animate-pulse"></div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <img
              src={about_pic}
              alt="HABLTECH Team - Professional Software Development Company"
              className="relative w-full max-w-[500px] lg:max-w-[600px] object-contain group-hover:scale-105 transition-transform duration-500 rounded-2xl shadow-2xl"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl blur-lg group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-2xl blur-lg group-hover:scale-110 transition-transform duration-500 delay-200"></div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🏆 Since 1999
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="mt-16 bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "98%", label: "Client Satisfaction Rate", icon: "😊" },
            { number: "99.9%", label: "On-Time Delivery", icon: "⏱️" },
            { number: "24/7", label: "Dedicated Support", icon: "🛠️" },
            { number: "150+", label: "Expert Team Members", icon: "👥" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-12 text-center max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-2xl border border-primary/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            To empower businesses worldwide with innovative, scalable, and reliable technology solutions 
            that drive growth, enhance efficiency, and create lasting competitive advantages through 
            cutting-edge software development and strategic digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;