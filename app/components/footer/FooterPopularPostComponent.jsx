"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const FooterPopularPostComponent = ({ props }) => {
  const [isView, setIsView] = useState({
    image: false,
    icon: false,
    date: false,
    text: false,
    line: false,
  });

  const refs = {
    image: useRef(null),
    icon: useRef(null),
    date: useRef(null),
    text: useRef(null),
    line: useRef(null),
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
    <>
      <div className="flex items-center">
        <div
          className={`pr-4 ${
            isView.image ? "showItem textComeFromLeftToRight" : "hideItem"
          }`}
          ref={refs.image}
          data-id="image"
        >
          <Image src={props.image} width={120} height={120} alt={props.text} />
        </div>
        <div className="flex flex-col ">
          <div className="text-gray-500 flex tex-lg">
            <div
              className={`${
                isView.icon ? "showItem textComeFromTopToBottom" : "hideItem"
              }`}
              ref={refs.icon}
              data-id="icon"
            >
              <CalendarMonthIcon />
            </div>
            <div
              className={`${
                isView.date ? "showItem textComeFromRightToLeft" : "hideItem"
              }`}
              ref={refs.date}
              data-id="date"
            >
              {props.date}
            </div>
          </div>
          <div
            className={`p-2 pr-0 text-xl font-semibold ${
              isView.text ? "showItem textComeFromBottomToTop" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            {props.text}
          </div>
        </div>
      </div>
      <hr
        className={`w-full border-gray-500 border-t-1 mt-4 lineCreateRightToLeft`}
      />
    </>
  );
};

export default FooterPopularPostComponent;
