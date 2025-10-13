import React from "react";

function Stats() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center gy-5">
        {/* Left Content Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="fw-bold mb-5">Trust with confidence</h2>

          <div>
            <h4>Customer-first always</h4>
            <p className="mb-4">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>

            <h4>No spam or gimmicks</h4>
            <p className="mb-4">
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h4>The Zerodha universe</h4>
            <p className="mb-4">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h4>Do better with money</h4>
            <p className="mb-4">
              With initiatives like Nudge and Kill Switch, we don’t just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
          <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a href="#" className="text-decoration-none text-primary">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none text-primary">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
