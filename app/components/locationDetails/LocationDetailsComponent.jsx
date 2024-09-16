"use client";
import React, { useEffect, useRef, useState } from "react";

const LocationDetailsComponent = ({ props }) => {
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
    <div>
      <div className="flex items-center lg:gap-5 gap-3 ">
        <div
          className={`bg-gray-900 rounded-full md:p-4 p-2 border-2 border-white text-white hover:bg-white hover:border-black hover:text-black transition-all duration-300 ease-out ${
            isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
          }`}
          ref={refs.icon}
          data-id="icon"
        >
          <props.icon />
        </div>
        <div className="flex flex-col md:text-xl text-lg font-semibold hover:font-bold">
          <div
            className={`text-gray-700 ${
              isView.title ? "showItem textComeFromTopRight" : "hideItem"
            }`}
            ref={refs.title}
            data-id="title"
          >
            {props.title}
          </div>
          <div
            className={` ${
              isView.text ? "showItem textComeFromRightBottom" : "hideItem"
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

export default LocationDetailsComponent;
