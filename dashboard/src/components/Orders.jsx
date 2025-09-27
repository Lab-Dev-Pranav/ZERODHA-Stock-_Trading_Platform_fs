import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/orders").then((res) => {
      console.log("res data", res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link
            to={"/"}
            className="btn"
            style={{
              width: "auto",
              display: "inline-block",
              backgroundColor: "#1976d2",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#125aa0";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#1976d2";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          <h2>Your Orders</h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <th style={cellStyle}>Stock</th>
                <th style={cellStyle}>Quantity</th>
                <th style={cellStyle}>Price</th>
                <th style={cellStyle}>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order) => (
                <tr key={order._id}>
                  <td style={cellStyle}>{order.name}</td>
                  <td style={cellStyle}>{order.qty}</td>
                  <td style={cellStyle}>₹{order.price}</td>
                  <td
                    style={{
                      ...cellStyle,
                      color: order.mode === "BUY" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {
                      order.mode
                      // == "BUY" ? "BUY" : "SELL"
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const cellStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  textAlign: "center",
};

export default Orders;
