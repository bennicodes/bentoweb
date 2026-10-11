import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Projects from "../components/Projects/Projects";
import CtaBand from "../components/CtaBand/CtaBand";

const ProjectsPage = () => (
  <>
    <PageHeader
      title="Prosjekter."
      accent="Kunder og eksempler."
      lede="Først nettsider vi har laget for ekte kunder, deretter én eksempelside for hver pakke. Alt er bygget fra bunnen av — ingen ferdigmaler."
    />
    <Projects />
    <CtaBand title="Skal din bedrift være den neste?" />
  </>
);

export default ProjectsPage;
