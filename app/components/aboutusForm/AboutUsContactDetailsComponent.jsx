import React from "react";

const AboutUsContactDetailsComponent = ({ props }) => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="bg-black rounded-full p-4 border-2 border-white text-white">
          <props.icon />
        </div>
        <div className="flex flex-col text-lg ">
          <div className="text-gray-700 text-xl font-semibold">
            {props.title}
          </div>
          <div>{props.subTitle}</div>
          <div>{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContactDetailsComponent;
