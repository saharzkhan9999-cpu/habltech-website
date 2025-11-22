import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      
      <section className="w-full px-6 sm:px-10 lg:px-16 mt-[70px] sm:mt-[80px] lg:mt-24 py-20 bg-gradient-to-br from-white via-white/50 to-gray-50 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Last updated: December 1, 2024
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At HABLTECH, we are committed to protecting your privacy and ensuring the 
                security of your personal information. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you use our 
                services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you consent to the data practices 
                described in this policy. If you do not agree with the terms of this 
                policy, please do not access our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                <li>Contact us through our website forms</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage our services as a client</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed">
                When you visit our website, we may automatically collect certain information 
                about your device and browsing actions, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website and exit pages</li>
                <li>Date and time of visits</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you technical notices and updates</li>
                <li>To communicate about our services and promotions</li>
                <li>To improve our website and services</li>
                <li>To prevent fraudulent activities and enhance security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing and Disclosure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to 
                third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures 
                to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage 
                is 100% secure. While we strive to use commercially acceptable means to 
                protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We will retain your personal information only for as long as necessary to 
                fulfill the purposes outlined in this Privacy Policy, unless a longer 
                retention period is required or permitted by law.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding 
                your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update your personal information</li>
                <li>The right to erase your personal information</li>
                <li>The right to restrict or object to our processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our 
                website and hold certain information. Cookies are files with a small amount 
                of data that may include an anonymous unique identifier.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a 
                cookie is being sent. However, if you do not accept cookies, you may not 
                be able to use some portions of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites that are not operated 
                by us. We have no control over and assume no responsibility for the content, 
                privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do 
                not knowingly collect personal information from children under 18. If you 
                are a parent or guardian and believe your child has provided us with 
                personal information, please contact us.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating 
                the "Last updated" date.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-gray-700 space-y-2">
                <p>Email: privacy@habltech.com</p>
                <p>Address: 230/2, 34th Street, Khayaban-e-Roomi, D.H.A. Phase 8, Karachi, 75500</p>
                <p>Phone: +92 21 353 904 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;