import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productpage />} />
      {/* <Route path="/about" element={<Aboutpage/>} />
      <Route path="/contact" element={<Contactpage/>} /> */}
    </Routes>
  );
};

export default AppRoutes;
