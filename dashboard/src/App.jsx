import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Home from "./components/Home.jsx";

function App() {
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "http://localhost:5173/login";
    }
  }, []);

  return <Home />;
}
export default App;
