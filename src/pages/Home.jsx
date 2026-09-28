import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import PricingTeaser from "../components/PricingTeaser/PricingTeaser";
import About from "../components/About/About";
import CtaBand from "../components/CtaBand/CtaBand";

// The landing page: a short version of everything, each linking to its full page.
const Home = () => (
  <>
    <Hero />
    <Services />
    <Projects teaser />
    <PricingTeaser />
    <About teaser />
    <CtaBand />
  </>
);

export default Home;
