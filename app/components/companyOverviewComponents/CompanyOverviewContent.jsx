"use client";
import React, { useEffect, useRef, useState } from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import CompanyOverviewService from "./CompanyOverviewService";
import AnimationIcon from "@mui/icons-material/Animation";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import "../../css/common/ComeText.css";
import "../../css/common/CommonAnimation.css";

const CompanyOverviewContent = () => {
  const [isInView, setIsInView] = useState({
    header: false,
    intro: false,
    service1: false,
    service2: false,
    project: false,
    checkItem1: false,
    checkItem2: false,
    footer: false,
  });

  const refs = {
    header: useRef(null),
    intro: useRef(null),
    service1: useRef(null),
    service2: useRef(null),
    project: useRef(null),
    checkItem1: useRef(null),
    checkItem2: useRef(null),
    footer: useRef(null),
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView((prevState) => ({
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

  return (
    <div className={`min-h-full flex flex-col justify-start px-8`}>
      {/* Header */}
      <div className="flex" ref={refs.header} data-id="header">
        <div
          className={`mr-4 ${
            isInView.header ? "showItem textComeFromLeftToRight" : "hideItem"
          }`}
        >
          <AnimationIcon className="circleRotation" />
        </div>
        <div
          className={`uppercase ${
            isInView.header ? "showItem textComeFromRightToLeft" : "hideItem"
          }`}
        >
          <div className="titleAnimationLeftToRight"></div>
          <div> introduce Company</div>
        </div>
      </div>

      {/* Intro */}
      <div
        className={`capitalize text-4xl font-bold mt-3 ${
          isInView.intro ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.intro}
        data-id="intro"
      >
        Our Company <br /> specializes in IT Solutions
      </div>
      <div
        className={`text-lg mt-3 ${
          isInView.intro ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.intro}
        data-id="intro"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, Heres what to
        know about how to start a consulting business
      </div>

      {/* Services */}
      <div className="p-4 flex mt-3">
        <div className="flex items-center">
          <div className="flex flex-col mr-4">
            {/* Service 1 */}
            <div
              className={`${
                isInView.service1
                  ? "showItem textComeFromRightToLeft"
                  : "hideItem"
              }`}
              ref={refs.service1}
              data-id="service1"
            >
              <CompanyOverviewService
                props={{
                  icon: services[0].icon,
                  title: services[0].title,
                  text: services[0].text,
                }}
              />
            </div>
            <hr />
            {/* Service 2 */}
            <div
              className={`${
                isInView.service2
                  ? "showItem textComeFromRightToLeft"
                  : "hideItem"
              }`}
              ref={refs.service2}
              data-id="service2"
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

          {/* Project */}
          <div>
            <div
              className={`bg-[#ffb237] p-8 flex justify-center flex-col items-center ${
                isInView.project
                  ? "showItem textComeFromRightToLeft"
                  : "hideItem"
              }`}
              ref={refs.project}
              data-id="project"
            >
              <div className="h-16 w-16 rounded-full border-r-white border-8 flex items-center justify-center">
                <div className="">90%</div>
              </div>
              <div>IT Project Solution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Check Items */}
      <div className="flex flex-col">
        {/* Check Item 1 */}
        <div
          className={`flex items-center p-2 ${
            isInView.checkItem1
              ? "showItem textComeFromRightToLeft"
              : "hideItem"
          }`}
          ref={refs.checkItem1}
          data-id="checkItem1"
        >
          <div className="bg-[#ffb237] rounded-full p-1 mx-2  hover:bg-black hover:text-white transition-colors duration-500">
            <CheckIcon className="hover:scale-125" />
          </div>
          <div>
            Nor again is there anyone who loves or pursues or desires to obtain
          </div>
        </div>
        {/* Check Item 2 */}
        <div
          className={`flex items-center p-2 ${
            isInView.checkItem2
              ? "showItem textComeFromRightToLeft"
              : "hideItem"
          }`}
          ref={refs.checkItem2}
          data-id="checkItem2"
        >
          <div className="bg-[#ffb237] rounded-full p-1 mx-2  hover:bg-black hover:text-white transition-colors duration-500">
            <CheckIcon className="hover:scale-125" />
          </div>
          <div>Nam libero tempore, cum soluta nobis est eligendi optio</div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`bg-[#ffb237] p-4 flex items-center mt-2 ${
          isInView.footer ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.footer}
        data-id="footer"
      >
        <div>
          <Image
            src="/company-logo.png"
            width={30}
            height={30}
            alt="logo"
            className="mx-3"
          />
        </div>
        <div
          className={`md:text-xl text-lg font-semibold  px-4`}
          ref={refs.footer}
          data-id="footer"
        >
          FOR YOUR IT BUSINESS, WE MADE THINGS EASIER
        </div>
      </div>
    </div>
  );
};

export default CompanyOverviewContent;
