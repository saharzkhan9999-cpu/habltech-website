import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Auto-update year
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const services = [
    "Website Development",
    "Custom Software Development",
    "AI Development",
    "ERP Development",
    "Game Development",
    "Mobile Apps",
    "SaaS",
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
     { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Process", path: "/process" },
    { name: "Contact Us", path: "/contact" },
    
   
  ];

  const socialLinks = [
    {
      name: "Upwork",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.406 0-2.545-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.068.679 2.296 1.082 3.686 1.082 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
        </svg>
      ),
      url: "https://www.upwork.com/agencies/1986173047775260102/"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: "https://www.linkedin.com/company/habltech/"
    }
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info - 4 columns */}
          <div className="lg:col-span-4">
            <Link to="/" className="text-primary font-extrabold text-2xl tracking-tight mb-4 inline-block">
              HABL<span className="text-secondary">TECH</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              The industry experts of the Digital World. Delivering innovative solutions 
              that drive business growth and digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@habltech.com" className="text-sm hover:text-primary transition-colors duration-300">
                  info@habltech.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+922137120787" className="text-sm hover:text-primary transition-colors duration-300">
                  (021) 37120787
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm leading-relaxed">
                 230/2, 34th Street, Khayaban-e-Roomi,
                  D.H.A. Phase 8 Defence Housing Authority, Karachi, 75500
                </span>
              </div>
            </div>
          </div>

          {/* Services - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-gray-600 hover:text-primary text-sm transition-colors duration-300 block py-1">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-600 hover:text-primary text-sm transition-colors duration-300 block py-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Get the latest updates on our services and industry insights.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-gray-900 font-semibold text-sm mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-8 h-8 bg-gray-100 hover:bg-primary rounded flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center lg:text-left">
              © {currentYear} HABLTech. All rights reserved. 
              <span className="mx-2">•</span>
              <Link to="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of use
              </Link>
              <span className="mx-2">•</span>
              <Link to="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy policy
              </Link>
              <span className="mx-2">•</span>
              <Link to="/faq" className="hover:text-primary transition-colors duration-300">
                Faq
              </Link>
            </div>
            
            <div className="text-gray-500 text-sm">
              Powered by <span className="text-primary font-medium">HABL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;