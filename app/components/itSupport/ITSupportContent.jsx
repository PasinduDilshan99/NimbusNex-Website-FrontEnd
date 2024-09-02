import React from "react";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CompanyOverviewService from "../companyOverviewComponents/CompanyOverviewService";
import StormIcon from "@mui/icons-material/Storm";

const ITSupportContent = () => {
  const services = [
    {
      id: 1,
      icon: AgricultureIcon,
      title: "Tech Solution",
      text: "There are many variations of passages of lorem",
    },
    {
      id: 2,
      icon: AirportShuttleIcon,
      title: "IT Support",
      text: "There are many variations of passages of lorem",
    },
  ];
  return (
    <div className="min-h-full flex flex-col justify-center p-8 bg-[#130b09b4] text-white">
      <div className="flex ">
        <div className="mr-4 text-yellow-300">
          <StormIcon />
        </div>
        <div className="uppercase">Quality IT Support</div>
      </div>
      <div className="capitalize text-5xl font-bold mt-3 ">
        Improve Quality
        <br />
        with Technology
      </div>
      <div className="text-lg mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, Heres what to
        know about how to start a consulting business
      </div>
      <div className="p-4 flex mt-3">
        <div className="flex items-center">
          <div className="flex flex-col  mr-4">
            <div className="max-w-[80%]">
              <CompanyOverviewService
                props={{
                  icon: services[0].icon,
                  title: services[0].title,
                  text: services[0].text,
                }}
              />
            </div>
            <div>
              <div className="max-w-[80%]">
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
        </div>
      </div>
    </div>
  );
};

export default ITSupportContent;
