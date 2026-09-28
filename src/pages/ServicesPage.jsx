import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import CtaBand from "../components/CtaBand/CtaBand";

const ServicesPage = () => (
  <>
    <PageHeader
      title="Nettsider og nettbutikker"
      accent="for bedrifter som vil bli valgt."
      lede="Ny nettside, en utdatert side som skal fornyes, eller en nettbutikk — laget for små og mellomstore bedrifter i Oslo, på Østlandet og i hele Norge."
    />
    <Services full />
    <Process />
    <CtaBand />
  </>
);

export default ServicesPage;
