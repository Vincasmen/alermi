import React from "react";
import Data from "../data"; // Importujeme komponentu Data

const Insurance = () => {
  return (
    <section className=" font-display Insurance-container m-auto px-4 ">
      <h1 className="my-5 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Smluvní pojišťovny
      </h1>
      <div className="flex flex-col justify-center items-center m-auto w-11/12">
        {/* Mapování dat z komponenty Data */}
        {Data.map((insuranceItem) => (
          <div
            key={insuranceItem.id}
            className="flex shadow-lg flex-col items-center p-4 w-full m-auto rounded-md"
          >
            {" "}
            <a
              href={insuranceItem.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insuranceItem.image}
                alt={insuranceItem.alt}
                className="w-48 h-32 object-contain m-2 hover:scale-110 ease-in-out duration-300"
              />
            </a>
            <p className="font-display my-2 font-medium text-center md:hidden">
              {insuranceItem.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insurance;
