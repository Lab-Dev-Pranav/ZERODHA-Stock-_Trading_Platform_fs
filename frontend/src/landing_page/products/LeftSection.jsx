import React from "react";

function LeftSection({
  ImgUrl,
  ProductName,
  ProductDiscreption,
  TryDemo,
  LearnMore,
  GooglePlay,
  AppStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={ImgUrl} alt={ProductName} className="img-fluid" />
        </div>

        {/* Content Column */}
        <div className="col-12 col-md-6">
          <h2 className="mb-3">{ProductName}</h2>
          <p className="lh-lg mb-4">{ProductDiscreption}</p>

          {/* Demo / Learn More Links */}
          {(TryDemo || LearnMore) && (
            <div className="d-flex flex-wrap mb-4 gap-3">
              {TryDemo && (
                <a
                  className="text-decoration-none btn btn-outline-primary"
                  href={TryDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ProductName === "Coin" ? "Coin" : "Try demo"}{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
              {ProductName !== "Coin" && LearnMore && (
                <a
                  className="text-decoration-none btn btn-outline-secondary"
                  href={LearnMore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
          )}

          {/* App Store Links */}
          <div className="d-flex flex-wrap gap-3">
            {GooglePlay && (
              <a href={GooglePlay} target="_blank" rel="noopener noreferrer">
                <img
                  src="media/googlePlayBadge.svg"
                  alt="Google Play"
                  className="img-fluid"
                  style={{ maxHeight: "50px" }}
                />
              </a>
            )}
            {AppStore && (
              <a href={AppStore} target="_blank" rel="noopener noreferrer">
                <img
                  src="media/appstoreBadge.svg"
                  alt="App Store"
                  className="img-fluid"
                  style={{ maxHeight: "50px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
