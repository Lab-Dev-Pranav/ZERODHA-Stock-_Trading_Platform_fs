import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container py-5 px-3">
      <hr className="mb-5" />

      {/* -------- Top Section -------- */}
      <div className="row gy-5">
        {/* 1️⃣ Logo + Social */}
        <div className="col-12 col-md-6 col-lg-3">
          <Link to="/#Hero">
            <img
              src="media/logo.svg"
              alt="Logo"
              className="img-fluid mb-3"
              style={{ width: "150px", maxWidth: "100%" }}
            />
          </Link>

          <p className="small text-muted mb-3">
            © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
          </p>

          <div className="d-flex flex-wrap align-items-center">
            <i className="fa-brands fa-twitter mx-2 fs-5"></i>
            <i className="fa-brands fa-facebook mx-2 fs-5"></i>
            <i className="fa-brands fa-instagram mx-2 fs-5"></i>
            <i className="fa-brands fa-linkedin mx-2 fs-5"></i>
            <i className="fa-brands fa-telegram mx-2 fs-5"></i>
          </div>
        </div>

        {/* 2️⃣ Company */}
        <div className="col-6 col-md-3 col-lg-2">
          <h6 className="fw-bold">Company</h6>
          <ul className="list-unstyled mt-3">
            {[
              "About",
              "Products",
              "Pricing",
              "Referral programme",
              "Careers",
              "Zerodha.tech",
              "Press & media",
              "Zerodha cares (CSR)",
            ].map((item) => (
              <li key={item} className="mt-2">
                <a href="#" className="text-decoration-none text-dark small">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Support */}
        <div className="col-6 col-md-3 col-lg-2">
          <h6 className="fw-bold">Support</h6>
          <ul className="list-unstyled mt-3">
            {[
              "Contact",
              "Support portal",
              "Z-Connect blog",
              "List of charges",
              "Downloads & resources",
            ].map((item) => (
              <li key={item} className="mt-2">
                <a href="#" className="text-decoration-none text-dark small">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Account */}
        <div className="col-12 col-md-6 col-lg-2">
          <h6 className="fw-bold">Account</h6>
          <ul className="list-unstyled mt-3">
            {["Open an account", "Fund transfer", "60 day challenge"].map(
              (item) => (
                <li key={item} className="mt-2">
                  <a href="#" className="text-decoration-none text-dark small">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* -------- Middle Legal Text -------- */}
      <div className="row mt-5">
        <div className="col-12 text-muted small" style={{ lineHeight: "1.6" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID.
          </p>

          <p>
            <a href="#" className="text-decoration-none">
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a href="#" className="text-decoration-none">
              Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository. 3) Check your securities / MF / bonds in
            the consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange."
          </p>

          <p>
            If you find anyone claiming to be part of Zerodha and offering such
            services, please{" "}
            <Link to="/support" className="text-decoration-none">
              create a ticket here
            </Link>
            .
          </p>
        </div>
      </div>

      {/* -------- Bottom Links -------- */}
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {[
          "NSE",
          "BSE",
          "MCX",
          "Terms & conditions",
          "Policies & procedures",
          "Privacy policy",
          "Disclosure",
          "For investor's attention",
          "Investor charter",
        ].map((link) => (
          <a
            key={link}
            href="#"
            className="mx-2 text-decoration-none small text-muted"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
