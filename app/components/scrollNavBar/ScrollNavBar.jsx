"use client";
import Image from "next/image";
import React, { useState } from "react";

const ScrollNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: 1, text: "Services", link: "/" },
    { id: 2, text: "About", link: "/about-us" },
    { id: 3, text: "Projects", link: "/" },
    { id: 4, text: "Page", link: "/" },
    { id: 5, text: "Blog", link: "/" },
    { id: 6, text: "Contact", link: "/contact-us" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md p-4 z-50  text-white bg-black">
      <div className="container mx-auto flex justify-between items-center ">
        <button className="bg-[#ffb237] text-lg font-bold rounded px-6 py-3 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          <div className="flex items-center">
            <div>
              <Image
                src="/company-logo.png"
                width={40}
                height={40}
                alt="logo"
              />
            </div>
            <div className="px-4">NimbusNex</div>
          </div>
        </button>

        <div className="hidden md:flex space-x-10 px-4">
          {links.map((link) => (
            <div key={link.id}>
              <a href={link.link} className="hover:text-[#ffb237]">
                {link.text}
              </a>
            </div>
          ))}
        </div>
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

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col py-6 space-y-4  px-10 md:hidden text-white"
        >
          {links.map((link) => (
            <div key={link.id} className="">
              <a href={link.link} className="hover:text-[#ffb237]">
                {link.text}
              </a>
              <hr className="w-full border-gray-300 border-t-1 my-2 hover:border-[#ffb237]" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScrollNavBar;
