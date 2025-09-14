import React from "react";

function RightSection({ ImgUrl, Title, Discreption, Link }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ padding: "40px 100px 0px 100px" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>{Title}</h2>
          <p className="lh-lg">{Discreption}</p>

          <a className="text-decoration-none" href={Link} target="_blank">
            {Title == "Kite Connect API" ? (
              <p>
                Kite Connect <i class="fa-solid fa-arrow-right"></i>
              </p>
            ) : (
              <p>
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </p>
            )}
          </a>
        </div>
        <div className="col">
          <img src={ImgUrl} />
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default RightSection;
