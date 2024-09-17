"use client";
import React, { useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import "../../css/recentProjects/RecentProject.css";

const RecentProjectComponent = ({ props }) => {
  const [isView, setIsView] = useState({
    image: false,
    icon: false,
    iconText: false,
    title: false,
    text: false,
    btn: false,
  });

  const refs = {
    image: useRef(null),
    icon: useRef(null),
    iconText: useRef(null),
    title: useRef(null),
    text: useRef(null),
    btn: useRef(null),
  };

  const [hover, setHover] = useState(false);

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
      className={`relative overflow-hidden md:w-[400px] md:h-[390px] md:hover:w-[420px] md:hover:h-[410px] w-[350px] h-[340px] hover:w-[370px] hover:h-[360px] transition-all duration-300 hover:shadow-xl hover:shadow-[#ffb237] ${
        isView.image ? "showItem popUpText" : "hideItem"
      }`}
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={refs.image}
      data-id="image"
    >
      <div className="flex justify-evenly bg-neutral-50/80  hover:bg-gradient-to-t hover:from-[#ffb237] hover:to-transparent absolute bottom-10 w-full transition-colors duration-500 p-2">
        <div>
          <div className="text-[#ffb237] flex text-lg">
            <div
              className={`${
                isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
              }`}
              ref={refs.icon}
              data-id="icon"
            >
              <HorizontalRuleIcon />
            </div>
            <div
              className={`${
                isView.iconText
                  ? "showItem textComeFromRightToLeft"
                  : "hideItem"
              }`}
              ref={refs.iconText}
              data-id="iconText"
            >
              {props.title}
            </div>
          </div>
          <div
            className={`font-bold text-xl ${
              isView.title ? "showItem textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.title}
            data-id="title"
          >
            {props.subTitle}
          </div>
          <div
            className={`${
              isView.text ? "showItem textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            {props.text}
          </div>
        </div>
        <div className=" flex items-center">
          <div
            className={`bg-[#ffb237] cursor-pointer rounded-full w-12 h-12 flex justify-center items-center border-black border-2 transition-all duration-300 hover:w-14 hover:h-14 ${
              isView.btn ? "showItem textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.btn}
            data-id="btn"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div>
              {hover ? (
                <div>
                  <ArrowForwardIcon className="hover:scale-150 transition-transform duration-300 delay-300" />
                </div>
              ) : (
                <div className="circleBubble bg-black rounded-full"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectComponent;
