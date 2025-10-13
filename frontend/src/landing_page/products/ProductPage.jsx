import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Univers from "./Univers";

const products = [
  {
    type: "left",
    ImgUrl: "media/kite.png",
    ProductName: "Kite",
    ProductDiscreption:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    TryDemo: "https://kite-demo.zerodha.com/dashboard",
    LearnMore: "https://zerodha.com/products/kite",
    GooglePlay: "https://play.google.com/store/apps/details?id=com.zerodha.kite3",
    AppStore: "https://apps.apple.com/in/app/kite-zerodha/id1449453802",
  },
  {
    type: "right",
    ImgUrl: "media/console.png",
    Title: "Console",
    Discreption:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    Link: "https://zerodha.com/products/console",
  },
  {
    type: "left",
    ImgUrl: "media/coin.png",
    ProductName: "Coin",
    ProductDiscreption:
      "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    TryDemo: "https://coin.zerodha.com/",
    LearnMore: "",
    GooglePlay: "https://play.google.com/store/apps/details?id=com.zerodha.coin",
    AppStore: "https://apps.apple.com/in/app/coin-by-zerodha/id1392892554",
  },
  {
    type: "right",
    ImgUrl: "media/kiteconnect.png",
    Title: "Kite Connect API",
    Discreption:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    Link: "https://zerodha.com/products/api/",
  },
  {
    type: "left",
    ImgUrl: "media/varsity.png",
    ProductName: "Varsity mobile",
    ProductDiscreption:
      "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    TryDemo: "",
    LearnMore: "",
    GooglePlay: "https://play.google.com/store/apps/details?id=com.zerodha.varsity",
    AppStore: "https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753",
  },
];

function ProductPage() {
  return (
    <>
      <Hero />

      {/* Render Products Dynamically */}
      {products.map((product, index) =>
        product.type === "left" ? (
          <LeftSection key={index} {...product} />
        ) : (
          <RightSection key={index} {...product} />
        )
      )}

      <div className="container py-4">
        <div className="row">
          <div className="col">
            <h6 className="text-center">
              Want to know more about our technology stack? Check out the{" "}
              <a className="text-decoration-none" href="https://zerodha.tech">
                Zerodha.tech
              </a>{" "}
              blog.
            </h6>
          </div>
        </div>
      </div>

      <Univers />
    </>
  );
}

export default ProductPage;
