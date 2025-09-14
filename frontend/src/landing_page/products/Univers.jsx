import React from "react";
import "./Univers.css"; // custom styles here
import { Link } from "react-router-dom";

function PartnerCard({ imgSrc, text }) {
  return (
    <div className="col-12 col-md-4 text-center d-flex flex-column align-items-center mb-4">
      <img style={{ height: "50px" }} src={imgSrc} alt="" />
      <p className="partner-text">{text}</p>
    </div>
  );
}

function Univers() {
  const partners = [
    {
      img: "media/zerodhaFundhouse.png",
      text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "media/sensibullLogo.svg",
      text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      img: "media/tijori.svg",
      text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      img: "media/streakLogo.png",
      text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "media/smallcaseLogo.png",
      text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      img: "media/dittoLogo.png",
      text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row mb-5 text-center">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row" style={{ width: "80%", margin: "0 auto" }}>
        {partners.map((p, i) => (
          <PartnerCard key={i} imgSrc={p.img} text={p.text} />
        ))}
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <Link to="/signup">
            <button className="btn btn-primary my-button-hover-dark">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Univers;
