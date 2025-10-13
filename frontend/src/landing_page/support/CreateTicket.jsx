import React, { useState } from "react";

function CreateTicket() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    customSubject: "",
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

    // Prefer customSubject if provided
    const finalSubject = formData.customSubject || formData.subject;

    if (!finalSubject) {
      alert("Please select or enter a subject.");
      return;
    }

    const ticketData = {
      ...formData,
      subject: finalSubject,
    };
    console.log("Ticket Created:", ticketData);
    alert("Your ticket has been created!");

    setFormData({ name: "", email: "", subject: "", customSubject: "", description: "" });
  };

  return (
  <div className="container-fluid mt-5 px-3">
  <div className="row justify-content-center">
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 p-0">
      <form onSubmit={handleSubmit} className="p-3 shadow rounded bg-light">
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

        <div className="mb-3">
          <label className="form-label">Or Enter Custom Subject</label>
          <input
            type="text"
            name="customSubject"
            value={formData.customSubject}
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
