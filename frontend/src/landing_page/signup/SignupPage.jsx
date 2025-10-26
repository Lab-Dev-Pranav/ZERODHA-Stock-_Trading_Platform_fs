// frontend/src/landing_page/signup/SignupPage.jsx
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function SignupPage() {
  const [showLogin, setShowLogin] = useState(true); // default view: login

  return (
    <div style={styles.container}>
      {showLogin ? <Login /> : <Signup />}
      <p style={styles.toggleText}>
        {showLogin ? "Don't have an account? " : "Already have an account? "}
        <span
          style={styles.toggleLink}
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "Create Account" : "Login"}
        </span>
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    backgroundColor: "#f5f6fa",
  },
  toggleText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  toggleLink: {
    color: "#4CAF50",
    cursor: "pointer",
    textDecoration: "underline",
    marginLeft: "5px",
  },
};


export default SignupPage;
