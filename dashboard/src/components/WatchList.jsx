// WatchList.jsx
import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import GeneralContext from "./GeneralContext";
import "./WatchList.css";
import { watchlist } from "../data/Data";
import { DoughnutChart } from "./doughnutChart";

function WatchList() {
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 search state

  const labels = watchlist.map((subarray) => subarray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // 🔍 Filter stocks based on search term
  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
          style={{
            color: "gray",
            border: "1px solid black",
            padding: "8px 12px",
            borderRadius: "6px",
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="counts"> {filteredWatchlist.length} / 50</span>
      </div>

      <ul className="list">
        {filteredWatchlist.length > 0 ? (
          filteredWatchlist.map((stock, idx) => (
            <WatchListItem stock={stock} key={idx} />
          ))
        ) : (
          <li className="no-result">No matching stocks found.</li>
        )}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchlistActions uid={stock.name} />}
    </li>
  );
};

const WatchlistActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <span className="action-buttons">
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button onClick={() => openBuyWindow(uid, "BUY")} className="buy">
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button onClick={() => openBuyWindow(uid, "SELL")} className="sell">
            Sell
          </button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartIcon className="chart" />
          </button>
        </Tooltip>

        <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow}>
          <button className="btn">
            <MoreHorizIcon />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
