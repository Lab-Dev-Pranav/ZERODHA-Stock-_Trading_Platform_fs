import React from "react";
import Hero from "./Hero";
import OpeningCharges from "./OpeningCharges";

import DematAMC from "./DematAMC";
import ChargesExplained from "./ChargesExplained";
import OptionalServices from "./OptionalServices";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpeningCharges />
      <DematAMC />
      <OptionalServices />
      <ChargesExplained />
    </>
  );
}

export default PricingPage;
