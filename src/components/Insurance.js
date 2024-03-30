import React from "react";
import rbp_logo from "../assets/Insurance_comp/rbp_logo.jpg";

const Insurance = () => {
  return (
    <div className="insurance-container 2xl:container 2xl:mx-auto lg:pt-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div>
        <img src={rbp_logo} alt="RBP_logo" />
      </div>
    </div>
  );
};

export default Insurance;
