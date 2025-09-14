import React from "react";

function OptionalServices() {
  const services = [
    {
      service: "Tickertape",
      frequency: "Monthly / Annual",
      charges: "Free: 0 | Pro: 249/2399",
    },
    {
      service: "Smallcase",
      frequency: "Per transaction",
      charges: "Buy & Invest More: 100 | SIP: 10",
    },
    {
      service: "Kite Connect",
      frequency: "Monthly",
      charges: "Connect: 500 | Personal: Free",
    },
  ];

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Charges for optional value added services</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item, index) => (
              <tr key={index}>
                <td>{item.service}</td>
                <td>{item.frequency}</td>
                <td>{item.charges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default OptionalServices;
