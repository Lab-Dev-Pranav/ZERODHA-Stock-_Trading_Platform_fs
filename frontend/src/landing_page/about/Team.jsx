import React from "react";

function Team() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <h3 className="text-center">People</h3>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-5" style={{ padding: "0px 40px 0px 160px" }}>
          {/* LEFT SEC */}
          <div className="row">
            <img
              src="media\nithinKamath.jpg"
              alt="nithinKamath"
              style={{ borderRadius: "50%", height: "60%" }}
            />
          </div>
          <div className="row text-center mt-3  ">
            <h6>Nithin Kamath</h6>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className="col-7" style={{ padding: "0px 160px 0px 170px" }}>
          <p className="lh-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="lh-5">
            {" "}
            Nithin Kamath Founder, CEO Nithin bootstrapped and founded Zerodha
            in 2010 to overcome the hurdles he faced during his decade long
            stint as a trader. Today, Zerodha has changed the landscape of the
            Indian broking industry. He is a member of the SEBI Secondary Market
            Advisory Committee (SMAC) and the Market Data Advisory Committee
            (MDAC).
          </p>

          <p className="lh-5">Playing basketball is his zen.</p>

          <p className="lh-5">
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Team;
