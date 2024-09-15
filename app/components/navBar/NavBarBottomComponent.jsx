"use client";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import WhiteTopToBottom from "../buttons/WhiteTopToBottom";

const NavBarBottomComponent = () => {
  const [searchBarStatus, setSearchBarStatus] = useState(false);
  const searchBarRef = useRef(null);

  const links = [
    { id: 1, text: "Services", link: "/" },
    { id: 2, text: "About", link: "/about-us" },
    { id: 3, text: "Projects", link: "/" },
    { id: 4, text: "Page", link: "/" },
    { id: 5, text: "Blog", link: "/" },
    { id: 6, text: "Contact", link: "/contact-us" },
  ];

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setSearchBarStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center text-white bg-black p-2 text-lg w-full def">
      <div className="flex lg:w-[60%] w-[80%]">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="grow hover:text-[#ffb237] hover:font-bold transition-transform duration-500 hover:scale-105  ease-in-out  flex justify-center items-center font-semibold"
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className="flex px-3 items-center justify-center">
        <div className="hidden lg:flex">
          <WhiteTopToBottom props={{ text: "Contact Us" }} />
        </div>

        <div
          ref={searchBarRef}
          className={`cursor-pointer ${searchBarStatus ? "w-56" : "w-16"}`}
        >
          <div className="flex items-center">
            {searchBarStatus && (
              <input
                type="text"
                placeholder="Search Here...."
                className="w-full py-2 px-7 rounded-xl text-black"
              />
            )}
            <div
              className="scale-150 m-2"
              onClick={() => {
                setSearchBarStatus(!searchBarStatus);
              }}
            >
              <div className="transition-transform duration-500 ease-in-out hover:text-[#ffb237] hover:scale-125">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarBottomComponent;
