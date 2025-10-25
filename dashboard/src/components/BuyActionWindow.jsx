// BuyActionWindow.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      const payload = {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      };
      await axios.post("http://localhost:4000/neworder", payload);
    } catch (err) {
      console.error(err);
    } finally {
      closeBuyWindow();
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="buy-window-wrapper d-flex align-items-center justify-content-center">
      <div className="buy-card shadow-lg p-4 rounded-4">
        <h5 className="text-center mb-3 fw-bold text-primary">
          {mode === "BUY" ? "Buy Stocks" : "Sell Stocks"}
        </h5>

        <div className="mb-3">
          <label htmlFor="qty" className="form-label fw-semibold">
            Quantity
          </label>
          <input
            type="number"
            id="qty"
            className="form-control"
            min="1"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label fw-semibold">
            Price (₹)
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            step="0.05"
            min="0"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <span className="text-secondary small">
            Margin required: ₹140.65
          </span>
          <div className="d-flex gap-2">
            <button
              className={`btn ${
                mode === "BUY" ? "btn-success" : "btn-danger"
              } px-4 fw-semibold`}
              onClick={handleBuyClick}
            >
              {mode === "BUY" ? "Buy" : "Sell"}
            </button>

            <button
              className="btn btn-outline-secondary px-4 fw-semibold"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
