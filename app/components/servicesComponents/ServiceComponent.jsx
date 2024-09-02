import Image from "next/image";
import React from "react";

const ServiceComponent = ({ props }) => {
  return (
    <div className="min-h-[300px] mb-10 relative">
      <div>
        <Image
          src={props.image}
          width={350}
          height={350}
          alt={props.text}
          className="border border-b-[#ffb237] border-b-8"
        />
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-[75px] bg-white rounded-full z-20 flex justify-center items-center p-4">
          <props.icon />
        </div>
      </div>
      <div className="absolute bottom-0 bg-[#fdbd55] z-10 flex justify-center items-center w-[calc(100%-40px)] mx-[20px]">
        <div className="text-center">
          <div className="m-2 mt-5 font-semibold text-2xl">{props.title}</div>
          <div className="m-2 text-lg">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
