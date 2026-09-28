import React from "react";
import { useParams } from "react-router";
import PageHeader from "../components/PageHeader/PageHeader";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import CtaBand from "../components/CtaBand/CtaBand";
import NotFound from "./NotFound";
import { projectById } from "../data/projects";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectById(id);
  if (!project) return <NotFound />;

  return (
    <>
      <PageHeader
        title={`${project.name}.`}
        accent={project.type}
        lede={project.summary}
        back={{ to: "/prosjekter", label: "Alle prosjekter" }}
      />
      <CaseStudy project={project} />
      <CtaBand title="Vil du ha en nettside som dette?" />
    </>
  );
};

export default ProjectPage;
