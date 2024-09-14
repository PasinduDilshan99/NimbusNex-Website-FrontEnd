import React from "react";

const NavBarMiddleComponent = ({ props }) => {
  return (
    <div className="flex m-2 justify-center items-center ">
      <div className="p-4 justify-center content-center bg-gray-300 rounded-full hover:bg-[#ffb237] transition-colors duration-700 ease-in-out ">
        <div className="hover:scale-150 duration-500 text-black hover:text-white">
          <props.icon />
        </div>
      </div>
      <div className="flex-col m-3 p-2 lg:text-lg">
        <div className="hidden xl:flex text-gray-500">{props.text}</div>
        <div className="font-bold">{props.value}</div>
      </div>
    </div>
  );
};

export default NavBarMiddleComponent;
