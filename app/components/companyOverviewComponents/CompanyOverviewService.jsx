"use client";
import React, { useEffect, useRef, useState } from "react";

const CompanyOverviewService = ({ props }) => {
  const [isView, setIsView] = useState({
    icon: false,
    title: false,
    text: false,
  });

  const refs = {
    icon: useRef(null),
    title: useRef(null),
    text: useRef(null),
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
    <div className="flex md:flex-row  flex-col items-center justify-center md:text-left text-center p-2 ">
      <div
        className={`p-4 m-2 rounded-full bg-[#ffb237] hover:bg-black hover:text-white transition-colors duration-500 ${
          isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
        }`}
        ref={refs.icon}
        data-id="icon"
      >
        <props.icon className="hover:scale-125" />
      </div>
      <div className="flex flex-col">
        <div
          className={`font-semibold text-lg ${
            isView.title ? "showItem textComeFromRightToLeft" : "hideItem"
          }`}
          ref={refs.title}
          data-id="title"
        >
          {props.title}
        </div>
        <div
          className={` ${
            isView.text ? "showItem textComeFromRightToLeft" : "hideItem"
          }`}
          ref={refs.text}
          data-id="text"
        >
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default CompanyOverviewService;
