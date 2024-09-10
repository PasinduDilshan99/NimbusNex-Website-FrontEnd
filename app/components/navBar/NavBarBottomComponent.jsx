import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const NavBarBottomComponent = () => {
  const links = [
    { id: 1, text: "Services", link: "/" },
    { id: 2, text: "About", link: "/about-us" },
    { id: 3, text: "Projects", link: "/" },
    { id: 4, text: "Page", link: "/" },
    { id: 5, text: "Blog", link: "/" },
    { id: 6, text: "Contact", link: "/contact-us" },
  ];
  return (
    <div className="flex justify-between items-center text-white bg-black p-2 text-lg w-full">
      <div className="flex w-[60%]">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="grow hover:text-[#ffb237] hover:font-bold transition-transform duration-300 hover:scale-105  ease-in-out  flex justify-center items-center font-semibold"
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className="flex px-3 items-center justify-center ">
        <div className="px-7  bg-[#ffb237] p-2 mx-4 rounded-xl hover:bg-white hover:text-black ">
          Contact Us
        </div>
        <div className="p-2">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBarBottomComponent;
