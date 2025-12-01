import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Process from "./pages/Process";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LibreBookingCaseStudy from './pages/projects/LibreBookingCaseStudy';
import OalanCaseStudy from "./pages/projects/OalanCaseStudy";
import CareaCaseStudy from "./pages/projects/CareaCaseStudy";
import SprintReportCaseStudy from "./pages/projects/SprintReportCaseStudy";
import BizCoreCaseStudy from "./pages/projects/BizCoreCaseStudy";
import LeadViewCaseStudy from "./pages/projects/LeadViewCaseStudy";
import MedicareHubCaseStudy from "./pages/projects/MedicareHubCaseStudy";
import ShopnexCaseStudy from "./pages/projects/ShopnexCaseStudy";
import EdutechProCaseStudy from "./pages/projects/EdutechProCaseStudy";
import LogisticaAICaseStudy from "./pages/projects/LogisticaAICaseStudy";
import FAQ from "./pages/Faq";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/process" element={<Process />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/case-study/librebooking" element={<LibreBookingCaseStudy />} />
      <Route path="/case-study/oalan" element={<OalanCaseStudy/>} />
      <Route path="/case-study/carea" element={<CareaCaseStudy/>} />
      <Route path="/case-study/sprintreport" element={<SprintReportCaseStudy />} />
      <Route path="/case-study/bizcore" element={<BizCoreCaseStudy />} />
      <Route path="/case-study/leadview" element={<LeadViewCaseStudy />} />
      <Route path="/case-study/medicare-hub" element={<MedicareHubCaseStudy />} />
      <Route path="/case-study/shopnex" element={<ShopnexCaseStudy />} />
      <Route path="/case-study/edutech-pro" element={<EdutechProCaseStudy />} />
      <Route path="/case-study/logistica-ai" element={<LogisticaAICaseStudy />} />
      <Route path="/faq" element={<FAQ />} />
     
      
    </Routes>
  );
};

export default App;
