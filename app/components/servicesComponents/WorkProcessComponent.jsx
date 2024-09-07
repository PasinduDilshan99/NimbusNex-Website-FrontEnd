import React from "react";

const WorkProcessComponent = ({ props }) => {
  return (
    <div className="h-[300px] mb-10 relative bg-gray-300 mt-12 flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="absolute top-[-30px] bg-[#fdbd55] rounded-full z-20 flex justify-center items-center p-4  border-black border-2">
          <props.icon />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-4 text-center">
        <div className="font-semibold text-2xl">{props.title}</div>
        <div className="text-lg">{props.text}</div>
      </div>

      <div className="absolute bottom-0 bg-[#0c0c0a] z-10 flex justify-center items-center w-full">
        <div className="text-center text-[#fdbd55]">
          <div className="m-2 mt-5 font-semibold text-2xl">{props.id}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcessComponent;
