import React from "react";

function Stats() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h2 className="mb-5">Trust with confidence</h2>

            <h4>Customer-first always</h4>
            <p className="mb-4 pr-5 ">
              That's why 1.3+ crore customers trust Zerodha with ₹ 3.5+ lakh
              crores worth of equity investments.
            </p>

            <h4>No spam or gimmicks</h4>
            <p className="mb-4 pr-5">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h4>The Zerodha universe</h4>
            <p className="mb-4 pr-5">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h4>Do better with money</h4>
            <p className="mb-4 pr-5">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col">
            <img
              style={{ width: "90%", marginLeft: "60px" }}
              className=""
              src="media\ecosystem.png"
              alt="ecosystem"
            />
            <div className="text-center mt-4">
              <a className="mx-5 text-decoration-none" href="">
                Explore our products <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a className="text-decoration-none" href="">
                Try kite demo <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
export default Stats;
