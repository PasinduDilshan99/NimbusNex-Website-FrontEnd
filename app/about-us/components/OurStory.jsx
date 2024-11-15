"use client";
import React, { useEffect, useRef, useState } from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AnimationIcon from "@mui/icons-material/Animation";
import "../../css/common/ComeText.css";
import "../../css/common/CommonAnimation.css";
import CompanyOverview from "./CompanyOverview";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const OurStory = () => {
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
      title: "Our Mission",
      text: "To empower businesses by providing reliable, innovative IT solutions that drive growth and efficiency. At Nimbusnex, we’re dedicated to transforming ideas into powerful digital solutions that adapt to the evolving demands of the modern world.",
    },
    {
      id: 2,
      icon: AccessibleIcon,
      title: "Our Vision",
      text: "To be a trusted leader in transformative IT solutions, setting new standards for innovation, reliability, and client success across industries worldwide.",
    },
    {
      id: 3,
      icon: AccessibleIcon,
      title: "Our values",
      text: "",
    },
  ];

  const ourValues = [
    {
      id: 1,
      title: "Innovation",
      text: "We stay at the forefront of technology, using the latest tools and techniques to provide impactful solutions.",
    },
    {
      id: 2,
      title: "Integrity",
      text: "Honesty and transparency are fundamental to how we do business. We believe in open communication and delivering on our promises.",
    },
    {
      id: 3,
      title: "Client Success",
      text: "Our clients’ success is our success. We are committed to building solutions that meet their needs today and in the future.",
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
    <div className={`min-h-full flex flex-col justify-start md:px-8 px-4`}>
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
          <div>About Nimbusnex</div>
        </div>
      </div>
      {/* Intro */}
      <div
        className={` text-4xl font-bold mt-3 ${
          isInView.intro ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.intro}
        data-id="intro"
      >
        Our Story
        <br />
      </div>
      <div
        className={`text-lg mt-3 ${
          isInView.intro ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.intro}
        data-id="intro"
      >
        Founded by a team of passionate technologists, Nimbusnex was created
        with a vision to bridge the gap between cutting-edge technology and
        practical business needs. We believe that every business, regardless of
        size or industry, deserves access to the transformative power of
        technology. With a focus on delivering tailored, innovative solutions,
        Nimbusnex is here to empower organizations to reach new heights.
      </div>
      Services
      <div className="py-4 px-1 flex mt-3 ">
        <div className="flex items-center ">
          <div className="flex flex-col mr-4 ">
            {/* Service 1 */}
            <div>
              <CompanyOverview
                props={{
                  icon: services[0].icon,
                  title: services[0].title,
                  text: services[0].text,
                }}
              />
            </div>
            <hr />
            {/* Service 2 */}
            <div className="self-start">
              <CompanyOverview
                props={{
                  icon: services[1].icon,
                  title: services[1].title,
                  text: services[1].text,
                }}
              />
            </div>
            <hr />
            {/* service 3 */}
            <div className="flex flex-col">
              <div className="md:self-start">
                <CompanyOverview
                  props={{
                    icon: services[2].icon,
                    title: services[2].title,
                    text: services[2].text,
                  }}
                />
              </div>

              <div>
                {ourValues.map((value) => {
                  return (
                    <div key={value.id}>
                      <div className="md:ml-24 text-center md:text-left mb-4">
                        <div className="text-xl font-semibold mb-1">
                          {value.title}
                        </div>
                        <div className="ml-4">
                          <FiberManualRecordIcon className="w-3 mr-2"/>
                          {value.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
