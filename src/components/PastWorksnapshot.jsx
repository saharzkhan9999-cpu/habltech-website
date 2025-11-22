import React from "react";

const PastWorkSnapshot = () => {
  const projects = [
    { 
      title: "LIBREBOOKING", 
      desc: "Resource Scheduling & Reservation Platform",
      industry: "SAAS / ENTERPRISE OPS",
      tech: ["C# (.NET Core)", "ReactJS", "SQL Server", "Python"],
      results: ["60% fewer conflicts", "Real-time dashboards", "4.5 user score"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "OALAN", 
      desc: "Digital Banking & Payment App",
      industry: "FINTECH / BANKING", 
      tech: ["Flutter", "Node.js", "PostgreSQL", "AWS"],
      results: ["50K+ transactions/month", "99.9% uptime", "4.8 user score"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: "CAREA", 
      desc: "Car Rental & Vehicle Management App",
      industry: "MOBILITY / TRANSPORTATION",
      tech: ["Flutter", "Firebase", "Node.js", "MySQL"],
      results: ["35% faster bookings", "24/7 synchronization", "4.2 user score"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    { 
      title: "SPRINTREPORT", 
      desc: "Agile Performance & Analytics Platform",
      industry: "SOFTWARE / DEVOPS",
      tech: ["ReactJS (Next.js)", "Node.js (NestJS)", "PostgreSQL", "AWS"],
      results: ["40% faster reviews", "70% less reporting", "4.7 user score"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      title: "BIZCORE", 
      desc: "Enterprise Management Dashboard",
      industry: "SALES / CRM",
      tech: ["PHP (Laravel)", "Vue.js", "MySQL", "Docker"],
      results: ["Unified 5+ departments", "70% faster reporting", "4.5 user score"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      title: "LEADVIEW", 
      desc: "CRM Analytics Dashboard",
      industry: "SALES / CRM",
      tech: ["PHP (Laravel)", "TypeScript", "PostgreSQL", "Chart.js"],
      results: ["50% better visibility", "Improved accuracy", "4.5 user score"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
  ];

  return (
    <section className="w-full px-6 sm:px-10  lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Our Portfolio
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Past Work <span className="text-primary">Snapshot</span>
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Delivering innovative solutions across industries with measurable results and exceptional user experiences
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white/60 backdrop-blur-md rounded-2xl p-6
                         border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                         hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:translate-y-[-4px]
                         transition-all duration-500"
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <div className="text-primary">
                    {project.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mt-2">
                    {project.industry}
                  </div>
                </div>
              </div>

              {/* Tech Stack - Fixed text color */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-gray-800 rounded text-xs border border-primary/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Results */}
              <div className="mt-auto pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results</h4>
                <ul className="space-y-1">
                  {project.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-gray-600 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can apply our proven expertise to deliver outstanding results for your next project.
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
              href="/portfolio"
              className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                         hover:bg-gray-50 hover:scale-105 transition-all duration-300
                         border border-gray-200 shadow-sm"
            >
              <span>View Case Studies</span>
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

          {/* Portfolio Metrics */}
          
          </div>
        
      </div>
    </section>
  );
};

export default PastWorkSnapshot;