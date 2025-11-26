import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ui";
import { useScrollEffect } from "./hooks";

// Main Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ContactUs from "./pages/ContactUs";
import WhoWeAre from "./pages/WhoWeAre";
import NotFound from "./pages/NotFound";

// Demo Pages
import CrispOnePagerDemo from "./pages/demo/CrispOnePagerDemo";
import PreLaunchTeaserDemo from "./pages/demo/PreLaunchTeaserDemo";
import LocalServiceMicroDemo from "./pages/demo/LocalServiceMicroDemo";

// SaaS Marketing Website Pages
import SaaSLayout from "./pages/demo/saas/SaaSLayout";
import SaaSHome from "./pages/demo/saas/Home";
import SaaSFeatures from "./pages/demo/saas/Features";
import SaaSPricing from "./pages/demo/saas/Pricing";
import SaaSIntegrations from "./pages/demo/saas/Integrations";
import SaaSAbout from "./pages/demo/saas/About";
import SaaSBlog from "./pages/demo/saas/Blog";
import SaaSContact from "./pages/demo/saas/Contact";
import SaaSDashboard from "./pages/demo/saas/Dashboard";

// Agency Portfolio Pages
import AgencyLayout from "./pages/demo/agency-portfolio/AgencyLayout";
import AgencyHome from "./pages/demo/agency-portfolio/Home";
import AgencyPortfolio from "./pages/demo/agency-portfolio/Portfolio";
import AgencyAbout from "./pages/demo/agency-portfolio/About";
import AgencyServices from "./pages/demo/agency-portfolio/Services";
import AgencyContact from "./pages/demo/agency-portfolio/Contact";
import AgencyBlog from "./pages/demo/agency-portfolio/Blog";
import AgencyProjectDetail from "./pages/demo/agency-portfolio/ProjectDetail";

// Founder Personal Brand Pages
import FounderLayout from "./pages/demo/founder/FounderLayout";
import {
  LazyFounderHome,
  LazyFounderAbout,
  LazyFounderVentures,
  LazyFounderSpeaking,
  LazyFounderMedia,
  LazyFounderContact,
} from "./pages/demo/founder/LazyFounderPages";

const App: React.FC = () => {
  // Initialize scroll effects globally
  useScrollEffect();

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />

        {/* Demo Routes */}
        <Route path="/demo/crisp-one-pager" element={<CrispOnePagerDemo />} />
        <Route
          path="/demo/pre-launch-teaser"
          element={<PreLaunchTeaserDemo />}
        />
        <Route
          path="/demo/local-service-micro"
          element={<LocalServiceMicroDemo />}
        />

        {/* SaaS Marketing Website Routes with Layout */}
        <Route path="/demo/saas-marketing" element={<SaaSLayout />}>
          <Route index element={<SaaSHome />} />
          <Route path="home" element={<SaaSHome />} />
          <Route path="features" element={<SaaSFeatures />} />
          <Route path="pricing" element={<SaaSPricing />} />
          <Route path="integrations" element={<SaaSIntegrations />} />
          <Route path="about" element={<SaaSAbout />} />
          <Route path="blog" element={<SaaSBlog />} />
          <Route path="contact" element={<SaaSContact />} />
          <Route path="dashboard" element={<SaaSDashboard />} />
        </Route>

        {/* Agency Portfolio Routes with Layout */}
        <Route path="/demo/agency-portfolio" element={<AgencyLayout />}>
          <Route index element={<AgencyHome />} />
          <Route path="home" element={<AgencyHome />} />
          <Route path="portfolio" element={<AgencyPortfolio />} />
          <Route path="about" element={<AgencyAbout />} />
          <Route path="services" element={<AgencyServices />} />
          <Route path="contact" element={<AgencyContact />} />
          <Route path="blog" element={<AgencyBlog />} />
          <Route path="project/:id" element={<AgencyProjectDetail />} />
        </Route>

        {/* Founder Personal Brand Routes with Layout */}
        <Route path="/demo/founder" element={<FounderLayout />}>
          <Route index element={<LazyFounderHome />} />
          <Route path="about" element={<LazyFounderAbout />} />
          <Route path="ventures" element={<LazyFounderVentures />} />
          <Route path="speaking" element={<LazyFounderSpeaking />} />
          <Route path="media" element={<LazyFounderMedia />} />
          <Route path="contact" element={<LazyFounderContact />} />
          <Route
            path="test"
            element={
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    ✅ Test Page Working!
                  </h1>
                  <p className="text-gray-600">
                    If you can see this, the routing is working correctly.
                  </p>
                </div>
              </div>
            }
          />
        </Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default memo(App);