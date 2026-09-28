import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Button from "../components/Button/Button";

const NotFound = () => (
  <>
    <PageHeader
      title="Fant ikke siden."
      accent="Den kan ha flyttet."
      lede="Adressen finnes ikke lenger, eller den ble skrevet feil."
    />
    <div className="container section">
      <Button href="/" arrow>
        Til forsiden
      </Button>
    </div>
  </>
);

export default NotFound;
