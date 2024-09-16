"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "../../css/service/Service.css";

const ServiceComponent = ({ props }) => {
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
    <div className="min-h-[300px] mb-10 relative md:mx-0 mx-[15%] overflow-hidden transition-transform duration-300 hover:scale-105 ">
      <div
        className={`flex justify-center ${
          isView.image ? "showItem textComeFromBottomLeft" : "hideItem"
        } `}
        ref={refs.image}
        data-id="image"
      >
        <div className="relative image-black-gradient w-[350px] h-[350px]">
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            alt={props.text}
            className="border border-b-[#ffb237] border-b-8"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={`absolute bottom-[75px] bg-white rounded-full z-[11] flex justify-center items-center p-4 ${
            isView.icon ? "showItem textComeFromBottomToTop" : "hideItem"
          }  hover:bg-black hover:text-[#ffb237] transition-all duration-500 `}
          ref={refs.icon}
          data-id="icon"
        >
          <props.icon className="hover:scale-150" />
        </div>
      </div>
      <div
        className={`absolute bottom-0 bg-[#fdbd55] z-10 flex justify-center items-center w-[calc(100%-40px)] mx-[20px] ${
          isView.box ? "showItem textComeFromBottomToTop" : "hideItem"
        }`}
        ref={refs.box}
        data-id="box"
      >
        <div className="text-center">
          <div
            className={`m-2 mt-5 font-semibold text-2xl ${
              isView.title ? "showItem textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.title}
            data-id="title"
          >
            {props.title}
          </div>
          <div
            className={`m-2 text-lg ${
              isView.text ? "showItem textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            {props.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
