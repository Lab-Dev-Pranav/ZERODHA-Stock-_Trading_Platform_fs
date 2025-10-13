import React from "react";

function Awards() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center gy-5">
        {/* Left Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/largestBroker.svg"
            alt="Largest stock broker illustration"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>

        {/* Right Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="fw-bold">Largest stock broker in India</h2>

          <p className="mt-3 fs-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row fs-5 mt-4">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mt-2">Futures and Options</li>
                <li className="mt-2">Commodity derivatives</li>
                <li className="mt-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mt-2">Stocks & IPOs</li>
                <li className="mt-2">Direct mutual funds</li>
                <li className="mt-2">Bonds and Govt. securities</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 text-center text-md-start">
            <img
              src="media/pressLogos.png"
              alt="Press logos"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
