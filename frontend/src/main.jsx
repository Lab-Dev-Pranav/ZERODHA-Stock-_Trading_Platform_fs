import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";

import NavBar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import { CookiesProvider } from "react-cookie";
// -
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);
