
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Company from "./Company.jsx";
import Product from "./Product.jsx";
import FertilizerShop from "./FertilizerShop.jsx";
import DeliveryDetails from "./DeliveryDetails.jsx";
import PaymentReceipt from "./PaymentReceipt.jsx";
import NavbarComponent from "./Navbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
     
      <header
        className="bg-primary text-white text-center py-4 mb-4 shadow-sm"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          letterSpacing: "1.5px",
        }}
      >
        Suraj Agro Chemical Industries
      </header>

      <NavbarComponent />

      
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Product />} />
          <Route path="/fertilizer-shop" element={<FertilizerShop />} />
          <Route path="/delivery-details" element={<DeliveryDetails />} />
          <Route path="/payment-receipt" element={<PaymentReceipt />} />
        </Routes>
      </main>
    </Router>
  </StrictMode>
);
