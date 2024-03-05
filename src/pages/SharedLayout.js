import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
