import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

export default function App() {
  return (
    <footer className="font-display top-20 relative m-auto bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center bg-neutral-500 cursor-pointer justify-center m-auto text-center w-10 h-10 rounded-full text-lg start-0">
        <IoArrowUpOutline className="pulsate-fwd" />
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6 className="font-action mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Elektroniceké recepty
            </h6>
            <p>SMS žádost: 605 270 039</p>
            <p>e-mail: alergologie@alermi.cz</p>
            <h6 className="font-action mb-4 pt-3 flex items-center justify-center font-semibold uppercase md:justify-start">
              Kontakt na lékaře
            </h6>
            <p>minarikova@alermi.cz</p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="font-action mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Jak se k nám dostanete
            </h6>
            <p className="mb-4">
              <a
                href="https://maps.app.goo.gl/du9idrKthRQXDE7K7"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-neutral-600 dark:text-neutral-200"
              >
                Zastávka tramvají č. 3 , 5 , 9 , 11 - zastávka Jugoslávská přímo
                u Domu zdraví
                <br />
                Parkování osobních vozidel je možné na parkovišti uvnitř areálu.
              </a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="font-action mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Otevírací doba
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Pondělí 12:00–18:00
              </a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Úterý 8:00–12:30, 13:00–15:00
              </a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Středa 8:00–12:30, 13:00–15:00
              </a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Čtvrtek 7:00–14:00 <br /> (7-8: odběry, vakcinace, objednaní
                pacienti)
              </a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Pátek 8:00–13:00
              </a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Sobota - Neděle ZAVŘENO
              </a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="font-action mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Kontakty
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Dům zdraví Marty Hartlové
              <br />
              Jugoslávská 11/13, 613 00 Brno
              <br />
              3. podlaží
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              alergologie@alermi.cz
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +420 605 270 039
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="font-action bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2024 Copyright: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://portfolio-vincourek.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jan Vincourek
        </a>
      </div>
    </footer>
  );
}
