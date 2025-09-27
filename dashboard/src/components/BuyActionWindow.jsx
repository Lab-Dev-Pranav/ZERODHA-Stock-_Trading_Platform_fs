// BuyActionWindow.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  console.log("BuyActionWindow received:", { uid, mode });

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      const payload = {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      };

      const res = await axios.post("http://localhost:4000/neworder", payload);
    } catch (err) {
    } finally {
      closeBuyWindow();
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {/* {(uid, mode)} */}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div className="buttons">
          <Link
            className={`btn ${mode === "BUY" ? "btn-buy" : "btn-sell"}`}
            onClick={handleBuyClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </Link>

          <Link to="" className="btn btn-cancel" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
