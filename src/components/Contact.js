import React from "react";

const Contact = () => {
  return (
    <section className="contact-container w-full  max-w-xl m-auto px-4">
      <div className="">
        <h1 className="text-center mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Napište nám
        </h1>
        <form className="flex flex-col gap-6 w-full justify-center m-auto items-center">
          <div className="flex flex-col gap-6 lg:flex-row lg:m-auto lg:justify-center  w-full">
            <div className="flex flex-col">
              <label className="font-display pb-1">
                Jméno a příjmení<span className="text-xs">*</span>
              </label>
              <input
                className="bg-slate-100 p-4 rounded-sm"
                placeholder="Povinné"
                type="text"
                maxLength="255"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-display pb-1">Email*</label>
              <input
                className="bg-slate-100 p-4 rounded-sm"
                placeholder="Povinné"
                type="email"
                maxLength="255"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-display pb-1">Telefon*</label>
              <input
                className="bg-slate-100 p-4 rounded-sm"
                placeholder="Povinné"
                type="tel"
                maxLength="255"
              />
            </div>
          </div>
          <div className="flex flex-col md:w-full">
            <label className="font-display pb-1">Zpráva</label>
            <textarea
              className="resize-none bg-slate-100 p-4 rounded-sm"
              autocapitalize
              rows="5"
              wrap="hard"
            ></textarea>
          </div>
          <button
            className=" rounded-xl bg-gradient-to-br from-[#00df9a] to-[#86efac] px-5 py-3 text-base font-extrabold text-white hover:scale-110 hover:shadow-lg transition ease-in-out duration-500 hover:shadow-[#838383]/50"
            type="submit"
          >
            Odeslat
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
