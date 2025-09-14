import React from "react";

function DematAMC() {
  const amcData = [
    { value: "Up to ₹4 lakh", amc: "FREE*", free: true },
    {
      value: "₹4 lakh – ₹10 lakh",
      amc: "₹ 100 per year, charged quarterly*",
      free: false,
    },
    {
      value: "Above ₹10 lakh",
      amc: "₹ 300 per year, charged quarterly",
      free: false,
    },
  ];

  return (
    <div className="container mt-4">
      <br />
      <br />
      <br />
      <h4 className="mb-3">Demat AMC (Annual Maintenance Charge)</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody>
            {amcData.map((item, index) => (
              <tr key={index}>
                <td>{item.value}</td>
                <td>
                  {item.free ? (
                    <span className="badge bg-success px-3 py-2">
                      {item.amc}
                    </span>
                  ) : (
                    item.amc
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA,{" "}
        <a href="#" className="text-primary">
          click here.
        </a>
      </p>
      <br />
      <br />
      <br />
    </div>
  );
}

export default DematAMC;
