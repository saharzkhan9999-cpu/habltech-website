import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import habltechBrochure1 from "../assets/pdf/habltech-brochure1.pdf"; 

const Faq = () => {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      id: "general",
      title: "General Information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        {
          question: "What industries does HABLTech specialize in?",
          answer: "We deliver enterprise-grade solutions across multiple sectors including healthcare, finance, e-commerce, education, manufacturing, and logistics. Our industry-specific expertise ensures compliance with regulatory standards and best practices."
        },
        {
          question: "How does HABLTech ensure project quality and reliability?",
          answer: "Our CMMi Level 3 certified processes, combined with rigorous quality assurance protocols including automated testing, code reviews, and continuous integration, guarantee enterprise-grade software delivery. We maintain 99.9% client satisfaction through our comprehensive quality framework."
        },
        {
          question: "What is the typical project engagement timeline?",
          answer: "Project timelines are tailored to complexity: MVP development (4-8 weeks), standard enterprise applications (12-20 weeks), and complex platforms (6-12 months). We provide detailed project roadmaps with milestone tracking during the discovery phase."
        },
        {
          question: "What post-launch support and maintenance do you provide?",
          answer: "We offer tiered support packages including 24/7 monitoring, security updates, performance optimization, and feature enhancements. Our SLAs guarantee response times from 15 minutes for critical issues to 4 hours for standard inquiries."
        }
      ]
    },
    {
      id: "process",
      title: "Development Methodology",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      items: [
        {
          question: "What development methodology does HABLTech employ?",
          answer: "We implement Agile methodology with Scrum framework, enhanced with enterprise project management practices. Our approach includes sprint planning, daily stand-ups, bi-weekly demos, and retrospective sessions to ensure continuous improvement and client alignment."
        },
        {
          question: "How is project communication and transparency maintained?",
          answer: "Each project is assigned a dedicated Project Manager serving as your single point of contact. We provide real-time progress tracking through enterprise-grade tools, weekly executive summaries, and monthly strategic review sessions with stakeholders."
        },
        {
          question: "Do you support team augmentation and existing development integration?",
          answer: "Yes, we specialize in seamless team integration, providing specialized expertise to complement your existing teams. Our developers integrate with your workflows, tools, and processes while maintaining your established development standards."
        },
        {
          question: "What enterprise project management tools are utilized?",
          answer: "We leverage industry-leading tools including Jira, Azure DevOps, and Trello Enterprise. Our team is certified in these platforms and can adapt to your preferred enterprise project management ecosystem."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Expertise",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: [
        {
          question: "What technologies comprise HABLTech's core competency?",
          answer: "Our expertise spans enterprise technologies including React, Angular, Vue.js, Node.js, Python, .NET Core, Java Spring Boot, Swift, Kotlin, Flutter, React Native, AWS, Azure, and Google Cloud Platform. We maintain certifications in these technologies to ensure enterprise-grade delivery."
        },
        {
          question: "What is your approach to cross-platform application development?",
          answer: "We deliver native and cross-platform solutions based on project requirements. For cross-platform, we leverage React Native and Flutter to create performant applications with native-like user experiences across iOS and Android platforms."
        },
        {
          question: "How does HABLTech address enterprise security requirements?",
          answer: "Security is embedded throughout our development lifecycle. We implement enterprise security protocols including end-to-end encryption, OWASP compliance, regular security audits, and adherence to GDPR, HIPAA, and SOC 2 requirements."
        },
        {
          question: "What experience do you have with third-party enterprise integrations?",
          answer: "We have extensive experience integrating with enterprise systems including SAP, Salesforce, Oracle, payment gateways, CRM platforms, and custom APIs. Our integration framework ensures secure, scalable, and maintainable connections."
        }
      ]
    },
    {
      id: "engagement",
      title: "Client Engagement",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        {
          question: "What engagement models does HABLTech offer?",
          answer: "We provide flexible engagement models: Fixed-Price for well-defined projects, Time & Materials for agile development, and Dedicated Teams for long-term partnerships. Each model includes transparent pricing and detailed scope documentation."
        },
        {
          question: "How are project costs structured and what is included?",
          answer: "Our pricing includes comprehensive project management, enterprise architecture design, development, quality assurance, deployment, and initial support. Third-party licensing, infrastructure, and specialized services are clearly outlined in our proposals."
        },
        {
          question: "Do you provide complimentary consultation and project assessment?",
          answer: "Yes, we offer comprehensive discovery sessions to understand your requirements, assess project scope, and provide detailed proposals. These consultations help establish project viability and alignment with your strategic objectives."
        },
        {
          question: "What is your approach to intellectual property and confidentiality?",
          answer: "We maintain strict IP protection protocols with comprehensive NDAs. All client intellectual property remains exclusively owned by the client, with clear ownership transfer upon project completion."
        }
      ]
    }
  ];

  // Filter FAQ items based on search and category
  const filteredFaqItems = faqCategories
    .filter(category => activeCategory === "all" || category.id === activeCategory)
    .flatMap(category => 
      category.items
        .filter(item => 
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(item => ({
          ...item,
          category: category.title,
          categoryId: category.id
        }))
    );

  return (
    <>
      <Navbar />

      {/* Hero Section - Matching Portfolio Theme */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-20 md:py-24 bg-gradient-to-br from-white via-white/50 to-gray-50 mt-[60px] sm:mt-[70px] lg:mt-20 overflow-hidden relative">
        
        {/* Background Effects - Matching Portfolio */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Heading - Matching Portfolio */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Knowledge Base
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive answers to enterprise software development inquiries. 
              Find detailed information about our methodologies, capabilities, and engagement processes.
            </p>
          </div>

          {/* Search Bar - Enhanced */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search knowledge base..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.05)]"
              />
            </div>
          </div>

          {/* Category Navigation - Matching Portfolio Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 border ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-lg shadow-primary/25 border-primary"
                  : "bg-white/60 text-gray-700 hover:bg-white/80 hover:text-primary border-gray-200"
              }`}
            >
              All Questions
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 border flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25 border-primary"
                    : "bg-white/60 text-gray-700 hover:bg-white/80 hover:text-primary border-gray-200"
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          {searchTerm && (
            <div className="text-center mb-8">
              <p className="text-gray-600 text-sm">
                Found {filteredFaqItems.length} result{filteredFaqItems.length !== 1 ? 's' : ''} for "<span className="font-semibold">{searchTerm}</span>"
              </p>
            </div>
          )}

          {/* FAQ Grid - Matching Portfolio Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {filteredFaqItems.map((item, index) => {
              const isOpen = openItems[index];
              return (
                <div
                  key={index}
                  className="group flex flex-col bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 
                           shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)]
                           hover:translate-y-[-4px] transition-all duration-500 cursor-pointer
                           hover:border-primary/20"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg leading-relaxed pr-8 group-hover:text-primary transition-colors duration-300">
                        {item.question}
                      </h3>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-200/60">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results State */}
          {filteredFaqItems.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We couldn't find any matches for "<span className="font-semibold">{searchTerm}</span>". 
                Please try different keywords or contact our team for specific inquiries.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Enhanced CTA Section - Matching Portfolio */}
          <div className="mt-20 text-center">
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
                  href={habltechBrochure1}
                  className="group/btn2 inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                           hover:bg-gray-50 hover:scale-105 transition-all duration-300
                           border border-gray-200 shadow-sm"
                >
                  <span>View Our Brochure</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transform group-hover/btn2:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

export default Faq;