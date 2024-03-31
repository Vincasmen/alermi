import React from "react";
import Data from "../data"; // Importujeme komponentu Data

const Insurance = () => {
  return (
    <div className="font-display container mx-auto py-9 px-4 ">
      <div className="grid grid-cols-1 m-auto  sm:w-auto sm:m-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mapování dat z komponenty Data */}
        {Data.map((insuranceItem) => (
          <div
            key={insuranceItem.id}
            className="flex shadow-lg flex-col items-center p-4"
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
                className="w-48 h-32 object-contain mb-2 "
              />
            </a>
            <p className="pb-6 font-medium text-center md:hidden">
              {insuranceItem.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insurance;