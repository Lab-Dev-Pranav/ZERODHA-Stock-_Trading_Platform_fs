import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fs--5">
      <div className="container-fluid" style={{ padding: "0 250px" }}>
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="media/logo.svg" style={{ width: "150px" }} alt="Logo" />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            {/* <li className="nav-item me-3">
              <Link className="nav-link" to="#">
                <i class="fa-solid fa-bars"></i>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
