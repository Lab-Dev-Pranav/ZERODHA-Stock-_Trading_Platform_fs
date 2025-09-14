import React from "react";

function Hero() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="row text-center">
        <h2>Charges</h2>
        <p>List of all charges and taxes</p>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="row">
        <div className="col text-center p-5">
          <img src="\media\pricing0.svg" alt="" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col text-center p-5">
          <img src="media\intradayTrades.svg" alt="" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col text-center p-5">
          <img src="media\pricingMF.svg" alt="" />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Hero;
