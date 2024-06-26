const insurance = [
  {
    id: 1,
    question: "Co si přinést na první vyšetření?",
    answer: (
      <ul>
        <li>kartičku zdravotní pojišťovny</li> <br />
        <li>doporučení odesílajícího lékaře</li> <br />
        <li>
          výsledky laboratorního vyšetření a nálezy z provedených vyšetření v
          poslední době
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    question: "Kde nás najdete?",
    answer: (
      <div>
        <p>
          Zastávka tramvají č. 3 , 5 , 9 , 11 - zastávka Jugoslávská přímo u
          Domu zdraví Parkování osobních vozidel je možné na parkovišti uvnitř
          areálu.
        </p>
        <iframe
          className="w-full m-auto justify-center p-4 rounded-sm"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.808470801625!2d16.622897535443126!3d49.20419281690067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294f54a163ad5%3A0x4dd05185757b7e6a!2zRMWvbSB6ZHJhdsOtIE1hcnR5IEhhcnRsb3bDqQ!5e0!3m2!1scs!2scz!4v1712073453106!5m2!1scs!2scz"
          width="600"
          height="450"
          style={{ color: "black" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    ),
  },
  {
    id: 3,
    question: "Užitečné odkazy",
    answer: (
      <ul className="flex justify-center py-2 flex-col gap-4 items-center m-auto font-display ">
        <li>
          <a
            href="https://www.pylovasluzba.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pylová služba
          </a>
        </li>
        <li>
          <a
            href="https://www.pyly.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pyly
          </a>
        </li>
        <li></li>
      </ul>
    ),
  },
];

export default insurance;
