import React from "react";
import About_pic1 from "../assets/About_pic1.jpeg";

const About = () => {
  return (
    <div className="font-display about-container 2xl:container 2xl:mx-auto lg:pt-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row-reverse m-auto justify-between">
        <div className="w-full lg:w-5/12 flex flex-col justify-center ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            O nás
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Zabýváme se diagnostikou a léčbou všech alergických onemocnění, jako
            jsou alergická rýma, alergický zánět spojivek, bronchiální astma,
            potravinové alergie, alergické kožní projevy, alergické projevy po
            bodnutí hmyzem. Věnujeme se i základním poruchám imunity.
            <br />
          </p>
        </div>
        <div className="w-full md:w-2/3 lg:w-5/12">
          <img
            className="clip w-full h-full rounded-md"
            src={About_pic1}
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            V ordinaci se na Vás těší
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Součástí vyšetřovacích metod jsou kožní testy, spirometrie,
            stanovení vydechovaného oxidu dusnatého , pulzní oxymetrie,
            bronchodilatační testy a rozsáhlá laboratorní diagnostika.
            Specifické místo zaujímá alergenová imunoterapie.
          </p>
        </div>
        <div className="w-full lg:w-5/12 lg:pt-8 flex flex-col shadow-lg md:flex-row justify-center gap-4">
          <div className="p-4 pb-6 flex flex-col items-center flex-shrink-0">
            <img
              className="md:block hidden rounded-full"
              src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
              alt="Alexa featured Img"
            />
            <img
              className="md:hidden block"
              src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
              alt="Alexa featured Img"
            />
            <p className="font-medium text-xl text-center leading-5 text-gray-800 mt-4">
              MUDr. Ivana Minaříková
            </p>
          </div>
          <div className="p-4 pb-6 flex flex-col items-center flex-shrink-0">
            <img
              className="md:block hidden rounded-full"
              src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
              alt="Olivia featured Img"
            />
            <img
              className="md:hidden block"
              src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
              alt="Olivia featured Img"
            />
            <p className="font-medium text-xl text-center leading-5 text-gray-800 mt-4">
              Olga Pařízková
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
