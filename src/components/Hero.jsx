import React from "react";
import { heroImg } from "../assets/app";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    {
      title: "US Timezone Alignment",
      description: "Work with teams that operate fully within US business hours for real-time collaboration.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Cultural Alignment",
      description: "Teams fluent in American business culture, communication styles, and work ethics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Proven US Market Experience",
      description: "25+ years serving American businesses across 36 states with 1800+ successful projects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Cost Efficiency",
      description: "Get Silicon Valley-level talent at 60% lower cost without compromising quality or communication.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const stats = [
    { number: "1800+", label: "US Projects Delivered" },
    { number: "25+", label: "Years Serving US Clients" },
    { number: "810+", label: "American Businesses Served" },
    { number: "36", label: "US States Covered" }
  ];

  const usBenefits = [
    {
      icon: "🏢",
      title: "US Business Hours",
      description: "Full overlap with EST, CST, PST time zones"
    },
    {
      icon: "💬",
      title: "Native English Speakers",
      description: "Fluent communication with your team"
    },
    {
      icon: "🔒",
      title: "US Data Compliance",
      description: "GDPR, CCPA, and industry-specific compliance"
    },
    {
      icon: "⚡",
      title: "Rapid Scaling",
      description: "Scale teams up/down within 2 weeks"
    }
  ];

  return (
    <section className="w-full mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Enhanced Hero Section with Fixed Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 relative">
        
        {/* Background Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 blur-[80px] rounded-full -z-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[120px] rounded-full -z-10"></div>

        {/* Left Content - Fixed Width */}
        <div className="flex flex-col lg:w-1/2 text-center lg:text-left">
          {/* US-Focused Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto lg:mx-0 w-fit border border-primary/20 hover:bg-primary/15 transition-all duration-300 group/trust">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover/trust:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Trusted by 810+ US Companies
          </div>

          {/* US-Focused Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Your US-Aligned{' '}
            <span className="text-primary relative inline-block">
              Engineering Team
              <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -z-10 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
            <br />
            That Works Like In-House
          </h1>

          {/* US-Focused Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl mt-6 text-gray-600 leading-relaxed">
            Get Silicon Valley-caliber engineering talent working in your timezone at{' '}
            <span className="font-semibold text-gray-800 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-2 py-1 rounded-lg">
              60% lower cost with zero communication overhead.
            </span>
          </p>

          {/* US Benefits Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {usBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left group/benefit">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover/benefit:scale-110 group-hover/benefit:bg-primary/20 transition-all duration-300 text-base sm:text-lg">
                  {benefit.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm group-hover/benefit:text-primary transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </div>
                  <div className="text-gray-600 text-xs leading-tight mt-1">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Stats Bar */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center lg:justify-start">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group/stat">
                <div className="text-xl sm:text-2xl font-bold text-primary group-hover/stat:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium max-w-[80px] sm:max-w-[100px] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group/cta bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-primary/90 
                         hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 
                         flex items-center justify-center gap-2 text-center relative overflow-hidden text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
              <span className="relative">Get US-Aligned Team</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover/cta:translate-x-1 transition-transform duration-300 relative" 
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
              rel="noopener noreferrer"
              className="group/cta2 border-2 border-gray-300 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold 
                         hover:border-primary hover:text-primary hover:scale-105 hover:shadow-md
                         transition-all duration-300 flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 sm:h-5 sm:w-5 group-hover/cta2:scale-110 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Schedule US Call</span>
            </Link>
          </div>
        </div>

        {/* Fixed Right Image Container */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 relative group mt-8 lg:mt-0">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-500 animate-pulse"></div>
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <img
              src={heroImg}
              alt="HABLTECH US-Aligned Engineering Team"
              className="relative w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 rounded-2xl shadow-2xl"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl blur-lg group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-secondary/10 rounded-2xl blur-lg group-hover:scale-110 transition-transform duration-500 delay-200"></div>
            
            {/* US Timezone Badge */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              🕐 US Timezone Aligned
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Who We Are + What We Do Section */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-12 mt-12 sm:mt-16 lg:mt-20 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Enhanced Who We Are */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              WHY CHOOSE US FOR US MARKET
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Built for American Businesses
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              We're not just another offshore provider. We're your US-aligned engineering partner that understands 
              American business culture, operates in your timezone, and delivers with Silicon Valley standards.
            </p>
            
            {/* Enhanced Info List */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { text: "Senior engineers fluent in US business culture", icon: "🇺🇸" },
                { text: "Full EST/CST/PST timezone coverage", icon: "🕐" },
                { text: "Native English communication", icon: "💬" },
                { text: "US data security & compliance expertise", icon: "🔒" },
                { text: "Proven track record with US companies", icon: "📊" },
                { text: "60% cost savings vs US agencies", icon: "💰" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 text-gray-700 group p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 text-base sm:text-lg">
                    {item.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300 font-medium text-sm sm:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced What We Do */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              OUR US ADVANTAGE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Why US Companies Choose Us
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent hover:border-primary/10 hover:scale-105"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center rounded-xl group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 flex-shrink-0 shadow-sm">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cost Comparison */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-4 sm:p-6 border border-primary/10">
              <h4 className="font-bold text-gray-900 mb-3 text-center text-sm sm:text-base">Cost Comparison</h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">$60-80/hr</div>
                  <div className="text-xs sm:text-sm text-gray-600">Our Senior Engineers</div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400 line-through">$150-200/hr</div>
                  <div className="text-xs sm:text-sm text-gray-600">US Agency Rates</div>
                </div>
              </div>
              <div className="text-center mt-2 sm:mt-3 text-xs sm:text-sm text-primary font-semibold">
                Save 60%+ with same quality & better communication
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Trust Section */}
      <div className="text-center mt-12 sm:mt-16">
        <p className="text-gray-500 text-sm font-medium mb-6 sm:mb-8 uppercase tracking-wider">Trusted by US Companies Coast to Coast</p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {[
            { name: "Silicon Valley Startups", logo: "💻", type: "Tech" },
            { name: "NYC Finance", logo: "💳", type: "Finance" },
            { name: "Texas Energy", logo: "⚡", type: "Energy" },
            { name: "Chicago Healthcare", logo: "🏥", type: "Healthcare" },
            { name: "LA Media", logo: "🎬", type: "Media" }
          ].map((company, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl flex items-center justify-center text-xl sm:text-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:scale-110 transition-all duration-300">
                {company.logo}
              </div>
              <div className="text-center">
                <span className="text-xs text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300 block">
                  {company.name}
                </span>
                <span className="text-xs text-gray-400">{company.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-4 sm:p-6 border border-white/40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: "98%", label: "US Client Retention" },
            { number: "4-8h", label: "Response Time" },
            { number: "2w", label: "Team Ramp-up" },
            { number: "60%", label: "Cost Savings" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* US Timezone Coverage */}
      <div className="mt-8 sm:mt-12 bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/40 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Full US Timezone Coverage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {[
            { zone: "EST", hours: "9 AM - 6 PM", cities: "NYC, Boston, Miami" },
            { zone: "CST", hours: "8 AM - 5 PM", cities: "Chicago, Dallas, Houston" },
            { zone: "PST", hours: "6 AM - 3 PM", cities: "SF, Seattle, LA" }
          ].map((tz, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-xl p-3 sm:p-4 border border-blue-100">
              <div className="text-base sm:text-lg font-bold text-primary">{tz.zone}</div>
              <div className="text-sm text-gray-600">{tz.hours}</div>
              <div className="text-xs text-gray-500 mt-1">{tz.cities}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;