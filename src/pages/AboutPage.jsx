import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import About from "../components/About/About";
import CtaBand from "../components/CtaBand/CtaBand";
import { site } from "../data/site";

const AboutPage = () => (
  <>
    <PageHeader
      title="Om BentoWeb."
      accent="Et lite byrå med kort vei til deg."
      lede={`BentoWeb designer og bygger nettsider og nettbutikker for små og mellomstore bedrifter. ${site.founder.name} er grunnlegger og din faste kontaktperson — fra første prat til ferdig nettside, og videre om du ønsker drift og support.`}
    />
    <About />
    <CtaBand title="La oss ta en prat." />
  </>
);

export default AboutPage;
