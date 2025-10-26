import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

function NavBar() {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) return;
      try {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) setUsername(user);
        else {
          removeCookie("token");
          navigate("/auth");
        }
      } catch (err) {
        removeCookie("token");
        navigate("/auth");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    setUsername("");
    navigate("/auth");
  };

  const handleDashboard = () => {
    window.open("http://localhost:3000", "_blank");
    
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container-fluid px-3 px-md-5">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/logo.svg"
            alt="Logo"
            style={{ width: "130px", maxWidth: "100%" }}
          />
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

        {/* Nav links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-1 mb-2 mb-lg-0">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            {username ? (
              <>
                <li className="nav-item mx-2 mb-2 mb-lg-0">
                  <span className="nav-link fw-bold text-primary">
                    @{username}
                  </span>
                </li>
                <li className="nav-item mx-1 mb-2 mb-lg-0">
                  <button
                    onClick={handleDashboard}
                    className="btn btn-outline-primary btn-sm w-100"
                  >
                    Dashboard
                  </button>
                </li>
                <li className="nav-item mx-1 mb-2 mb-lg-0">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger btn-sm w-100"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item mx-1 mb-2 mb-lg-0">
                <Link className="btn btn-primary btn-sm px-3 w-100" to="/auth">
                  Login / Signup
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
