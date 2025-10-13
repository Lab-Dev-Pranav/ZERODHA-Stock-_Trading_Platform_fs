import React from "react";

function Team() {
  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="text-center">People</h3>
        </div>
      </div>

      {/* Team Member */}
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
          <img
            src="media/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle img-fluid"
            style={{ maxHeight: "250px" }}
          />
          <div className="mt-3">
            <h6>Nithin Kamath</h6>
            <p>Founder & CEO</p>
          </div>
        </div>

        {/* Description Column */}
        <div className="col-12 col-md-8">
          <p className="lh-lg">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="lh-lg">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC). Nithin’s vision has
            made Zerodha the largest retail stockbroker in India.
          </p>

          <p className="lh-lg">Playing basketball is his zen.</p>

          <p className="lh-lg">
            Connect on{" "}
            <a className="text-decoration-none" href="">
              Homepage
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="">
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
