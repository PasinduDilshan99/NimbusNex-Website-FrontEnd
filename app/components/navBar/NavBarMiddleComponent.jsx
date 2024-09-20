"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBarMiddleComponent = ({ props }) => {
  const [isValue, setIsValue] = useState(false);
    const subject = "Inquiry about your services";
  const body = "Dear Company,\n\nI would like to inquire about...";

  useEffect(() => {
    if (props.id === 1) {
      setIsValue(true);
    }
  }, []);

  return (
    <div className="flex m-2 justify-center items-center ">
      <div className="p-4 justify-center content-center bg-gray-300 rounded-full hover:bg-[#ffb237] transition-colors duration-700 ease-in-out ">
        <div className="hover:scale-150 duration-500 text-black hover:text-white">
          <props.icon />
        </div>
      </div>
      <div className="flex-col m-3 p-2 lg:text-lg">
        <div className="hidden xl:flex text-gray-500">{props.text}</div>
        <div className="font-bold">
          {isValue ? (
            <a
              href={`mailto:${props.value}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`}
            >
              {props.value}
            </a>
          ) : (
            <div>{props.value}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarMiddleComponent;
