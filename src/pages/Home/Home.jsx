import React from "react";

// Components
import HeroSection from "../../components/Home/HeroSection/HeroSection.jsx";
import Pricing from "../../components/Pricing/Pricing.jsx";
import ConvertCurrency from "../../components/ConvertCurrency/ConvertCurrency.jsx";
import Testimonials from "../../components/Testimonials/Testmonials.jsx";
import Newsletter from "../../components/Home/Newsletter/Newsletter.jsx";

// import { useStyles } from "./Home.style.js";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Pricing />
      <ConvertCurrency />
      <Testimonials />
      <Newsletter />
    </>
  );
}
