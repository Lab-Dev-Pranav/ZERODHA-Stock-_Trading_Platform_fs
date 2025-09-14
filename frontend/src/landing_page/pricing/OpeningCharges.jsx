import React from "react";

function OpeningCharges() {
  const chargesData = [
    { type: "Online account", charges: "FREE", free: true },
    { type: "Offline account", charges: "FREE", free: true },
    { type: "NRI account (offline only)", charges: "₹ 500", free: false },
    {
      type: "Partnership, LLP, HUF, or Corporate accounts (offline only)",
      charges: "₹ 500",
      free: false,
    },
  ];

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Charges for account opening</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            {chargesData.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>
                  {item.free ? (
                    <span className="badge bg-success px-3 py-2">FREE</span>
                  ) : (
                    item.charges
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OpeningCharges;
