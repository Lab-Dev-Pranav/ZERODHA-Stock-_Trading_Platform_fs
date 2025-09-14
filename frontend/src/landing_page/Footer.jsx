import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container p-5 ">
      <hr />
      <br />
      <br />
      <br />
      <div className="row">
        {/* 1 */}
        <div className="col-3">
          <br />
          <Link to="/#Hero">
            <img src="media/logo.svg" style={{ width: "150px" }} alt="Logo" />
          </Link>

          <br />
          <br />
          <p>@ 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
          <div className="d-flex justify-content-start align-items-center">
            <i className="fa-brands fa-twitter mx-2"></i>
            <i className="fa-brands fa-facebook mx-2"></i>
            <i className="fa-brands fa-instagram mx-2"></i>
            <i className="fa-brands fa-linkedin mx-2"></i>
            <i className="fa-brands fa-telegram mx-2"></i>
          </div>
        </div>

        {/* 2 */}
        <div className="col-3">
          <h6>Company</h6>
          <ul className="list-unstyled ">
            <li className="mt-4">
              {" "}
              <a style={{ textDecoration: "none", color: "black" }} href="">
                About
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Products
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Pricing
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Referral programme
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Careers
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Zerodha.tech
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Press & media
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Zerodha cares (CSR)
              </a>
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div className="col-3">
          <h6>Support</h6>
          <ul className="list-unstyled ">
            <li className="mt-4">
              {" "}
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Contact
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Support portal
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Z-Connect blog
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                List of charges
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Downloads & resources
              </a>
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div className="col-3">
          <h6>Account</h6>
          <ul className="list-unstyled ">
            <li className="mt-4">
              {" "}
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Open an account
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a style={{ textDecoration: "none", color: "black" }} href="">
                Fund transfer
              </a>
            </li>
            <li className="mt-2">
              <a style={{ textDecoration: "none", color: "black" }} href="">
                60 day challenge
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --------------------------- */}
      <br />
      <br />
      <div className="row fs--5" style={{ color: "gray" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration
          no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
          4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <pre>
          <a style={{ textDecoration: "none" }} href="">
            Smart Online Dispute Resolution
          </a>
          |
          <a style={{ textDecoration: "none" }} href="">
            Grievances Redressal Mechanism
          </a>
        </pre>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India's largest broker based on networth as per NSE.{" "}
          <a style={{ textDecoration: "none" }} href="">
            NSE broker factsheet
          </a>
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <Link style={{ textDecoration: "none" }} to="/support">
            create a ticket here.
          </Link>
        </p>
      </div>

      <div className="d-flex justify-content-center flex-wrap">
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          NSE
        </a>
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          BSE
        </a>
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          MCX
        </a>
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          Terms & conditions
        </a>
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          Policies & procedures
        </a>
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          Privacy policy
        </a>
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          Disclosure
        </a>
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          For investor's attention
        </a>
        <a style={{ textDecoration: "none" }} href="" className="mx-2">
          Investor charter
        </a>
      </div>
    </div>
  );
}

export default Footer;
