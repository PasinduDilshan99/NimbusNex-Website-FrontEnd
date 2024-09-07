import React from "react";
import GppGoodIcon from "@mui/icons-material/GppGood";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: "/intro-v1-img4.jpg",
      icon: GppGoodIcon,
      title: "Digital Security",
      text: "Dolor sit amet consect etur",
    },
    {
      id: 2,
      image: "/intro-v1-img5.jpg",
      icon: StarPurple500Icon,
      title: "Trusted Agency",
      text: "Dolor sit amet consect etur",
    },
    {
      id: 3,
      image: "/intro-v1-img6.jpg",
      icon: LaptopMacIcon,
      title: "IT Outsourcing",
      text: "Dolor sit amet consect etur",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row md:justify-evenly md:items-center">
      {servicesData.map((serviceData) => (
        <div key={serviceData.id} className=" ">
          <ServiceComponent props={serviceData} />
        </div>
      ))}
    </div>
  );
};

export default Services;
