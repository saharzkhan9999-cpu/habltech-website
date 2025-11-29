import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewsletter, setShowNewsletter] = useState(false);

  const blogCategories = [
    { id: "all", name: "All Articles", count: 6 },
    { id: "development", name: "Development", count: 3 },
    { id: "technology", name: "Technology", count: 1 },
    { id: "business", name: "Business", count: 1 },
    { id: "design", name: "UI/UX Design", count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Enterprise Software Development in 2024",
      excerpt: "Exploring the latest trends and technologies shaping the future of enterprise software development and digital transformation.",
      category: "development",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: {
        name: "Sarah Chen",
        role: "Lead Developer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      tags: ["Enterprise", "Software", "Trends", "2024"]
    },
    {
      id: 2,
      title: "AI Integration: Transforming Business Applications",
      excerpt: "How artificial intelligence is revolutionizing business applications and creating new opportunities for innovation.",
      category: "technology",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: {
        name: "Michael Rodriguez",
        role: "AI Specialist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      tags: ["AI", "Machine Learning", "Automation"]
    },
    {
      id: 3,
      title: "Building Scalable Cloud Architecture for Startups",
      excerpt: "Essential strategies for building scalable and cost-effective cloud infrastructure that grows with your business.",
      category: "development",
      date: "March 8, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      author: {
        name: "Emily Watson",
        role: "Cloud Architect",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      tags: ["Cloud", "AWS", "Scalability", "Startups"]
    },
    {
      id: 4,
      title: "The Psychology Behind Effective UI/UX Design",
      excerpt: "Understanding user psychology to create intuitive and engaging digital experiences that drive conversion.",
      category: "design",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      author: {
        name: "David Kim",
        role: "UX Designer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      tags: ["UI/UX", "Psychology", "Design", "User Experience"]
    },
    {
      id: 5,
      title: "Digital Transformation: A Strategic Approach for Enterprises",
      excerpt: "How enterprises can successfully navigate digital transformation while maintaining operational excellence.",
      category: "business",
      date: "March 1, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      author: {
        name: "Lisa Thompson",
        role: "Business Strategist",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      tags: ["Digital Transformation", "Strategy", "Enterprise"]
    },
    {
      id: 6,
      title: "Mobile-First Development: Best Practices for 2024",
      excerpt: "Essential strategies and tools for building high-performance mobile applications that users love.",
      category: "development",
      date: "February 26, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: {
        name: "Alex Johnson",
        role: "Mobile Developer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      tags: ["Mobile", "React Native", "Flutter", "Best Practices"]
    }
  ];

  const featuredPost = blogPosts[0];
  
  // Filter posts based on category and search term
  const filteredPosts = blogPosts
    .filter(post => 
      (activeCategory === "all" || post.category === activeCategory) &&
      (searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    )
    .filter(post => post.id !== featuredPost.id); // Exclude featured post from grid

  const allPosts = activeCategory === "all" && searchTerm === "" ? blogPosts.slice(1) : filteredPosts;

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
          {/* Enhanced Heading Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Insights & Updates
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              HABLTech <span className="text-primary">Blog</span>
            </h1>

            <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Expert insights, industry trends, and thought leadership on software development, 
              digital transformation, and technology innovation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.05)]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 border flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25 border-primary"
                    : "bg-white/60 text-gray-700 hover:bg-white/80 hover:text-primary border-gray-200"
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id 
                    ? "bg-white/20 text-white" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          {(searchTerm || activeCategory !== "all") && (
            <div className="text-center mb-8">
              <p className="text-gray-600 text-sm">
                Found {allPosts.length} article{allPosts.length !== 1 ? 's' : ''} 
                {searchTerm && ` for "${searchTerm}"`}
                {activeCategory !== "all" && ` in ${blogCategories.find(cat => cat.id === activeCategory)?.name}`}
              </p>
            </div>
          )}

          {/* Featured Post - Only show when no filters are active */}
          {activeCategory === "all" && searchTerm === "" && (
            <div className="mb-16">
              <div className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl 
                           shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)]
                           hover:translate-y-[-4px] transition-all duration-500 overflow-hidden
                           hover:border-primary/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full min-h-[400px]">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-3">
                        Featured Article
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {featuredPost.category.charAt(0).toUpperCase() + featuredPost.category.slice(1)}
                      </span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={featuredPost.author.avatar} 
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{featuredPost.author.name}</div>
                          <div className="text-gray-500 text-xs">{featuredPost.author.role}</div>
                        </div>
                      </div>
                      
                      <button className="group/btn inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
                        Read Full Article
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allPosts.map((post) => (
              <article 
                key={post.id}
                className="group flex flex-col bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl 
                         shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)]
                         hover:translate-y-[-4px] transition-all duration-500 overflow-hidden
                         hover:border-primary/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 text-lg mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
                    <div className="flex items-center gap-2">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-gray-700 text-sm font-medium">{post.author.name}</span>
                    </div>
                    
                    <button className="group/btn inline-flex items-center gap-1 text-primary text-sm font-semibold hover:text-primary/80 transition-colors duration-300">
                      Read
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Posts State */}
          {allPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {searchTerm 
                  ? `We couldn't find any articles matching "${searchTerm}". Try different keywords or browse all categories.`
                  : "We couldn't find any articles in the selected category. Please check back later for new content."
                }
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  {searchTerm ? "Clear Search" : "View All Articles"}
                </button>
                <button
                  onClick={() => setShowNewsletter(true)}
                  className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300 border border-gray-200"
                >
                  Get Notified
                </button>
              </div>
            </div>
          )}

          {/* Load More Button */}
          {allPosts.length > 0 && allPosts.length % 6 === 0 && (
            <div className="text-center mb-16">
              <button className="group/btn inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold 
                           hover:bg-gray-50 hover:scale-105 transition-all duration-300
                           border border-gray-200 shadow-sm">
                <span>Load More Articles</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 transform group-hover/btn:translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-white/80 rounded-2xl p-8 md:p-12 text-center border border-white/40 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Insights
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Join 5,000+ professionals who receive our exclusive articles on software development, 
                technology trends, and business innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/80 backdrop-blur-md border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-sm"
                />
                <button className="group/btn inline-flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-xl font-semibold 
                           hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 whitespace-nowrap text-sm">
                  <span>Subscribe</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm font-medium mb-8">FEATURED IN</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-sm text-gray-600">
              {["TechCrunch", "Forbes Tech", "Tech Republic", "The Verge", "Wired"].map((publication, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-xs sm:text-sm group-hover:text-primary transition-colors duration-300">{publication}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;