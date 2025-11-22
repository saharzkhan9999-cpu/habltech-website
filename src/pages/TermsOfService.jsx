import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
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
              Terms of Service
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
                Welcome to HABLTECH. These Terms of Service govern your use of our website 
                and services. By accessing or using our services, you agree to be bound by 
                these terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                HABLTECH provides software development, consulting, and related technology 
                services. These terms apply to all visitors, users, and others who access 
                our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HABLTECH offers custom software development, mobile application development, 
                web development, and technology consulting services. All services are 
                provided on a project basis with specific terms outlined in individual 
                service agreements.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Custom software development and consulting</li>
                <li>Web and mobile application development</li>
                <li>Technology strategy and implementation</li>
                <li>Ongoing maintenance and support services</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All intellectual property rights in the services, including source code, 
                databases, functionality, software, website designs, and all content 
                belong to HABLTECH or our licensors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Client projects are governed by separate intellectual property agreements 
                that specify ownership and usage rights for delivered work.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When using our services, you agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use our services for any illegal purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Infringe upon any intellectual property rights</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Interfere with or disrupt the integrity of our services</li>
              </ul>
            </div>

            {/* Payments and Fees */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payments and Fees</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Service fees are outlined in individual project proposals and agreements. 
                Payment terms, schedules, and methods will be specified in your service 
                agreement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Late payments may be subject to interest charges as specified in your 
                agreement. All fees are quoted in US Dollars unless otherwise specified.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, 
                without prior notice, for conduct that we believe violates these Terms 
                or is harmful to other users, us, or third parties, or for any other 
                reason.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use our services will immediately cease. 
                All provisions of these Terms that by their nature should survive 
                termination shall survive.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by applicable law, HABLTECH shall not be 
                liable for any indirect, incidental, special, consequential, or punitive 
                damages, or any loss of profits or revenues.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability for any claims under these terms shall not exceed 
                the amount you paid us for the services in the six months preceding the 
                claim.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws 
                of Pakistan, without regard to its conflict of law provisions. Any disputes 
                shall be resolved in the courts of Karachi, Pakistan.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these 
                Terms at any time. If a revision is material, we will provide at least 
                30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What constitutes a material change will be determined at our sole 
                discretion. By continuing to access or use our services after those 
                revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="text-gray-700 space-y-2">
                <p>Email: legal@habltech.com</p>
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

export default TermsOfService;