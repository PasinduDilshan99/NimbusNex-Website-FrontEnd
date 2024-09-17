"use client";
import React, { useEffect, useRef, useState } from "react";
import NavBarSocialMediaLinks from "./NavBarSocialMediaLinks";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import NavBarMiddleComponent from "./NavBarMiddleComponent";
import Image from "next/image";
import NavBarBottomComponent from "./NavBarBottomComponent";
import Logo from "../logo/Logo";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
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
      text: "Email Us",
      value: "info@nimbusnex.com",
    },
    {
      id: 2,
      icon: QueryBuilderIcon,
      text: `${days[currentDay]} - ${status}`,
      value: openHours,
    },
  ];

  const links = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About Us", link: "/about-us" },
    { id: 3, text: "Services", link: "/services" },
    { id: 4, text: "Projects", link: "/projects" },
    { id: 5, text: "Blog", link: "/blogs" },
    { id: 6, text: "Contact Us", link: "/contact-us" },
  ];

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 text-black lg:flex lg:justify-center bg-[#fffbe3] w-full textComeFromTop">
      <div className="flex justify-between px-4 items-center w-full">
        <div className="md:grid md:grid-rows-[auto] w-full">
          <div className="flex  justify-between md:mx-20 ">
            {/* LOGO */}
            <div className="flex m-6 bg-[#ffb338] rounded-xl md:px-4 md:p-0 p-2 md:rounded-lg transition-transform duration-300 hover:scale-105">
              <div className="justify-center hidden md:flex content-center">
                {/* <Image
                  src="/newLogoBlack.png"
                  width={35}
                  height={35}
                  alt="logo"
                  className="m-4 "
                /> */}
              </div>
              <Link
                className="justify-center content-center lg:text-xl text-lg hover:font-semibold duration-100"
                href="/"
              >
                {/* <Logo /> */}
                <Image
                  src="/logoOB_word.png"
                  width={150}
                  height={150}
                  alt="logo"
                  className="my-4 w-[150px] md:w-[200px] lg:w-[300px]"
                />
              </Link>
            </div>
            {/* MIDDLE COMPONENT */}
            <div className="hidden xl:flex lg:justify-between">
              {navBarMiddleComponentValues.map((navBarMiddleComponentValue) => (
                <div
                  key={navBarMiddleComponentValue.id}
                  className="flex justify-center"
                >
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
              className={`w-10 h-12 ${
                isMenuOpen ? "hidden" : "block"
              } hover:text-[#ffb237] transition-all hover:scale-125 duration-300`}
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
          </button>
          <button
            className="md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-10 h-12 ${
                isMenuOpen ? "block" : "hidden"
              } hover:text-red-600 transition-all hover:scale-125 duration-300`}
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
          ref={menuRef}
          id="mobile-menu"
          className="flex flex-col py-6 space-y-4 md:px-10 md:hidden text-black bg-black"
        >
          {links.map((link) => (
            <div key={link.id}>
              <a
                href={link.link}
                className="text-white text-lg pl-6 hover:text-[#ffb237] transition-all hover:text-xl hover:scale-125 duration-300"
              >
                {link.text}
              </a>
              <hr className="w-full border-gray-200 border-t-1 my-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
