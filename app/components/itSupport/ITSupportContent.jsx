"use client";
import React, { useEffect, useRef, useState } from "react";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CompanyOverviewService from "../companyOverviewComponents/CompanyOverviewService";
import StormIcon from "@mui/icons-material/Storm";

const ITSupportContent = () => {
  const [isView, setIsView] = useState({
    icon: false,
    iconText: false,
    header: false,
    text: false,
    feature1: false,
    feature2: false,
  });

  const refs = {
    icon: useRef(null),
    iconText: useRef(null),
    header: useRef(null),
    text: useRef(null),
    feature1: useRef(null),
    feature2: useRef(null),
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
    <div className="min-h-full flex flex-col justify-center p-8 bg-[#28241f] text-white">
      <div className="flex ">
        <div
          className={`mr-4 text-yellow-300 circleRotation ${
            isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
          }`}
          ref={refs.icon}
          data-id="icon"
        >
          <StormIcon />
        </div>
        <div
          className={`uppercase ${
            isView.iconText ? "showItem textComeFromRightToLeft" : "hideItem"
          }`}
          ref={refs.iconText}
          data-id="iconText"
        >
          <div className="titleAnimationLeftToRightWhite"></div>
          <div> Quality IT Support</div>
        </div>
      </div>
      <div
        className={`capitalize xl:text-5xl lg:text-4xl  text-3xl  font-bold mt-3 ${
          isView.header ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.header}
        data-id="header"
      >
        Improve Quality
        <br />
        with Technology
      </div>
      <div
        className={`md:text-lg  mt-3 ${
          isView.text ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.text}
        data-id="text"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, Heres what to
        know about how to start a consulting business
      </div>
      <div className="p-4 flex mt-1">
        <div className="flex items-center">
          <div className="flex flex-col  mr-4">
            <div
              className={`max-w-[80%] self-center ${
                isView.feature1
                  ? "showItem textComeFromLeftToRight"
                  : "hideItem"
              }`}
              ref={refs.feature1}
              data-id="feature1"
            >
              <CompanyOverviewService
                props={{
                  icon: services[0].icon,
                  title: services[0].title,
                  text: services[0].text,
                }}
              />
            </div>
            <div
              className={`max-w-[80%] self-center ${
                isView.feature2
                  ? "showItem textComeFromLeftToRight"
                  : "hideItem"
              }`}
              ref={refs.feature2}
              data-id="feature2"
            >
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
  );
};

export default ITSupportContent;
