import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col">
          <img src="media\education.svg" alt="" />
        </div>
        <div className="col">
          <h2>Free and open market education</h2>
          <br />
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="text-decoration-none" href="">
            Versity <i class="fa-solid fa-arrow-right"></i>
          </a>

          <br />
          <br />

          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="text-decoration-none" href="">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Education;
