import React from "react";
import Rostlina_1 from "../assets/Rostlina_1.jpeg";

const Hero = () => {
  const scrollToOpeningHours = () => {
    const openingHoursSection = document.getElementById("openingHours");
    openingHoursSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="font-action hero-container relative m-auto flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full lg:max-w-[1240px]">
        <div className="hidden lg:block inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-sm lg:shadow-none md:h-96 lg:h-full "
            src={Rostlina_1}
            alt="Rostlina"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Alermi
            </p>
            <h2 className=" mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Vítejte na stránkách
              <br />
              alergologické ordinace{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Alermi Brno
              </span>
            </h2>
            <p className="font-display pr-5 mb-5 text-base text-gray-700 md:text-lg">
              S naším týmem alergologů a moderní diagnostikou vám pomůžeme
              identifikovat příčiny vašich obtíží a navrhnout efektivní léčbu.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className=" rounded-xl bg-gradient-to-br from-[#00df9a] to-[#86efac] px-5 py-3 text-base font-bold text-white hover:scale-110 hover:shadow-lg transition ease-in-out duration-500 hover:shadow-[#838383]/50"
              >
                Objednejte se
              </a>
              <button
                onClick={scrollToOpeningHours}
                className="ml-5 rounded-xl bg-white px-5 py-3 text-base font-medium text-black outline outline-color-slate-500 outline-1 hover:scale-110 hover:shadow-lg transition ease-in-out duration-500 hover:shadow-[#838383]/50"
              >
                Otevírací doba
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
