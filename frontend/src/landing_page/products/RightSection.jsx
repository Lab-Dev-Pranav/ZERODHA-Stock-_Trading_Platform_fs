import React from "react";

function RightSection({ ImgUrl, Title, Discreption, Link }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-12 col-md-6 order-2 order-md-1">
          <h2 className="mb-3">{Title}</h2>
          <p className="lh-lg mb-4">{Discreption}</p>

          <a
            className="text-decoration-none btn btn-outline-primary"
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Title === "Kite Connect API" ? "Kite Connect" : "Learn more"}{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Image Column */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-1 order-md-2">
          <img src={ImgUrl} alt={Title} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
