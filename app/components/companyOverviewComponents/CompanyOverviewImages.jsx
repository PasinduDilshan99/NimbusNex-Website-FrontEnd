import Image from "next/image";
import React from "react";

const CompanyOverviewImages = () => {
  return (
    <div className="relative ">
      <div className="pr-14">
        <Image src="/about-v3-img1.jpg" width={620} height={607} />
      </div>
      <div className="w-2 h-10 bg-red-600 absolute bottom-0 right-0"></div>
      <div className="absolute bottom-0 right-0 z-20 border border-white border-t-8 border-l-8">
        <Image src="/about-v3-img2.jpg" width={360} height={365} />
      </div>
    </div>
  );
};

export default CompanyOverviewImages;
