import React from "react";

const LocationDetailsComponent = ({ props }) => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="bg-gray-900 rounded-full p-4 border-2 border-white text-white"><props.icon/></div>
        <div className="flex flex-col text-xl font-semibold">
            <div className="text-gray-700 ">{props.title}</div>
            <div>{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailsComponent;
