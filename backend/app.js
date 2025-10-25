const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");  

//Models
const { HoldingModel } = require("./model/HoldingModel");
const { OrderModel } = require("./model/OrderModel");
const { PositionsModle } = require("./model/PositionsModle");

// const LocalStrategy = require("passport-local").Strategy;

const app = express();
const port = process.env.PORT || 4000;

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173/";

// Middleware
app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.json());

// DB Conecter
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(
  cors({

                    // DASHBOARD-Frontend-URL
    origin: [ "http://localhost:3000", "http://localhost:5173" ], // ✅ exact frontend URL
    //  origin: [ "https://dashboard-zerodha-stock-trading-platform.onrender.com/", "https://zerodha-stock-trading-platform-fs.onrender.com/" ],
    credentials: true, // ✅ allow cookies/headers
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // ✅ allow these
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ allow headers
  })
);

app.use(express.urlencoded({ extended: true })); // ✅ For form-data

app.use("/", authRoute);


// Routs

// app.get("/addholdings", async (req, res) => {
//   let tempholding = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//   ];
//   tempholding.forEach((item) => {
//     let newHolding = new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Done");
// });

// app.get("/addPosition", async (req, res) => {
//   let tempPosition = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//   ];
//   tempPosition.forEach((item) => {
//     let newPositions = new PositionsModle({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPositions.save();
//   });
//   res.send("Done");
// });

app.get("/holdings", async (req, res) => {
  let allholdings = await HoldingModel.find({});
  res.json(allholdings);
});

app.get("/positions", async (req, res) => {
  let allpositions = await PositionsModle.find({});
  res.json(allpositions);
});

app.post("/neworder", async (req, res) => {
  let neworder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  neworder.save();

  res.send("Order Is Saved in DB");
});

app.get("/orders", async (req, res) => {
  let allorders = await OrderModel.find({});
  res.json(allorders);
});


app.get("/", (req, res) => {
  res.send(`🚀 App started on http://localhost:${port}`);
});

// App Starter
app.listen(port, () => {
  console.log(`🚀 App started on http://localhost:${port}`);
});
