// frontend/src/landing_page/register/Register.jsx
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("Register/Signup Form Data:", form);

    try {
      const res = await axios.post("http://localhost:4000/signup", form);
      console.log("Signup data sent", res.data); // log server response if needed
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={submit} style={styles.form}>
        <h2 style={styles.title}>Register</h2>
        <input
          name="email"
          value={form.email}
          onChange={change}
          placeholder="Email"
          required
          style={styles.input}
        />
        <div style={{ position: "relative" }}>
          <input
            name="password"
            value={form.password}
            onChange={change}
            placeholder="Password"
            type={showPassword ? "text" : "password"} // toggle type
            required
            style={{ ...styles.input, paddingRight: "40px" }}
          />
          <button type="button" onClick={togglePassword} style={styles.showBtn}>
            {showPassword ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </button>
        </div>
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f6fa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "350px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    padding: "12px 15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px 15px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  showBtn: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#007bff",
    fontWeight: "bold",
  },
};

// Optional hover effect
styles.button[":hover"] = {
  backgroundColor: "#45a049",
};

export default Register;
