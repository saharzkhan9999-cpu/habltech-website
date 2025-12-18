import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

/* Core pages */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Process = lazy(() => import("./pages/Process"));

/* Legal pages */
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

/* Case studies */
const LibreBookingCaseStudy = lazy(() =>
  import("./pages/projects/LibreBookingCaseStudy")
);
const OalanCaseStudy = lazy(() =>
  import("./pages/projects/OalanCaseStudy")
);
const CareaCaseStudy = lazy(() =>
  import("./pages/projects/CareaCaseStudy")
);
const SprintReportCaseStudy = lazy(() =>
  import("./pages/projects/SprintReportCaseStudy")
);
const BizCoreCaseStudy = lazy(() =>
  import("./pages/projects/BizCoreCaseStudy")
);
const LeadViewCaseStudy = lazy(() =>
  import("./pages/projects/LeadViewCaseStudy")
);
const MedicareHubCaseStudy = lazy(() =>
  import("./pages/projects/MedicareHubCaseStudy")
);
const ShopnexCaseStudy = lazy(() =>
  import("./pages/projects/ShopnexCaseStudy")
);
const EdutechProCaseStudy = lazy(() =>
  import("./pages/projects/EdutechProCaseStudy")
);
const LogisticaAICaseStudy = lazy(() =>
  import("./pages/projects/LogisticaAICaseStudy")
);

/* Other pages */
const FAQ = lazy(() => import("./pages/Faq"));
const BlogRedirect = lazy(() => import("./components/BlogRedirect"));

const App = () => {
  return (
    <Suspense fallback={<div className="page-loader">Loading...</div>}>
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
        <Route path="/case-study/oalan" element={<OalanCaseStudy />} />
        <Route path="/case-study/carea" element={<CareaCaseStudy />} />
        <Route path="/case-study/sprintreport" element={<SprintReportCaseStudy />} />
        <Route path="/case-study/bizcore" element={<BizCoreCaseStudy />} />
        <Route path="/case-study/leadview" element={<LeadViewCaseStudy />} />
        <Route path="/case-study/medicare-hub" element={<MedicareHubCaseStudy />} />
        <Route path="/case-study/shopnex" element={<ShopnexCaseStudy />} />
        <Route path="/case-study/edutech-pro" element={<EdutechProCaseStudy />} />
        <Route path="/case-study/logistica-ai" element={<LogisticaAICaseStudy />} />

        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog/*" element={<BlogRedirect />} />
      </Routes>
    </Suspense>
  );
};

export default App;
