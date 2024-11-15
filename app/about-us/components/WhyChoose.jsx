"use client";
import React, { useEffect, useRef, useState } from "react";
import StormIcon from "@mui/icons-material/Storm";

const WhyChoose = () => {
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

  return (
    <div className="min-h-full flex flex-col justify-center p-8 bg-[#28241f] text-white px-[10%] py-20">
      <div className="flex">
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
          <div> Why Choose Nimbusnex?</div>
        </div>
      </div>
      <div
        className={`capitalize xl:text-5xl lg:text-4xl  text-3xl  font-bold mt-3 ${
          isView.header ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.header}
        data-id="header"
      >
        Why Choose Nimbusnex?
      </div>
      <div
        className={`md:text-lg  mt-3 ${
          isView.text ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.text}
        data-id="text"
      >
        Nimbusnex combines technical expertise with a commitment to client
        satisfaction. We work collaboratively with each client, ensuring that
        our solutions are aligned with their business goals and provide
        long-lasting value. Our dedication to excellence and continuous
        improvement makes us a trusted partner in digital transformation.
      </div>
    </div>
  );
};

export default WhyChoose;
