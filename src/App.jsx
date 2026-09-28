import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

// Paths must match src/data/pages.js (used for SEO + prerendering).
const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="tjenester" element={<ServicesPage />} />
      <Route path="prosjekter" element={<ProjectsPage />} />
      <Route path="prosjekter/:id" element={<ProjectPage />} />
      <Route path="priser" element={<PricingPage />} />
      <Route path="om-oss" element={<AboutPage />} />
      <Route path="kontakt" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
