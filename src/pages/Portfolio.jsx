import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import portfolioPDF from "../assets/pdf/portfolio-compressed.pdf";
const projects = [
  {
    title: "LIBREBOOKING",
    desc: "Resource Scheduling & Reservation Platform",
    category: "saas",
    industry: "SAAS / ENTERPRISE OPS",
    technologies: ["C# (.NET Core)", "ReactJS", "SQL Server", "Python"],
    features: ["Multi-tenant architecture", "Role-based access control", "Real-time conflict detection"],
    results: ["60% fewer conflicts", "Real-time dashboards", "4.5 user score"],
    caseStudy: "/case-study/librebooking",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "OALAN",
    desc: "Digital Banking & Payment App",
    category: "fintech",
    industry: "FINTECH / BANKING", 
    technologies: ["Flutter", "Node.js", "PostgreSQL", "AWS"],
    features: ["AES-256 encryption", "JWT authentication", "2FA via Twilio"],
    results: ["50K+ transactions/month", "99.9% uptime", "4.8 user score"],
    caseStudy: "/case-study/oalan",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "CAREA",
    desc: "Car Rental & Vehicle Management App",
    category: "mobility",
    industry: "MOBILITY / TRANSPORTATION",
    technologies: ["Flutter", "Firebase", "Node.js", "MySQL"],
    features: ["Real-time car availability", "Stripe payment integration", "Push notifications"],
    results: ["35% faster bookings", "24/7 synchronization", "4.2 user score"],
    caseStudy: "/case-study/carea",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  {
    title: "SPRINTREPORT",
    desc: "Agile Performance & Analytics Platform",
    category: "devops",
    industry: "SOFTWARE / DEVOPS",
    technologies: ["ReactJS (Next.js)", "Node.js (NestJS)", "PostgreSQL", "AWS"],
    features: ["WebSocket real-time updates", "Jira & GitHub integration", "Micro-frontend architecture"],
    results: ["40% faster reviews", "70% less reporting", "4.7 user score"],
    caseStudy: "/case-study/sprintreport",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "BIZCORE",
    desc: "Enterprise Management Dashboard",
    category: "crm",
    industry: "SALES / CRM",
    technologies: ["PHP (Laravel)", "Vue.js", "MySQL", "Docker"],
    features: ["Role-based dashboards", "Redis caching", "Modular MVC architecture"],
    results: ["Unified 5+ departments", "70% faster reporting", "4.5 user score"],
    caseStudy: "/case-study/bizcore",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "LEADVIEW",
    desc: "CRM Analytics Dashboard",
    category: "crm",
    industry: "SALES / CRM",
    technologies: ["PHP (Laravel)", "TypeScript", "PostgreSQL", "Chart.js"],
    features: ["Chart.js visualization", "RESTful APIs", "Modular MVC"],
    results: ["50% better visibility", "Improved accuracy", "4.5 user score"],
    caseStudy: "/case-study/leadview",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  // New Projects
  {
    title: "MEDICARE HUB",
    desc: "Healthcare Management & Telemedicine Platform",
    category: "healthcare",
    industry: "HEALTHCARE / TELEMEDICINE",
    technologies: ["React Native", "Node.js", "MongoDB", "WebRTC"],
    features: ["Video consultations", "E-prescriptions", "Patient records management"],
    results: ["45% faster appointments", "95% patient satisfaction", "4.6 user score"],
    caseStudy: "/case-study/medicare-hub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "SHOPNEX",
    desc: "AI-Powered E-commerce Platform",
    category: "ecommerce",
    industry: "RETAIL / E-COMMERCE",
    technologies: ["Next.js", "Stripe", "Sanity CMS", "TensorFlow.js"],
    features: ["AI recommendations", "Multi-vendor marketplace", "Real-time inventory"],
    results: ["30% higher conversion", "2x faster load times", "4.8 user score"],
    caseStudy: "/case-study/shopnex",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    title: "EDUTECH PRO",
    desc: "Learning Management & Virtual Classroom",
    category: "edtech",
    industry: "EDUCATION / E-LEARNING",
    technologies: ["Vue.js", "Python (Django)", "PostgreSQL", "WebSocket"],
    features: ["Interactive whiteboard", "Assignment tracking", "Progress analytics"],
    results: ["60% engagement increase", "40K+ active users", "4.7 user score"],
    caseStudy: "/case-study/edutech-pro",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    title: "LOGISTICA AI",
    desc: "Supply Chain & Logistics Optimization",
    category: "logistics",
    industry: "LOGISTICS / SUPPLY CHAIN",
    technologies: ["React", "Python (Flask)", "Redis", "AWS Lambda"],
    features: ["Route optimization", "Inventory forecasting", "Real-time tracking"],
    results: ["25% cost reduction", "99.5% delivery accuracy", "4.6 user score"],
    caseStudy: "/case-study/logistica-ai",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "saas", name: "SaaS" },
    { id: "fintech", name: "FinTech" },
    { id: "mobility", name: "Mobility" },
    { id: "devops", name: "DevOps" },
    { id: "crm", name: "CRM" },
    { id: "healthcare", name: "Healthcare" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "edtech", name: "EdTech" },
    { id: "logistics", name: "Logistics" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Navbar />
      <section className="w-full px-6 sm:px-10 mb-2 lg:px-16 py-8 lg:py-12 bg-gradient-to-br from-white via-white/50 to-gray-50 mt-16 overflow-hidden relative max-w-7xl mx-auto">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Our Work
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Showcasing innovative solutions across industries with measurable results and exceptional user experiences
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 border ${
                  activeFilter === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25 border-primary"
                    : "bg-white/60 text-gray-700 hover:bg-white/80 hover:text-primary border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Enhanced Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 
                           shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)]
                           hover:translate-y-[-4px] transition-all duration-500 cursor-pointer
                           hover:border-primary/20"
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

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-gray-800 rounded text-xs border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.technologies.length - 3} more
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

                {/* View Project Link */}
                <div className="mt-4 text-center">
                  <Link
                    to={project.caseStudy}
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300"
                  >
                    View Case Study
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Show message when no projects match filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">No projects match the selected category. Try another filter.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Enhanced CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can apply our proven expertise to deliver outstanding results for your next project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
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
                </Link>
                
                <a
                              href={portfolioPDF}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                                         hover:bg-gray-50 hover:scale-105 transition-all duration-300
                                         border border-gray-200 shadow-sm"
                            >
                  <span>View All Projects</span>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;