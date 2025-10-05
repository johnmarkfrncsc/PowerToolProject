import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import AddProductPage from "./pages/AddProductpage";
import CartPage from "./pages/CartPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productpage />} />
      <Route path="/add" element={<AddProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      {/* <Route path="/contact" element={<Contactpage/>} /> */}
    </Routes>
  );
};

export default AppRoutes;
