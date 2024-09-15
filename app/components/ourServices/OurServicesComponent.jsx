import Image from "next/image";
import React from "react";

const OurServicesComponent = ({ props }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white p-4 py-8 text-center pb-0 relative">
      <div className="py-2">
        <props.icon />
      </div>
      <div className="py-2 text-2xl font-bold">{props.title}</div>
      <div className="py-2">{props.text}</div>
      <div className="w-3/4" style={{ height: '1%' }}>
        <Image
          src="/services-v1-shape1.png"
          width={200}
          height={200}
          alt="text"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default OurServicesComponent;
