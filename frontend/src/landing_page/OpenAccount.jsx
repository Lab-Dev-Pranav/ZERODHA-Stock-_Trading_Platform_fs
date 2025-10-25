import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <Link to="/auth">
          <button
            style={{ width: "200px", height: "50px", margin: "0 auto" }}
            className="btn btn-primary fs-5 mb-5"
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
