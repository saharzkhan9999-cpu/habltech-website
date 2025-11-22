import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes and scroll to top with smooth animation
  useEffect(() => {
    setMenuOpen(false);
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/process", label: "Process" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Smooth scroll function
  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle navigation with smooth scroll
  const handleNavigation = () => {
    setMenuOpen(false);
    smoothScrollToTop();
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-10 lg:px-16 h-[70px] sm:h-20 lg:h-24">
        {/* Logo */}
        <Link
          to="/"
          className="text-primary font-extrabold text-2xl sm:text-3xl tracking-tight hover:opacity-80 transition-opacity duration-300"
          onClick={handleNavigation}
        >
          HABL<span className="text-secondary">TECH</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-3 lg:gap-8 items-center text-[16px] font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative py-2 transition-all duration-300 group ${
                  isActiveLink(item.path)
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
                onClick={handleNavigation}
              >
                {item.label}
                {/* Active indicator */}
                {isActiveLink(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
                )}
                {/* Hover effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 
                       hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 text-center"
            onClick={handleNavigation}
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-gray-800 focus:outline-none transition-all duration-300 hover:scale-110 hover:text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-4 text-[17px] font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={handleNavigation}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                  isActiveLink(item.path)
                    ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary hover:pl-6"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Mobile CTA Button */}
          <li className="pt-4 border-t border-gray-100">
            <Link
              to="/contact"
              onClick={handleNavigation}
              className="block w-full bg-primary text-white text-center py-3 px-4 rounded-lg font-medium 
                         hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] mt-[70px] transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;