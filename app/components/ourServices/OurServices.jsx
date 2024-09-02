import React from "react";
import PentagonIcon from "@mui/icons-material/Pentagon";
import BiotechIcon from "@mui/icons-material/Biotech";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import OurServicesComponent from "./OurServicesComponent";

const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      icon: BiotechIcon,
      title: "Tech Analysis",
      text: "There are many variations of passages of lorem Ipsum not simply random",
    },
    {
      id: 2,
      icon: DataSaverOffIcon,
      title: "IT Consultancy",
      text: "There are many variations of passages of lorem Ipsum not simply random",
    },
    {
      id: 3,
      icon: NetworkWifiIcon,
      title: "Data Structuring",
      text: "There are many variations of passages of lorem Ipsum not simply random",
    },
    {
      id: 4,
      icon: WifiTetheringIcon,
      title: "Market Analysis",
      text: "There are many variations of passages of lorem Ipsum not simply random",
    },
  ];

  return (
    <div className="flex flex-col bg-[#ffe2b3] pt-16">
      <div className="mx-[10%]">
        <div className="flex my-5 lg:justify-start justify-center">
          <div>
            <PentagonIcon />
          </div>
          <div className="uppercase">Our Services</div>
        </div>
        <div className="my-4 py-4 flex flex-col lg:flex-row lg:justify-between justify-center items-center ">
          <div className="text-5xl font-bold">
            Providing complete <br />
            Professional IT Services
          </div>
          <div className="max-w-[100%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[40%]">
            Nemo enim ipsam voluptatem quia voluptas sit asper natur aut odit
            aut fugit, sed quia consequuntur magni dolor qui ratione business
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:justify-center md:items-center">
        {servicesData.map((serviceData) => (
          <div key={serviceData.id} className="m-2">
            <OurServicesComponent props={serviceData} />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center py-8">
        <div className="text-6xl font-bold my-6">
          Were Ready Grow your IT Solution !
        </div>
        <div>
          Nemo enim ipsam voluptatem quia voluptas sit asper natur aut odit aut
          fugit <br />
          sed quia consequuntur magni dolor qui ratione business
        </div>
        <div className="py-4 px-7 bg-[#ffb237] mx-4 rounded-xl hover:bg-white hover:text-black transition-colors duration-1000 ease-in-out my-5">
          More Solution
        </div>
      </div>
    </div>
  );
};

export default OurServices;
