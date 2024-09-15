import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Image from "next/image";

const CompanyVideo = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/video-v1-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-[40vh] max-w-[80%] mx-auto flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 animate-ripple bg-[#ffb237] rounded-full"></div>

          <div className="relative w-20 h-20 bg-[#ffb237] rounded-full flex justify-center items-center">
            <div>
              <PlayCircleIcon className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        <div className="text-white text-5xl font-bold mt-4">
          We are IT Solution Specialists.
        </div>
      </div>
      <div className="absolute right-0 bottom-0  opacity-70"> 
        <Image
          src="/video-v1-shape3.png"
          alt="text"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default CompanyVideo;
