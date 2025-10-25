import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <img className="mb-5" src="media\homeHero.png" alt="Hero Image" />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
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
export default Hero;
