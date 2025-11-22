import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Car, Zap, CheckCircle, BarChart3, MapPin, Clock, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Carrental } from "../../assets/app";



const CareaCaseStudy = () => {
  const project = {
    id: "carea",
    title: "CAREA",
    description: "Car Rental & Vehicle Management App",
    category: "mobility",
    industry: "MOBILITY / TRANSPORTATION",
    heroImage: Carrental,
    
    // Executive Summary
    executiveSummary: {
      client: "Vehicle Rental Service Provider",
      challenge: "Legacy system causing booking delays, poor vehicle tracking, and synchronization issues across locations",
      solution: "Cross-platform mobile app with real-time booking and fleet management",
      results: [
        "35% faster booking process",
        "24/7 real-time synchronization",
        "4.2/5 user satisfaction score",
        "Streamlined fleet management"
      ]
    },

    // Problem Section
    problem: {
      title: "The Challenge: Inefficient Vehicle Rental Management",
      description: "CAREA was struggling with outdated systems that caused operational inefficiencies, booking conflicts, and poor customer experience in their vehicle rental operations.",
      painPoints: [
        {
          icon: "⏱️",
          title: "Slow Bookings",
          description: "Lengthy reservation process causing customer frustration"
        },
        {
          icon: "🔄",
          title: "Poor Synchronization",
          description: "Inconsistent data across multiple rental locations"
        },
        {
          icon: "📱",
          title: "Outdated Interface",
          description: "Non-intuitive user experience leading to low adoption"
        },
        {
          icon: "🚗",
          title: "Fleet Management",
          description: "Inefficient vehicle tracking and maintenance scheduling"
        }
      ],
      quote: {
        text: "Our legacy system was holding us back from providing the seamless rental experience our customers expected. We needed a modern solution that could grow with our business.",
        author: "CAREA Operations Manager"
      }
    },

    // Solution Section
    solution: {
      title: "Our Solution: Modern Rental Platform",
      overview: "We developed CAREA as a comprehensive vehicle rental solution using Flutter for cross-platform compatibility, Firebase for real-time data, and Node.js for robust backend operations.",
      whyThisStack: [
        "Flutter for consistent iOS and Android experience",
        "Firebase for real-time database and push notifications",
        "Node.js for scalable booking and payment APIs",
        "Cloud storage for vehicle images and documents"
      ],
      keyFeatures: [
        {
          title: "Real-Time Booking",
          description: "Instant reservation updates and availability checks",
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: "Vehicle Management",
          description: "Complete fleet tracking and maintenance scheduling",
          icon: <Car className="w-6 h-6" />
        },
        {
          title: "Multi-Location Sync",
          description: "Seamless data synchronization across all branches",
          icon: <MapPin className="w-6 h-6" />
        },
        {
          title: "Smart Notifications",
          description: "Automated alerts for bookings, returns, and maintenance",
          icon: <Clock className="w-6 h-6" />
        }
      ]
    },

    // Implementation
    implementation: {
      title: "Development & Deployment Process",
      timeline: "10 Weeks",
      phases: [
        {
          phase: "Discovery & Planning",
          duration: "2 Weeks",
          activities: [
            "Business process analysis",
            "User journey mapping",
            "Technical architecture design",
            "API specification"
          ]
        },
        {
          phase: "UI/UX & Development",
          duration: "5 Weeks",
          activities: [
            "Flutter mobile app development",
            "Firebase real-time database setup",
            "Node.js backend API development",
            "Payment gateway integration"
          ]
        },
        {
          phase: "Testing & Integration",
          duration: "2 Weeks",
          activities: [
            "Multi-location synchronization testing",
            "Payment processing validation",
            "User acceptance testing",
            "Performance optimization"
          ]
        },
        {
          phase: "Launch & Support",
          duration: "1 Week",
          activities: [
            "App store deployment",
            "Staff training sessions",
            "Live monitoring setup",
            "Post-launch support"
          ]
        }
      ]
    },

    // Technical Details
    technical: {
      architecture: "Client-server architecture with real-time sync",
      frontend: "Flutter with Dart for cross-platform mobile",
      backend: "Node.js with Express.js framework",
      database: "Firebase Firestore with real-time listeners",
      integrations: ["Payment Gateways", "Google Maps", "Push Notifications", "Cloud Storage"],
      hosting: "Google Cloud Platform with Firebase services"
    },

    // Results
    results: {
      title: "Performance & Business Impact",
      metrics: [
        {
          value: "35%",
          label: "Faster Bookings",
          description: "Reduced booking time compared to legacy system"
        },
        {
          value: "24/7",
          label: "Synchronization",
          description: "Real-time data sync across all platforms"
        },
        {
          value: "4.2/5",
          label: "User Rating",
          description: "High customer satisfaction scores"
        },
        {
          value: "100%",
          label: "Uptime",
          description: "Reliable service with no major outages"
        }
      ],
      benefits: [
        {
          category: "Operational Efficiency",
          items: [
            "60% reduction in manual data entry",
            "Automated maintenance scheduling",
            "Real-time vehicle availability tracking",
            "Streamlined payment processing"
          ]
        },
        {
          category: "Customer Experience",
          items: [
            "Simplified booking process",
            "Instant confirmation notifications",
            "Mobile-first responsive design",
            "24/7 self-service capabilities"
          ]
        },
        {
          category: "Business Growth",
          items: [
            "25% increase in online bookings",
            "40% reduction in booking errors",
            "Multi-location expansion capability",
            "Improved customer retention rate"
          ]
        }
      ]
    },

    // Technology Stack
    technologies: [
      { category: "Frontend", stack: ["Flutter", "Dart", "Material Design", "Provider"] },
      { category: "Backend", stack: ["Node.js", "Express.js", "REST APIs", "WebSocket"] },
      { category: "Database", stack: ["Firebase Firestore", "Real-time Sync", "Cloud Storage"] },
      { category: "Services", stack: ["Google Maps API", "Push Notifications", "Payment API"] }
    ],

    // Project Team
    team: {
      size: "4 Developers + 1 Designer",
      duration: "10 Weeks",
      methodology: "Agile with 2-week sprint cycles"
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 md:py-24 bg-gradient-to-br from-white via-white/50 to-gray-50 mt-[60px] sm:mt-[70px] lg:mt-20 overflow-hidden relative">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-primary transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link to="/portfolio" className="hover:text-primary transition-colors duration-300">Portfolio</Link>
            <span>/</span>
            <span className="text-primary font-medium">Case Study</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit">
                <Car className="w-4 h-4" />
                Case Study
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                {project.title}
              </h1>
              
              <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
                {project.description}
              </p>

              <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mt-4">
                {project.industry}
              </div>

              {/* Executive Summary */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 mt-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Overview</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Client</div>
                    <div className="font-medium text-gray-900">{project.executiveSummary.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="font-medium text-gray-900">{project.implementation.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Team</div>
                    <div className="font-medium text-gray-900">{project.team.size}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Platform</div>
                    <div className="font-medium text-gray-900">iOS & Android</div>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Outcomes</h4>
                <div className="space-y-2">
                  {project.executiveSummary.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/15 transition-all duration-500"></div>
              <img
                src={project.heroImage}
                alt={`${project.title} Car Rental App`}
                className="relative w-full max-w-[600px] object-contain group-hover:scale-105 transition-transform duration-500 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {project.problem.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {project.problem.description}
              </p>
              
              {/* Pain Points */}
              <div className="grid sm:grid-cols-2 gap-4">
                {project.problem.painPoints.map((point, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
                    <div className="text-2xl mb-2">{point.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{point.title}</h4>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Client Quote */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
              <div className="text-6xl font-bold text-primary mb-4">"</div>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                {project.problem.quote.text}
              </blockquote>
              <div className="text-gray-600 font-medium">
                — {project.problem.quote.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {project.solution.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {project.solution.overview}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Why This Stack */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Strategy</h3>
              <div className="space-y-4">
                {project.solution.whyThisStack.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Features</h3>
              <div className="grid gap-4">
                {project.solution.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            {project.implementation.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.implementation.phases.map((phase, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 
                           shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)]
                           hover:translate-y-[-4px] transition-all duration-500 cursor-pointer
                           hover:border-primary/20"
              >
                  
                  {/* Phase Number */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/90 rounded-full 
                                flex items-center justify-center mb-4 shadow-lg shadow-primary/25">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  {/* Phase Info */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {phase.phase}
                  </h3>
                  <div className="text-primary font-medium text-sm mb-4">
                    {phase.duration}
                  </div>
                  
                  {/* Activities */}
                  <ul className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {project.results.title}
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {project.results.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-6 text-center border border-white/40 
                           shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)]
                           hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold text-gray-900 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            {project.results.benefits.map((benefit, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.category}</h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Technology Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.technologies.map((techCategory, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">{techCategory.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {techCategory.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-gray-800 rounded text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Mobility Business?
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can create efficient, scalable, and user-friendly mobility solutions for your business.
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
              
              <Link
                to="/portfolio"
                className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                           hover:bg-gray-50 hover:scale-105 transition-all duration-300
                           border border-gray-200 shadow-sm"
              >
                <span>View More Projects</span>
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CareaCaseStudy;