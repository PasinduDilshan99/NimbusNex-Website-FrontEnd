"use client";
import React, { useEffect, useRef, useState } from "react";

const WorkProcessComponent = ({ props }) => {
  const [isView, setIsView] = useState({
    icon: false,
    upperBox: false,
    title: false,
    text: false,
    lowerBox: false,
    num: false,
  });

  const refs = {
    icon: useRef(null),
    upperBox: useRef(null),
    title: useRef(null),
    text: useRef(null),
    lowerBox: useRef(null),
    num: useRef(null),
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
    <div
      className={`h-[300px] md:mb-10 relative bg-gray-100 mt-12 flex flex-col mx-10  justify-center hover:shadow-xl hover:shadow-[#fdbd55] hover:font-bold transition-transform duration-300 bg-gradient-to-t from-black to-transparent hover:bg-gradient-to-t hover:from-[#ffb237] hover:to-transparent ${
        isView.upperBox ? "showItem popUpText" : "hideItem"
      }`}
      ref={refs.upperBox}
      data-id="upperBox"
    >
      <div className="flex justify-center">
        <div
          className={`absolute top-[-30px] bg-[#fdbd55] rounded-full z-20 flex justify-center items-center p-4 hover:p-5 border-black border-2 hover:bg-black hover:border-white hover:text-white transition-all duration-300 ${
            isView.icon ? "showItem textComeFromTopToBottom" : "hideItem"
          }`}
          ref={refs.icon}
          data-id="icon"
        >
          <props.icon className="hover:scale-150" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-4 text-center">
        <div
          className={`font-semibold text-2xl  ${
            isView.title ? "showItem textComeFromRightToLeft" : "hideItem"
          }`}
          ref={refs.title}
          data-id="title"
        >
          {props.title}
        </div>
        <div
          className={`text-lg ${
            isView.text ? "showItem textComeFromLeftToRight" : "hideItem"
          }`}
          ref={refs.text}
          data-id="text"
        >
          {props.text}
        </div>
      </div>

      <div
        className={`absolute bottom-0 bg-[#0c0c0a] z-10 flex text-[#fdbd55] hover:text-black hover:bg-[#fdbd55] justify-center items-center w-full ${
          isView.lowerBox ? "showItem popUpText" : "hideItem"
        }`}
        ref={refs.lowerBox}
        data-id="lowerBox"
      >
        <div className="text-center ">
          <div
            className={`m-2 mt-5 font-semibold text-2xl ${
              isView.num ? "showItem textComeFromBottomToTop" : "hideItem"
            }`}
            ref={refs.num}
            data-id="num"
          >
            {props.id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcessComponent;
