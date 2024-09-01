import React from "react";

const NavBarMiddleComponent = ({ props }) => {
  return (
    <div className="flex p-4  ">
      <div className="p-4 justify-center content-center bg-gray-300 rounded-full hover:bg-[#ffb237] transition-colors duration-1000 ease-in-out ">
        <props.icon />
      </div>
      <div className="flex flex-col m-3 p-2">
        <div className="text-gray-500">{props.text}</div>
        <div className="font-semibold">{props.value}</div>
      </div>
    </div>
  );
};

export default NavBarMiddleComponent;
