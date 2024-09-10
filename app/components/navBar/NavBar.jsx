"use client";
import React, { useState } from "react";
import NavBarSocialMediaLinks from "./NavBarSocialMediaLinks";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import NavBarMiddleComponent from "./NavBarMiddleComponent";
import Image from "next/image";
import NavBarBottomComponent from "./NavBarBottomComponent";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const isWeekend = currentDay === 0 || currentDay === 6;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const status = isWeekend ? "Closed" : "Open";
  const openHours = isWeekend
    ? "Mon - Fri (9.00 - 22.00)"
    : `${days[currentDay]} (9.00 - 22.00)`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navBarMiddleComponentValues = [
    {
      id: 1,
      icon: EmailIcon,
      text: "You may send an email",
      value: "abc@gmail.com",
    },
    {
      id: 2,
      icon: QueryBuilderIcon,
      text: `${days[currentDay]} - ${status}`,
      value: openHours,
    },
  ];
  const links = [
    { id: 1, text: "Services", link: "/" },
    { id: 2, text: "About", link: "/about-us" },
    { id: 3, text: "Projects", link: "/" },
    { id: 4, text: "Page", link: "/" },
    { id: 5, text: "Blog", link: "/" },
    { id: 6, text: "Contact", link: "/contact-us" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md z-50  text-black lg:flex lg:justify-center bg-[#fffbe3] w-full">
      <div className="flex justify-between px-4 items-center w-full">
        <div className="md:grid md:grid-rows-[auto] w-full">
          <div className="flex justify-between md:mx-20 ">
            {/* LOGO */}
            <div className="flex bg-[#ffb237] m-6 md:px-4 md:p-0 p-2 md:rounded-lg transition-transform duration-300 hover:scale-105  ">
              <div className="justify-center content-center">
                <Image
                  src="/company-logo.png"
                  width={30}
                  height={30}
                  alt="logo"
                  className="mr-2"
                />
              </div>
              <div className="justify-center content-center text-xl hover:font-semibold duration-100">
                NimbusNex
              </div>
            </div>
            {/* MIDDLE COMPONENT */}
            <div className="hidden lg:flex lg:justify-between">
              {navBarMiddleComponentValues.map((navBarMiddleComponentValue) => (
                <div key={navBarMiddleComponentValue.id}>
                  <NavBarMiddleComponent props={navBarMiddleComponentValue} />
                </div>
              ))}
            </div>
            <div className="hidden md:flex justify-center content-center">
              <NavBarSocialMediaLinks />
            </div>
          </div>
          {/* BOTTOM COMPONENT */}
          <div className="hidden md:flex md:mx-20">
            <div className="w-full">
              <NavBarBottomComponent />
            </div>
          </div>
        </div>
        {/* BUTTON */}
        <div className="">
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* MOBILE VIEW */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col py-6 space-y-4  md:px-10 md:hidden text-black"
        >
          {links.map((link) => (
            <div key={link.id}>
              <a href={link.link} className="text-white hover:text-red-600">
                {link.text}
              </a>
              <hr className="w-full border-gray-200 border-t-1 my-2 " />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
