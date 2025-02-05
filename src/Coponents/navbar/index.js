import React, { useState } from "react";
import "./style.css";
import { Affix } from "antd";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faLaptopFile, faPersonChalkboard, faVault } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Affix className="z-111111 h-auto" offsetTop={0} offsetBottom={0}>
      <div className="2xl:mx-auto">
        <div className="bg-[#f5f0e9]  rounded shadow-[4px_4px_4px_rgba(0,0,0,0.25)] py-5 px-7 ">
          <div className="z-11111 mx-auto flex justify-between items-center">
            {/* Logo and Company Name */}
            <NavLink to="/" className="flex items-center" end>
              {/* <div className="h-8 w-8 bg-blue-500 rounded-full"></div> */}
              <img className="h-10 w-32" src="vedam-homes-logo-2.png"  alt="logo" />
              {/* <img className="h-8 w-24 mix-blend-luminosity" src="10-01.png"  alt="logo" /> */}
              {/* <img className="h-8" src="logo-4.jpg" alt="logo" /> */}
              {/* <span className="text-lg ml-4 font-semibold text-gray-800">
                Vedam Homes
              </span> */}
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center  space-x-8">
              <NavLink
                to="/Building"
                end
                href="#building"
                className="text-gray-600 hover:text-blue-500"
              >
                Building
              </NavLink>
              <NavLink
                to="/Amenities"
                end
                className="text-gray-600 hover:text-blue-500"
              >
                Amenities
              </NavLink>
              <NavLink
                to="/Gallery"
                end
                className="text-gray-600 hover:text-blue-500"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/WhatSetUsApart"
                end
                className="text-gray-600 hover:text-blue-500"
              >
                What Set Us Apart
              </NavLink>
              <NavLink
                to="/Enquire"
                end
                className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Enquire
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div
              className="relative md:hidden text-gray-600"
              // onMouseEnter={() => setIsOpen(true)}
              onClick={() => setIsOpen(!isOpen)}
              // onBlur={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </div>
          </div>

          {/* Mobile Menu */}
          {false && (
            <div
              className="z-99 hover:z-100 absolute right-0 mt-2 bg-[#f5f0e9] shadow-lg rounded-md py-2 w-40"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <NavLink
                to="/Building"
                end
                className="z-99 block px-4 py-2 text-gray-600 hover:font-bold hover:text-md transition-all duration-200"
              >
                Building
              </NavLink>
              <NavLink
                to="/Amenities"
                end
                className="z-99 block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Amenities
              </NavLink>
              <NavLink
                to="/Gallery"
                end
                className="z-99 block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/WhatSetUsApart"
                end
                className="z-99 block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                What Set Us Apart
              </NavLink>
              <NavLink
                to="/Enquire"
                end
                className="z-99 block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Enquire
              </NavLink>
            </div>
          )}

          {/*  New Mobile menu */}
          {isOpen && (
            <div className={isOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8 bg-[#F5F0E9]"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    to="/Building"
                    end
                    className="block px-4 py-2 text-gray-600 uppercase  hover:font-bold hover:bg-gray-100"
                  >
                    Building
                    <FontAwesomeIcon className="ml-8" icon={faBuilding} /> 
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    to="/Amenities"
                    end
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 "
                  >
                    Amenities
                    <FontAwesomeIcon className="ml-8" icon={faLaptopFile} />
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    to="/Gallery"
                    end
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Gallery
                    <FontAwesomeIcon icon={faVault} className="ml-8" />
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    to="/WhatSetUsApart"
                    end
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    What Set Us Apart
                    <FontAwesomeIcon icon={faHandshake} className="ml-8" />
                  </NavLink>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <NavLink
                    to="/Enquire"
                    end
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Enquire
                    <FontAwesomeIcon className="ml-8" icon={faPersonChalkboard} />
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Affix>
  );
};

export default Navbar;
