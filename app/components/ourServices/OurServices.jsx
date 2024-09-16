"use client";
import React, { useEffect, useRef, useState } from "react";
import PentagonIcon from "@mui/icons-material/Pentagon";
import BiotechIcon from "@mui/icons-material/Biotech";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import OurServicesComponent from "./OurServicesComponent";
import WhiteBottomToTop from "../buttons/WhiteBottomToTop";
import "../../css/ourServices/OurServices.css";

const OurServices = () => {
  const [isView, setIsView] = useState({
    icon: false,
    iconText: false,
    header: false,
    text: false,
    subHead: false,
    subText: false,
    btn: false,
  });

  const refs = {
    icon: useRef(null),
    iconText: useRef(null),
    header: useRef(null),
    text: useRef(null),
    subHead: useRef(null),
    subText: useRef(null),
    btn: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsView((prevState) => ({
              ...prevState,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.keys(refs).forEach((key) => {
      if (refs[key].current) {
        observer.observe(refs[key].current);
      }
    });

    return () => {
      Object.keys(refs).forEach((key) => {
        if (refs[key].current) {
          observer.unobserve(refs[key].current);
        }
      });
    };
  }, []);

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
        <div className="flex my-5 justify-start">
          <div
            className={`rotate-90 text-[#ffb237] mr-1 pentagonAnimation ${
              isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.icon}
            data-id="icon"
          >
            <PentagonIcon />
          </div>
          <div
            className={`${
              isView.iconText ? "showItem textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.iconText}
            data-id="iconText"
          >
            <div className="titleAnimationLeftToRight"></div>
            <div className="uppercase ">Our Services</div>
          </div>
        </div>
        <div className="my-4 py-4 flex flex-col lg:flex-row lg:justify-between justify-center items-center ">
          <div
            className={`text-5xl font-bold ${
              isView.header ? "showItem textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.header}
            data-id="header"
          >
            Providing complete <br />
            Professional IT Services
          </div>
          <div
            className={`max-w-[100%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[40%] ${
              isView.text ? "showItem textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            Nemo enim ipsam voluptatem quia voluptas sit asper natur aut odit
            aut fugit, sed quia consequuntur magni dolor qui ratione business
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row md:justify-center md:items-center md:mx-8 mx-[10%] `}
      >
        {servicesData.map((serviceData) => (
          <div key={serviceData.id} className="m-2">
            <OurServicesComponent props={serviceData} />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center py-8">
        <div
          className={`text-6xl font-bold my-6 ${
            isView.subHead ? "showItem textComeFromBottomLeft" : "hideItem"
          }`}
          ref={refs.subHead}
          data-id="subHead"
        >
          Were Ready Grow your IT Solution !
        </div>
        <div
          className={`mx-[5%] ${
            isView.subText ? "showItem textComeFromRightBottom" : "hideItem"
          }`}
          ref={refs.subText}
          data-id="subText"
        >
          Nemo enim ipsam voluptatem quia voluptas sit asper natur aut odit aut
          fugit <br />
          sed quia consequuntur magni dolor qui ratione business
        </div>
        <div
          className={`mt-3 ${
            isView.btn ? "showItem slowPopUpText" : "hideItem"
          }`}
          ref={refs.btn}
          data-id="btn"
        >
          <WhiteBottomToTop props={{ text: " More Solution" }} />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
