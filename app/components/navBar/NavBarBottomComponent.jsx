import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const NavBarBottomComponent = () => {
  const links = [
    { id: 1, text: "Demos", link: "/" },
    { id: 2, text: "Services", link: "/" },
    { id: 3, text: "About", link: "/about-us" },
    { id: 4, text: "Projects", link: "/" },
    { id: 5, text: "Page", link: "/" },
    { id: 6, text: "Blog", link: "/" },
    { id: 7, text: "Contact", link: "/contact-us" },
  ];
  return (
    <div className="flex justify-between text-white bg-black p-4">
      <div className="flex justify-center content-center ">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="px-4 p-2 hover:text-[#ffb237] transition-colors duration-1000 ease-in-out"
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className="flex px-3">
        <div className="px-7  bg-[#ffb237] p-2 mx-4 rounded-xl hover:bg-white hover:text-black">Contact Us</div>
        <div className="p-2">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBarBottomComponent;
