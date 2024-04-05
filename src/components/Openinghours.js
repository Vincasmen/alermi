import React from "react";

const Openinghours = () => {
  return (
    <section
      id="openingHours"
      className=" flex flex-col h-screen px-4 m-auto w-full max-w-xl mx-auto py-16 gap-8"
    >
      <h2 className="font-action text-2xl font-bold mb-4 text-center">
        Otevírací doba ordinace
      </h2>
      <table className="font-display w-full border-collapse border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Den</th>
            <th className="border border-gray-300 px-4 py-2">Otevřeno</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Pondělí</td>
            <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
              12:00–18:00
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Úterý</td>
            <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
              8:00–12:30, 13:00–15:00
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Středa</td>
            <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
              8:00–12:30, 13:00–15:00
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Čtvrtek</td>
            <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
              7:00–14:00 <br /> (7:00-8:00 odběry, vakcinace, objednaní
              pacienti)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Pátek</td>
            <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
              8:00–13:00
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-nowrap">
              Sobota - Neděle
            </td>
            <td className="font-action border border-gray-300 px-4 py-2">
              ZAVŘENO
            </td>
          </tr>
        </tbody>
      </table>
      <div className="">
        <p>
          Prosíme o objednání po telefonické domluvě, telefonická domluva i v
          případě akutních stavů.
        </p>
        <br />
        <p>
          Objednací termín se snažíme dodržet, bohužel dopředu nelze odhadnout
          časovou náročnost předchozích vyšetření.
        </p>
        <br />
        <p>
          Nemůžete-li se dostavit na objednaný termín, prosíme o včasné
          přeobjednání nebo zrušení termínu.
        </p>
      </div>
    </section>
  );
};

export default Openinghours;
