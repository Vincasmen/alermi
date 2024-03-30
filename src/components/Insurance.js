import React from "react";
import Data from "../data"; // Importujeme komponentu Data

const Insurance = () => {
  return (
    <div className="container mx-auto py-9 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mapování dat z komponenty Data */}
        {Data.map((insuranceItem) => (
          <div key={insuranceItem.id} className="flex flex-col items-center">
            <img
              src={insuranceItem.image}
              alt={insuranceItem.title}
              className="w-32 h-32 object-contain mb-2"
            />
            <p>{insuranceItem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insurance;
