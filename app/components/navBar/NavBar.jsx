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
      text: "Sunday - Closed",
      value: "Mon - Sat(9.00 - 6.00)",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between mx-20 bg-gray-200 ">
        <div className="flex bg-[#ffb237] px-4">
          <div className="justify-center content-center">
            <Image src="/company-logo.png" width={40} height={40} alt="logo" />
          </div>
          <div className="justify-center content-center">NimbusNex</div>
        </div>
        <div>
          <NavBarMiddleComponent
            props={{
              icon: navBarMiddleComponentValues[0].icon,
              text: navBarMiddleComponentValues[0].text,
              value: navBarMiddleComponentValues[0].value,
            }}
          />
        </div>
        <div>
          {" "}
          <NavBarMiddleComponent
            props={{
              icon: navBarMiddleComponentValues[1].icon,
              text: navBarMiddleComponentValues[1].text,
              value: navBarMiddleComponentValues[1].value,
            }}
          />
        </div>
        <div className="flex justify-center content-center">
          <NavBarSocialMediaLinks />
        </div>
      </div>
      <div className=" mx-20">
        <NavBarBottomComponent />
      </div>
    </div>
  );
};

export default NavBar;
