import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="fs-6 text-decoration-none">
            See pricing <i className="fa-solid fa-arrow-right ml-5"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div
              style={{ width: "290px" }}
              className="col-4 border border-2 rounded p-4"
            >
              <h3>₹ 0</h3>
              <p className="fs-5">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div
              style={{ width: "290px" }}
              className="col-4 border border-2 rounded p-4"
            >
              <h3>₹ 20</h3>
              <p className="fs-5">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Pricing;
