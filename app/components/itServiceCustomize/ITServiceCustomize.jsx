"use client";
import React, { useEffect, useRef, useState } from "react";
import YellowBottomTopBlack from "../buttons/YellowBottomTopBlack";

const ITServiceCustomize = () => {
  const [isView, setIsView] = useState({
    title: false,
    box: false,
    text: false,
  });

  const refs = {
    title: useRef(null),
    box: useRef(null),
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
    <div
      className={`bg-[#ffb237] p-5 flex flex-col lg:flex-row lg:justify-between rounded-xl lg:items-center w-full mx-10 lg:mx-20 ${
        isView.box ? "showItem popUpText" : "hideItem"
      }`}
      ref={refs.box}
      data-id="box"
    >
      <div
        className={`font-bold lg:text-3xl text-2xl text-center lg:text-left md:mx-10 ${
          isView.title ? "showItem textComeFromLeftToRight" : "hideItem"
        }`}
        ref={refs.title}
        data-id="title"
      >
        IT Service Customized for your Agency
      </div>
      <div
        className={`uppercase md:p-4 md:mt-4 lg:mt-0 lg:ml-10 text-center ${
          isView.text ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.text}
        data-id="text"
      >
        <YellowBottomTopBlack props={{ text: "View All Portfolio" }} />
      </div>
    </div>
  );
};

export default ITServiceCustomize;
