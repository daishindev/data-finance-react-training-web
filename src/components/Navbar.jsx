import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <a href="#">REACT.</a>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 ">
          <a
            className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide box-border "
            href="#"
          >
            Home
          </a>
        </li>
        <li className="p-4 ">
          <a
            className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide box-border px-2"
            href="#"
          >
            Company
          </a>
        </li>
        <li className="p-4 ">
          <a
            className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide box-border "
            href="#"
          >
            Resources
          </a>
        </li>
        <li className="p-4 ">
          <a
            className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide box-border "
            href="#"
          >
            About
          </a>
        </li>
        <li className="p-4">
          <a
            className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide box-border "
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="fixed right-5 md:hidden cursor-pointer bg-[#000300] p-1 z-50"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-5">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <a
              className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a
              className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide"
              href="#"
            >
              Company
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a
              className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide"
              href="#"
            >
              Resources
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a
              className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide"
              href="#"
            >
              About
            </a>
          </li>
          <li className="p-4">
            <a
              className="hover:text-[#00df9a] hover:font-bold hover:tracking-wide"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
