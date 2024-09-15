import Image from "next/image";
import React from "react";

const FooterCompanyDetails = () => {
  return (
    <div className="flex flex-col ">
      <div className="text-3xl flex items-center">
        <div className="pr-2">
          <Image src="/company-logo.png" height={50} width={50} alt="logo" />
        </div>
        <div className="text-xl font-bold">NimbusNex</div>
      </div>
      <div className="pt-5">
        Over 20 years of experience we’ll ensure you get the best guidance.
      </div>
    </div>
  );
};

export default FooterCompanyDetails;
