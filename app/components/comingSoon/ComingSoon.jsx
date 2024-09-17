import React from "react";
import "../../css/comingSoon/ComingSoon.css";
import Image from "next/image";
import WhiteTopToBottom from "../buttons/WhiteTopToBottom";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div
      className="relative image-container bg-cover bg-center h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 178, 55, 0.5), rgba(0, 0, 0, 0.75)), url("/comingSoon.png")`,
      }}
    >
      <div className="flex h-screen justify-center items-center flex-col w-screen lg:gap-10 md:gap-5 gap-2">
        <div className="">
          <Image
            src={"/logoType-7.png"}
            width={250}
            height={250}
            alt="logo"
            className="md:w-[320px] lg:w-[400px] xl:w-[500px]"
          />
        </div>
        <div className="flex justify-center min-w-[100%] items-center text-9xl font-extrabold">
          <svg width="100%" height="100%">
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="comingSoonText"
            >
              Coming Soon....
            </text>
          </svg>
        </div>
        <Link href="../../page.js">
          <WhiteTopToBottom props={{ text: "Back To Home" }} />
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
