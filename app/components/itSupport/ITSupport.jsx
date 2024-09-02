import Image from "next/image";
import React from "react";
import ITSupportContent from "./ITSupportContent";

const ITSupport = () => {
  return (
    <div className="flex flex-col lg:flex-row md:justify-center mt-16 my-5 relative">
      <div className="h-full w-full">
        <Image
          src="/support-v2-img1.jpg"
          height={1000}
          width={1000}
          alt="text"
          className="w-full"
        />
      </div>

      <div className="flex relative">
        <div className="bg-[#f1dcba] p-3 rounded-full hover:bg-[#ffb237] transition-colors duration-1000 ease-in-out z-10 absolute lg:-left-7 lg:-top-7 rotate-animation top-0 left-0 hidden lg:block">
          <Image src="/company-logo.png" width={40} height={40} alt="logo" />
        </div>
        <ITSupportContent />
      </div>
    </div>
  );
};

export default ITSupport;
