import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline/";
import { Bars2Icon } from "@heroicons/react/24/outline/";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-[9999] left-0 right-0 top-0 bg-white fixed">
      <div className="container px-8 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform  lg:text-3xl hover:text-gray-700 " href="#">
              Brand
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-black focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              {isOpen ? <XMarkIcon className="w-8 h-8 text-red-600 " /> : <Bars2Icon className="w-8 h-8 text-deep-purple-accent-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-8 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#projects">
              Projects
            </a>
            <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
              Skills
            </a>
            <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
              Contact
            </a>
            <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
              About
            </a>
          </div>

          <div className="flex justify-center md:block">
            <a className="relative text-gray-700 transition-colors duration-300 transform  hover:text-gray-600 " href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 3H5L5.00924 3.54656C5.37334 4.55491 6.24334 5.44491 7.25159 5.8091L11.7282 8.04287L11.7282 13.9571L7.25159 16.1909C6.24334 16.5551 5.37334 17.4451 5.00924 18.4534L5 18.9966H3V21H19V18.9966H17L16.9908 18.4534C16.6266 17.4451 15.7566 16.5551 14.7482 16.1909L10.2748 13.9571L10.2748 8.04287L14.7482 5.8091C15.7566 5.44491 16.6266 4.55491 16.9908 3.54656L17 3.00342V3H3Z"
                  fill="#2C2D2E"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
