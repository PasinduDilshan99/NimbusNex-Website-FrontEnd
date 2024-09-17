import Image from "next/image";
import React from "react";

const TopImage = ({props}) => {
  return (
    <div
      style={{
        backgroundImage: `url('/page-header-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-[40vh]"
    >
      <div className="min-h-[30vh] flex flex-col items-center justify-center text-6xl text-white font-bold">
        <div className="text-2xl lg:text-3xl xl:4xl">{props.title}</div>
        <div className="text-4xl lg:text-6xl xl:7xl">{props.content}</div>
      </div>
      <div className="absolute hidden lg:flex right-0 bottom-0 animate-move-left-right opacity-70"> 
        <Image
          src="/page-header-shape1.png"
          alt="text"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default TopImage;
