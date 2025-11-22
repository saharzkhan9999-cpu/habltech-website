// pages/Packages.jsx
import React from "react";

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      features: [
        "Basic Website Development",
        "5 Pages",
        "Responsive Design",
        "Contact Form",
        "Basic SEO"
      ]
    },
    {
      name: "Business",
      price: "$5,000",
      features: [
        "Custom Web Application",
        "Up to 15 Pages",
        "Database Integration",
        "Admin Panel",
        "Advanced SEO"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Full-stack Development",
        "Unlimited Pages",
        "API Integration",
        "E-commerce Features",
        "24/7 Support"
      ]
    }
  ];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 mt-[70px] sm:mt-[80px] lg:mt-24 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 blur-[80px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Packages
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose the perfect package for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:translate-y-[-8px] transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
              <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Need a custom solution? We'll tailor a package just for you.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Request Custom Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;