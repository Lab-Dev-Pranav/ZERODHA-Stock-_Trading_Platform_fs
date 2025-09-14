import React from "react";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
  return (
    <div className="container">
      <div className="row">
        <Hero />
        <Team />
      </div>
    </div>
  );
}

export default AboutPage;
