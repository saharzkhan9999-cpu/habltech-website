import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Enhanced scroll effect with better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/process", label: "Process" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const handleNavigation = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-primary font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
          onClick={handleNavigation}
        >
          HABL<span className="text-secondary">TECH</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          <ul className="flex gap-4 xl:gap-6 items-center text-[15px] xl:text-[16px] font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative py-2 px-1 transition-all duration-300 group ${
                    isActiveLink(item.path)
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  onClick={handleNavigation}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActiveLink(item.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                  {/* Hover effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <div className="ml-4 xl:ml-6">
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 
                         hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 text-nowrap text-sm xl:text-base"
              onClick={handleNavigation}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none transition-all duration-300 hover:scale-110 hover:text-primary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-t border-gray-100 shadow-2xl transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="flex flex-col space-y-1 text-[16px] font-medium">
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
            <li className="pt-3 mt-2 border-t border-gray-100">
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
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;