import React from "react";

const Openinghours = () => {
  return (
    <div
      id="openingHours"
      className="font-display flex flex-col px-4 m-auto max-w-xl mx-auto py-16"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Otevírací doba ordinace
      </h2>
      <table className="w-full border-collapse border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Den</th>
            <th className="border border-gray-300 px-4 py-2">Otevřeno</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Pondělí
            </td>
            <td className="border border-gray-300 px-4 py-2">12:00–18:00</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Úterý
            </td>
            <td className="border border-gray-300 px-4 py-2">
              8:00–12:30, 13:00–15:00
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Středa
            </td>
            <td className="border border-gray-300 px-4 py-2">
              8:00–12:30, 13:00–15:00
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Čtvrtek
            </td>
            <td className="border border-gray-300 px-4 py-2 md:text-nowrap">
              7:00–14:00 (7:00-8:00 odběry, vakcinace, objednaní pacienti)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Pátek
            </td>
            <td className="border border-gray-300 px-4 py-2">8:00–13:00</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-nowrap text-center">
              Sobota - Neděle
            </td>
            <td className="border border-gray-300 px-4 py-2">ZAVŘENO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Openinghours;
