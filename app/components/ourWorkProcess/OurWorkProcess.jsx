"use client";
import React, { useEffect, useRef, useState } from "react";
import PentagonIcon from "@mui/icons-material/Pentagon";
import WorkProcessComponent from "./WorkProcessComponent";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import StairsIcon from "@mui/icons-material/Stairs";
import Image from "next/image";

const OurWorkProcess = () => {
  const [isView, setIsView] = useState({
    icon: false,
    iconText: false,
    header: false,
    arrow: false,
  });

  const refs = {
    icon: useRef(null),
    iconText: useRef(null),
    header: useRef(null),
    arrow: useRef(null),
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

  const workProcessList = [
    {
      id: "01",
      icon: SelfImprovementIcon,
      title: "Your Concept",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
    {
      id: "02",
      icon: SentimentVerySatisfiedIcon,
      title: "Task Process",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
    {
      id: "03",
      icon: StairsIcon,
      title: "Launch",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
  ];
  return (
    <div>
      <div className="lg:mt-0 md:mt-10 mt-20">
        <div className="flex flex-col md:items-center p-4 py-20">
          <div className="uppercase p-4 flex md:justify-center items-center ">
            <div
              className={` text-[#ffb237] pentagonAnimation ${
                isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
              }`}
              ref={refs.icon}
              data-id="icon"
            >
              <PentagonIcon />
            </div>
            <div
              className={`font-bold md:text-lg px-4 ${
                isView.icon ? "showItem textComeFromRightToLeft" : "hideItem"
              }`}
              ref={refs.icon}
              data-id="icon"
            >
              <div className="titleAnimationLeftToRight"></div>
              <div>OUR WORK PROCESS</div>
            </div>
          </div>
          <div
            className={`font-extrabold xl:text-6xl lg:text-5xl md:text-4xl text-3xl md:text-center p-4 ${
              isView.icon ? "showItem textComeFromBottomToTop" : "hideItem"
            }`}
            ref={refs.icon}
            data-id="icon"
          >
            We Solve the Task Very Easily
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-center gap-5 items-center">
            {workProcessList.map((workProcessData, index) => (
              <div key={workProcessData.id} className="">
                <div className="flex justify-between items-center p-2 ">
                  <WorkProcessComponent props={workProcessData} className="abc" />
                  {index !== workProcessList.length - 1 && (
                    <Image
                      className={`pl-4 hidden lg:block ${
                        isView.arrow
                          ? "showItem textComeFromLeftToRight"
                          : "hideItem"
                      }`}
                      src="/work-process-v1-shape3.png"
                      height={100}
                      width={100}
                      alt="text"
                      ref={refs.arrow}
                      data-id="arrow"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkProcess;
