import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Home from "./components/Home.jsx";
import Login from "./Login";

function App() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    // Check token in cookie or localStorage
    const cookieToken = Cookies.get("token");
    const localToken = localStorage.getItem("token");
    if (cookieToken || localToken) setAuthed(true);
  }, []);

  if (!authed) return <Login onLogin={() => setAuthed(true)} />;

  return <Home />;
}

export default App;
