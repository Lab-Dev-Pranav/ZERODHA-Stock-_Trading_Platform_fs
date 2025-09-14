import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-6">
          <img src="\media\largestBroker.svg" alt="" />
        </div>
        <div className="col-6">
          <h2>Largest stock broker in India</h2>
          <p className="mt-4 fs-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row fs-5 mt-4">
            <div className="col-6">
              {" "}
              <ul>
                <li className="mt-1">Futures and Options</li>
                <li className="mt-1">Commodity derivatives</li>
                <li className="mt-1">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              {" "}
              <ul>
                <li className="mt-1">Stocks & IPOs</li>
                <li className="mt-1">Direct mutual funds</li>
                <li className="mt-1">Bonds and Govt. securities</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <img className="mt-5" src="media\pressLogos.png" alt="pressLogos" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Awards;
