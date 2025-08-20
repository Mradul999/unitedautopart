import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CallToAction from "./Components/CallToAction";
import WhyChooseUs from "./Components/WhyChooseUs";
import DriveshaftSection from "./Components/DriveshaftSection";
import OurProducts from "./Components/OurProducts";
import BrandSlider from "./Components/BrandSlider";
import ReliableSource from "./Components/ReliableSource";
import InventorySection from "./Components/InventorySection";
import TestimonialSection from "./Components/TestimonialSection";

import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AuthPage from "./pages/AuthPage";
import ReturnPolicy from "./pages/ReturnPolicy";
import WarrantyPolicy from "./pages/WarrantyPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AllProducts from "./pages/AllProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <CallToAction />
      <WhyChooseUs />
      <DriveshaftSection />
      <OurProducts />
      <BrandSlider />
      <ReliableSource />
      <InventorySection />
      <TestimonialSection />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
