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
      <div className="flex  justify-center shadow-lg rounded-md">
        <ul className="text-center m-auto text-neutral-600">
          <li className="bg-neutral-200 rounded-sm ">Pondělí 12:00–18:00</li>
          <li className="bg-neutral-100 my-2 rounded-sm">
            Úterý 8:00–12:30, 13:00–15:00
          </li>
          <li className="bg-neutral-200 rounded-sm">
            Středa 8:00–12:30, 13:00–15:00
          </li>
          <li className="bg-neutral-100 my-2 rounded-sm">
            Čtvrtek 7:00–14:00 <br /> (7-8: odběry, vakcinace, objednaní
            pacienti)
          </li>
          <li className="bg-neutral-200 rounded-sm">Pátek 8:00–13:00</li>
          <li className="bg-neutral-100 mt-2 rounded-sm">
            {" "}
            Sobota - Neděle ZAVŘENO
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Openinghours;
