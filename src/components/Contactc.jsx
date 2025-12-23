import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    budget: '',
    custom_budget: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showCustomBudget, setShowCustomBudget] = useState(false);

  // EmailJS configuration - Replace these with your actual values
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'your_service_id',
    TEMPLATE_ID: 'your_template_id', 
    PUBLIC_KEY: 'your_public_key'
  };

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      detail: "info@habltech.com",
      link: "mailto:info@habltech.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      detail: "+92 (21) 37120787",
      link: "tel:+922137120787"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      detail: "230/2, 34th Street, Khayaban-e-Roomi, D.H.A. Phase 8 Defence Housing Authority, Karachi, 75500",
      link: "https://maps.app.goo.gl/5AsquDLdAvjVmuiSA"
    }
  ];

  const faqItems = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most web applications take 8-16 weeks from discovery to launch."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We love working with startups and offer flexible engagement models to fit early-stage budgets."
    },
    {
      question: "What's your development process?",
      answer: "We follow an agile methodology with weekly sprints, regular demos, and continuous client collaboration."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your project continues to perform optimally."
    }
  ];

  // Updated budget options with custom option
  const budgetOptions = [
    { value: '', label: 'Select budget range' },
    { value: '2k-5k', label: '$2k - $5k (Small project/ MVP)' },
    { value: '5k-15k', label: '$5k - $15k (Standard web app)' },
    { value: '15k-30k', label: '$15k - $30k (Advanced application)' },
    { value: '30k-50k', label: '$30k - $50k (Enterprise solution)' },
    { value: '50k-100k', label: '$50k - $100k (Complex platform)' },
    { value: '100k+', label: '$100k+ (Large-scale enterprise)' },
    { value: 'custom', label: 'Custom Budget (Tell us your budget)' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    } else if (formData.from_name.trim().length < 2) {
      newErrors.from_name = 'Name must be at least 2 characters';
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = 'Please enter a valid email address';
    }

    // Custom budget validation
    if (formData.budget === 'custom' && !formData.custom_budget.trim()) {
      newErrors.custom_budget = 'Please enter your custom budget';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'budget') {
      // Show/hide custom budget input based on selection
      setShowCustomBudget(value === 'custom');
      // Clear custom budget when switching away from custom
      if (value !== 'custom') {
        setFormData(prev => ({
          ...prev,
          budget: value,
          custom_budget: ''
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          budget: value
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if EmailJS is configured with actual values
      if (EMAILJS_CONFIG.SERVICE_ID === 'your_service_id' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id' || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key') {
        throw new Error('Email service is not configured. Please update the EMAILJS_CONFIG with your actual EmailJS credentials.');
      }

      // Prepare the budget value for email
      const finalBudget = formData.budget === 'custom' ? formData.custom_budget : formData.budget;

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          from_name: '',
          from_email: '',
          company: '',
          budget: '',
          custom_budget: '',
          message: ''
        });
        setShowCustomBudget(false);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16  py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden ">
        
        {/* Background Effects - Match your theme */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Start Your <span className='text-primary'>Project</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Get in touch with our team and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="max-w-2xl mx-auto mb-8 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-3 text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</span>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center gap-3 text-red-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Sorry, there was an error sending your message. Please try again or contact us directly.</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)] h-fit">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 lg:mb-8">Get in Touch</h2>
                
                {/* Contact Methods */}
                <div className="space-y-4 mb-6 lg:mb-8">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <div className="text-primary">
                          {method.icon}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 truncate">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 text-sm truncate">{method.detail}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Response within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Free initial consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Detailed project estimate
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-6 lg:mb-8">Tell us about your project and we'll get back to you soon.</p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        required
                        value={formData.from_name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                          errors.from_name ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                      {errors.from_name && (
                        <p className="mt-1 text-sm text-red-600">{errors.from_name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        required
                        value={formData.from_email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                          errors.from_email ? 'border-red-300' : 'border-gray-200 focus:outline-none'
                        }`}
                        placeholder="your.email@company.com"
                        disabled={isSubmitting}
                      />
                      {errors.from_email && (
                        <p className="mt-1 text-sm text-red-600">{errors.from_email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm focus:outline-none"
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm focus:outline-none"
                        disabled={isSubmitting}
                      >
                        {budgetOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>

                      {/* Custom Budget Input - Only shows when "Custom Budget" is selected */}
                      {showCustomBudget && (
                        <div className="mt-4">
                          <label htmlFor="custom_budget" className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Your Custom Budget *
                          </label>
                          <input
                            type="text"
                            id="custom_budget"
                            name="custom_budget"
                            value={formData.custom_budget}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm focus:outline-none ${
                              errors.custom_budget ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="e.g., $75,000 or Contact for quote"
                            disabled={isSubmitting}
                          />
                          {errors.custom_budget && (
                            <p className="mt-1 text-sm text-red-600">{errors.custom_budget}</p>
                          )}
                          <p className="mt-1 text-xs text-gray-500">
                            Please specify your budget range or amount (e.g., $25,000-$35,000 or $50,000)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none ${
                        errors.message ? 'border-red-300' : 'border-gray-200 focus:outline-none'
                      }`}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    We'll get back to you within 24 hours. Your information is secure and confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 lg:mt-20">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Quick answers to common questions about working with us.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;