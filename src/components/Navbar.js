import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutUs");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOpeningHours = () => {
    const openingHoursSection = document.getElementById("openingHours");
    openingHoursSection.scrollIntoView({ behavior: "smooth" });
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Domů", route: "/" },
    { id: 2, text: "O nás", route: "#o_nas", onClick: scrollToAboutUs },
    {
      id: 3,
      text: "Ordinační doba",
      route: "#ordinacni_doba",
      onClick: scrollToOpeningHours,
    },
    { id: 4, text: "Kontakt", route: "#kontakt" },
    { id: 5, text: "Contact", route: "#contact" },
  ];

  return (
    <nav className="font-action bg-black w-full">
      <div className="navbar-container flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">ALERMI</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 text-nowrap hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              onClick={item.onClick} // Přidání onClick obsluhy události
            >
              <a href={item.route}>{item.text}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            ALERMI
          </h1>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
              onClick={item.onClick} // Přidání onClick obsluhy události
            >
              <a href={item.route}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
