import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log("login res data - ",data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // window.location.href = "http://localhost:5173/";
        }, 2000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg p-4 rounded-4">
            <h2 className="text-center mb-4">Login Account</h2>
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-success btn-lg rounded-3"
                >
                  Submit
                </button>
              </div>

              {/* Signup Link */}
              {/* <div className="text-center mt-3">
                <span>
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-primary fw-bold">
                    Signup
                  </Link>
                </span>
              </div> */}
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
