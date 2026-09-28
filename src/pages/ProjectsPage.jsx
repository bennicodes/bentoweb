import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Projects from "../components/Projects/Projects";
import CtaBand from "../components/CtaBand/CtaBand";

const ProjectsPage = () => (
  <>
    <PageHeader
      title="Prosjekter."
      accent="Nettsider for ekte bedrifter."
      lede="Hver nettside er bygget fra bunnen av og tilpasset kundene til bedriften. Trykk på et prosjekt for å se hva vi leverte."
    />
    <Projects />
    <CtaBand title="Skal din bedrift være den neste?" />
  </>
);

export default ProjectsPage;
