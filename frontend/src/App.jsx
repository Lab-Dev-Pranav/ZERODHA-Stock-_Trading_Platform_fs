import HomePage from "./landing_page/home/HomePage.jsx";
import SignupPage from "./landing_page/signup/SignupPage.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";

import NotFound from "./landing_page/NotFound.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<SignupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
