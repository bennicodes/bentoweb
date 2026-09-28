import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Pricing from "../components/Pricing/Pricing";
import Faq from "../components/Faq/Faq";
import CtaBand from "../components/CtaBand/CtaBand";

const PricingPage = () => (
  <>
    <PageHeader
      title="Hva koster en nettside?"
      accent="Fast pris, alltid."
      lede="Tre pakker med fast pris. Alle inkluderer design, utvikling og lansering — du velger omfanget, og vet hva det koster før vi starter."
    />
    <Pricing />
    <Faq />
    <CtaBand title="Usikker på hvilken pakke du trenger?" text="Ta en uforpliktende prat, så finner vi ut av det sammen." />
  </>
);

export default PricingPage;
