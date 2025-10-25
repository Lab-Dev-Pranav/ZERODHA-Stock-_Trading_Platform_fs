import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Menu() {
  const location = useLocation();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState(null);
  

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = { withCredentials: true, headers: {} };
        if (token) config.headers["Authorization"] = `Bearer ${token}`;

        const resp = await axios.post("http://localhost:4000/", {}, config);
        if (resp && resp.data && resp.data.status && resp.data.user) {
          setUsername(resp.data.user);
        } else {
          setUsername(null);
        }
      } catch (err) {
        console.error("user verify error", err?.response?.data || err.message);
        setUsername(null);
      }
    };

    loadUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    Cookies.remove("token");
    if (axios.defaults && axios.defaults.headers  && axios.defaults.headers.common) {
      delete  axios.defaults.headers.common["Authorization"];
    }
    window.location.reload();
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Orders", path: "/orders" },
    { label: "Holdings", path: "/holdings" },
    { label: "Position", path: "/positions" },
    { label: "Funds", path: "/funds" },
    { label: "Apps", path: "/apps" },
  ];

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />

      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={item.path}
              >
                <p
                  className={
                    location.pathname === item.path
                      ? activeMenuClass
                      : menuClass
                  }
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer", position: "relative", display: "flex", alignItems: "center", gap: 8 }}
        >
          <div className="avatar">{username ? username.charAt(0).toUpperCase() : "ZU"}</div>
          <p className="username">{username || "Not signed in"}</p>

          {isProfileDropdownOpen && (
            <div
              className="dropdown"
              style={{
                position: "absolute",
                right: 0,
                top: "calc(100% + 8px)",
                backgroundColor: "#f1f5f9",
                minWidth: 160,
                padding: "8px 0",
                borderRadius: 8,
                boxShadow: "0 6px 18px rgba(15,23,42,0.12)",
                zIndex: 50,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <p style={{ margin: 8, fontWeight: 600 }}>{username || "Guest"}</p>
              <hr style={{ margin: "6px 0", border: "none", borderTop: "1px solid rgba(0,0,0,0.06)" }} />
              <p
                style={{ margin: 8, cursor: "pointer", color: "#dc2626", fontWeight: 600 }}
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          )}

        </div>

        {/* Example dropdown
        {isProfileDropdownOpen && (
          <div className="dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p>Logout</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Menu;
