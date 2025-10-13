import React from "react";

function Pricing() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center gy-5">
        {/* Left Section */}
        <div className="col-12 col-md-4 text-center text-md-start">
          <h1 className="fw-bold mb-3">Unbeatable pricing</h1>
          <p className="fs-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="fs-6 text-decoration-none text-primary">
            See pricing <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-8">
          <div className="row justify-content-center justify-content-md-start g-4">
            {/* Card 1 */}
            <div className="col-10 col-sm-6 col-md-5 border border-2 rounded p-4 text-center shadow-sm">
              <h3 className="fw-bold">₹ 0</h3>
              <p className="fs-5 mb-0">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            {/* Card 2 */}
            <div className="col-10 col-sm-6 col-md-5 border border-2 rounded p-4 text-center shadow-sm">
              <h3 className="fw-bold">₹ 20</h3>
              <p className="fs-5 mb-0">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
