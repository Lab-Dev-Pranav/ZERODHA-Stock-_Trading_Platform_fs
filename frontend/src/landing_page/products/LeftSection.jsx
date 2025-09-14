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
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={ImgUrl} />
        </div>
        <div className="col" style={{ padding: "40px 100px 0px 100px" }}>
          <br />
          <br />
          <h2>{ProductName}</h2>
          <p className="lh-lg">{ProductDiscreption}</p>

          {TryDemo == "" && LearnMore == "" ? (
            <p></p>
          ) : (
            <div className="row">
              <div className="col-4">
                <a
                  className="text-decoration-none"
                  href={TryDemo}
                  target="_blank"
                >
                  {ProductName == "Coin" ? (
                    <p>
                      Coin <i class="fa-solid fa-arrow-right"></i>
                    </p>
                  ) : (
                    <p>
                      Try demo <i class="fa-solid fa-arrow-right"></i>
                    </p>
                  )}
                </a>
              </div>

              {ProductName == "Coin" ? (
                <div className="col-8"></div>
              ) : (
                <div className="col-8">
                  <a
                    className="text-decoration-none"
                    href={LearnMore}
                    target="_blank"
                  >
                    Learn more <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              )}
            </div>
          )}

          <br />
          <div className="row">
            <div className="col-4">
              <a href={GooglePlay} target="_blank">
                <img src="media\googlePlayBadge.svg" alt="" />
              </a>
            </div>

            <div className="col-8">
              <a href={AppStore} target="_blank">
                <img src="media\appstoreBadge.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default LeftSection;
