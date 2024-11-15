"use client";
import React, { useEffect, useRef, useState } from "react";
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
      texts: {
        text1: "Proactive Protection",
        text2: "Comprehensive Services",
        text3: "Client-Centric Security",
      },
    },
    {
      id: 2,
      image: "/intro-v1-img5.jpg",
      icon: StarPurple500Icon,
      title: "Trusted Agency",
      texts: {
        text1: "Integrity and Transparency",
        text2: "Client Success Focus",
        text3: "Enduring Partnerships",
      },
    },
    {
      id: 3,
      image: "/intro-v1-img6.jpg",
      icon: LaptopMacIcon,
      title: "IT Outsourcing",
      texts: {
        text1: "Flexible Solutions",
        text2: "Cost-Effective Expertise",
        text3: "Efficient Project Delivery",
      },
    },
  ];
  return (
    <div
      className={`flex flex-col lg:flex-row md:justify-evenly md:items-center `}
    >
      {servicesData.map((serviceData) => (
        <div key={serviceData.id} className=" ">
          <ServiceComponent props={serviceData} />
        </div>
      ))}
    </div>
  );
};

export default Services;
