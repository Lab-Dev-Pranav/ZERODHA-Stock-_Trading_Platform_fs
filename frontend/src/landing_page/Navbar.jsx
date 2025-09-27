

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
           console.log("nav res data - ",data);
        const { status, user } = data;
        if (status) {
          setUsername(user);
        } else {
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

  //  window.location.href = "http://localhost:3000";

  const handledashbord = ()=>{
   window.location.href = "http://localhost:3000";
  }

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

            {/* Auth Section */}
            {username ? (
              <>
              
                <li className="nav-item me-3 d-flex align-items-center">
                  <span className="nav-link fw-bold text-primary">
                   @{username}
                  </span>
                </li>
                 <li className="nav-item">
                     <button
                      onClick={handledashbord}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Dashbord
                  </button>
                </li>
                &nbsp;&nbsp;
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Logout
                  </button>
                </li>
                
               
              </>
            ) : (
              <li className="nav-item me-3">
                <Link className="btn btn-primary px-3" to="/auth">
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
