import React from "react";
import HerCreateTicketo from "./CreateTicket";

function Hero() {
  return (
    <div className="container my-5">
      <div className="row align-items-center bg-light rounded p-5 shadow-sm">
        {/* Left Content */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold mb-3">Need Help? Create a Support Ticket</h2>
          <p className="text-muted mb-4">
            Facing issues with your account, trades, or payments? Submit a
            ticket and our support team will get back to you quickly.
          </p>
          <HerCreateTicketo />
        </div>

        {/* Right Illustration */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="media/SupportHome.png"
            alt="Support"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
