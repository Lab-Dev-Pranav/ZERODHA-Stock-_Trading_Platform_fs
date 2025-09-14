import React, { useState } from "react";

function CreateTicket() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const commonSubjects = [
    "Login Issue",
    "Payment Problem",
    "Account Verification",
    "Trade Execution",
    "Technical Bug",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket Created:", formData);
    alert("Your ticket has been created!");
    setFormData({ name: "", email: "", subject: "", description: "" });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <h3 className="mb-4 text-center">Create Support Ticket</h3>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Common Subject Dropdown */}
            <div className="mb-3">
              <label className="form-label">Select a Common Subject</label>
              <select
                className="form-select"
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                value={formData.subject}
              >
                <option value="">-- Select Subject --</option>
                {commonSubjects.map((sub, index) => (
                  <option key={index} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Subject Input (if needed) */}
            <div className="mb-3">
              <label className="form-label">Or Enter Custom Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                placeholder="Ticket subject"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="Describe your issue"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
