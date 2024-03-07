import React from "react";

const Openinghours = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8"></div>
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
          Otevírací doba
        </h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
        <ul className="text-center m-auto">
          <li>Pondělí</li>
          <li>Úterý</li>
          <li>Středa</li>
          <li>Čtvrtek</li>
          <li>Pátek</li>
          <li>Sobota-Neděle</li>
        </ul>
      </div>
    </div>
  );
};

export default Openinghours;
