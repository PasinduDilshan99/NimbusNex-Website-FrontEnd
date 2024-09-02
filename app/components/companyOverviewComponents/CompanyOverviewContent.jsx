import React from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import CompanyOverviewService from "./CompanyOverviewService";
import AnimationIcon from "@mui/icons-material/Animation";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";

const CompanyOverviewContent = () => {
  const services = [
    {
      id: 1,
      icon: AccessibleForwardIcon,
      title: "Tech Solution",
      text: "There are many variations of passages of lorem",
    },
    {
      id: 2,
      icon: AccessibleIcon,
      title: "Quick support",
      text: "There are many variations of passages of lorem",
    },
  ];
  return (
    <div className="min-h-full flex  flex-col justify-start px-8">
      <div className="flex ">
        <div className="mr-4">
          <AnimationIcon />
        </div>
        <div className="uppercase">introduce Company</div>
      </div>
      <div className="capitalize text-4xl font-bold mt-3 ">
        Our Company <br /> specializesin IT Solutions
      </div>
      <div className="text-lg mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, Heres what to
        know about how to start a consulting business
      </div>
      <div className=" p-4 flex mt-3">
        <div className="flex items-center">
          <div className="flex flex-col  mr-4">
            <div>
              <CompanyOverviewService
                props={{
                  icon: services[0].icon,
                  title: services[0].title,
                  text: services[0].text,
                }}
              />
            </div>
            <hr />
            <div>
              <div>
                <CompanyOverviewService
                  props={{
                    icon: services[1].icon,
                    title: services[1].title,
                    text: services[1].text,
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#ffb237] p-8 flex justify-center flex-col items-center">
              <div className="h-16 w-16 rounded-full border-r-white border-8 flex items-center justify-center">
                <div className="">90%</div>
              </div>
              <div>IT Project Solution</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center p-2">
          <div className="bg-[#ffb237] rounded-full p-1 mx-2">
            <CheckIcon />
          </div>
          <div>
            Nor again is there anyone who loves or pursues or desires to obtain
          </div>
        </div>
        <div className="flex items-center p-2">
          <div className="bg-[#ffb237] rounded-full p-1 mx-2">
            <CheckIcon />
          </div>
          <div>Nam libero tempore, cum soluta nobis est eligendi optio</div>
        </div>
      </div>
      <div className="bg-[#ffb237] p-4 flex mt-2">
        <div>
          <Image src="/company-logo.png" width={30} height={30} alt="logo" className="mx-3" />
        </div>
        <div className="text-xl">FOR YOUR IT BUSINESS, WE MADE THINGS EASIER</div>
      </div>
    </div>
  );
};

export default CompanyOverviewContent;
