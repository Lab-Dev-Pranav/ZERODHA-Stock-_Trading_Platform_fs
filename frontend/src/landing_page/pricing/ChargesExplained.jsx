import React from "react";
// import "./ChargesExplained.css"; // optional for custom styling

function ChargesExplained() {
  const charges = [
    {
      title: "Securities/Commodities transaction tax",
      content: `Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.`,
    },
    {
      title: "Transaction/Turnover Charges",
      content: `Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
BSE has revised transaction charges in SS and ST groups to ₹10,000 per crore of gross turnover.
BSE has revised transaction charges for group A, B and other non-exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W) at ₹275 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.`,
    },
    {
      title: "Call & trade",
      content: `Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.`,
    },
    {
      title: "Stamp charges",
      content: `Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.`,
    },
    {
      title: "NRI brokerage charges",
      content: `For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).
For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
₹500 + GST as yearly account maintenance charges (AMC) charges.`,
    },
    {
      title: "Account with debit balance",
      content: `If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order cost.`,
    },
    {
      title: "Charges for Investor’s Protection Fund Trust (IPFT) by NSE",
      content: `Equity and Futures: ₹10 per crore + GST of the traded value.
Options: ₹50 per crore + GST traded value (premium value).
Currency: ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of turnover for Options.`,
    },
    {
      title: "Margin Trading Facility (MTF)",
      content: `MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.
MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.`,
    },
    {
      title: "Disclaimer",
      content: `For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.01% will be charged.`,
    },
  ];

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Charges explained</h4>
      <br />
      <div className="row">
        {charges.map((item, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <h6 className="fw-bold">{item.title}</h6>
            <p style={{ whiteSpace: "pre-line" }} className="fs-9">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChargesExplained;
