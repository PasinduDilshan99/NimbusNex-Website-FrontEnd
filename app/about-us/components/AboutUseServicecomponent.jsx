"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "../../css/service/Service.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const AboutUseServicecomponent = ({ props }) => {
  const [isView, setIsView] = useState({
    image: false,
    icon: false,
    title: false,
    text: false,
    box: false,
  });
  const refs = {
    image: useRef(null),
    icon: useRef(null),
    title: useRef(null),
    text: useRef(null),
    box: useRef(null),
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
    <div className="flex w-full mx-[5%]">
      <div className={`lg:flex justify-center hidden`} ref={refs.image} data-id="image">
        <div className="image-black-gradient w-[350px] h-[350px]">
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            alt={props.text}
            className="border border-b-[#ffb237] border-b-8"
          />
        </div>
      </div>

      <div
        className={`bg-[#fdbd55] w-full m-2 `}
        ref={refs.box}
        data-id="box"
      >
        <div className="text-start">
          <div
            className={`m-2 my-5 text-center font-semibold md:text-3xl text-2xl ${
              isView.title ? "textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.title}
            data-id="title"
          >
            {props.title}
          </div>
          <div
            className={`mx-2 text-lg ${
              isView.text ? "textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            <FiberManualRecordIcon className="w-3 mx-2" />
            {props.texts.text1}
          </div>
          <div
            className={`mx-2 text-lg ${
              isView.text ? "textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            <FiberManualRecordIcon className="w-3 mx-2" />

            {props.texts.text2}
          </div>
          <div
            className={`mx-2 text-lg ${
              isView.text ? "textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            <FiberManualRecordIcon className="w-3 mx-2" />

            {props.texts.text3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUseServicecomponent;
