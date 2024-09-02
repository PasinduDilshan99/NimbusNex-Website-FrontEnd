import Image from "next/image";
import React from "react";

const CompanyOverviewImages = () => {
  return (
    <div className="relative">
      <div className="pr-14">
        <Image src="/about-v3-img1.jpg" width={620} height={607} />
      </div>
      <div className="w-4 h-10 bg-red-600 absolute top-0 right-0 mr-4 z-10"></div>
      <div className="w-4 h-36 bg-red-600 absolute top-14 right-0 mr-4 z-10"></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <Image src="/company-logo.png" width={40} height={40} alt="logo" />
      </div>
      <div className="absolute bottom-0 right-0 z-10 border border-white border-t-8 border-l-8">
        <Image src="/about-v3-img2.jpg" width={360} height={365} />
      </div>
    </div>
  );
};

export default CompanyOverviewImages;
