"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../logo/Logo";
import WhiteLogo from "../logo/WhiteLogo";
import Link from "next/link";

const ScrollNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const links = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About Us", link: "/about-us" },
    { id: 3, text: "Services", link: "/services" },
    { id: 4, text: "Projects", link: "/projects" },
    { id: 5, text: "Blog", link: "/blogs" },
    { id: 6, text: "Contact Us", link: "/contact-us" },
  ];

  return (
    <div className="fixed  top-0 left-0 right-0 backdrop-blur-md p-4 z-50 md:flex md:justify-center  text-white bg-black">
      <div className="container px-4 flex justify-between items-center lg:px-10  ">
        <div className="md:bg-[#ffb237] bg-white  text-lg font-bold  rounded px-2 lg:px-6 py-3 hover:bg-[#ffb237] md:hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300">
          <div className="flex items-center max-h-6  md:max-h-10">
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
                className="my-4 w-[150px] md:w-[120px] lg:w-[200px]"
              />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex space-x-10 lg:px-4">
          {links.map((link) => (
            <div key={link.id}>
              <a
                href={link.link}
                className=" hover:text-[#ffb237] hover:font-bold transition-all duration-500 hover:text-xl  ease-in-out  font-semibold"
              >
                {link.text}
              </a>
            </div>
          ))}
        </div>
        <div>
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
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="flex flex-col py-6  space-y-4 md:px-10 md:hidden text-black bg-black"
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

export default ScrollNavBar;
