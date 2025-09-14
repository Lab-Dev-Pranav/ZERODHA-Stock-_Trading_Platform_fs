import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h1 className="display-4 fw-bold text-danger mb-3">404</h1>
      <h3 className="mb-2">Page Not Found</h3>
      <p className="text-muted mb-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        ⬅ Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
