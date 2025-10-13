import React from "react";

function Hero() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2>Charges</h2>
        <p>List of all charges and taxes</p>
      </div>

      <div className="row">
        <div className="col-12 col-md-4 text-center p-4">
          <img src="/media/pricing0.svg" alt="Free equity delivery" className="img-fluid mb-3" />
          <h4>Free equity delivery</h4>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center p-4">
          <img src="/media/intradayTrades.svg" alt="Intraday trades" className="img-fluid mb-3" />
          <h4>Free intraday trading</h4>
          <p>
            All intraday trades come with minimal charges — ₹0 brokerage for first trades.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center p-4">
          <img src="/media/pricingMF.svg" alt="Free direct mutual funds" className="img-fluid mb-3" />
          <h4>Free direct MF</h4>
          <p>
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
