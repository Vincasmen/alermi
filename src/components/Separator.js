import React from "react";

const Separator = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex-1 h-0.5 bg-gray-500 bg-gradient-to-r from-transparent to-gray-500 mx-4"></div>
      <div className="text-gray-300">
        {" "}
        {/* Volitelný text pro mizící efekt */}
        ALERMI
      </div>
      <div className="flex-1 h-0.5 bg-gray-500 bg-gradient-to-l from-gray-500 to-transparent mx-4"></div>
    </div>
  );
};

export default Separator;
