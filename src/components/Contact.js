import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="">
        <h1 className="text-center mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Napište nám
        </h1>
        <form className="flex flex-row">
          <div>
            <label>Jméno a příjmení*</label>
            <input
              className="bg-slate-100"
              placeholder="Povinné"
              type="text"
              maxLength="255"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
