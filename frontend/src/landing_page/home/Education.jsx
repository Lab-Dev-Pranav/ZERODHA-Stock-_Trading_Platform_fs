import React from "react";

function Education() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center gy-5">
        {/* Left Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>

        {/* Right Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="fw-bold mb-4">Free and open market education</h2>

          <p className="fs-5 mb-3">
            Varsity, the largest online stock market education book in the world,
            covering everything from the basics to advanced trading.
          </p>
          <a className="text-decoration-none text-primary" href="#">
            Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

          <hr className="my-4 d-md-none" />

          <p className="fs-5 mb-3 mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a className="text-decoration-none text-primary" href="#">
            TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
