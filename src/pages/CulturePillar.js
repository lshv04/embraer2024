// src/pages/CulturePillar.js
import React from "react";
import { Outlet } from "react-router-dom";
import Nav2 from "../components/Nav2";

const CulturePillar = () => {
  return (
    <div className="pilar">
      <Nav2 />

      <Outlet />
    </div>
  );
};

export default CulturePillar;
