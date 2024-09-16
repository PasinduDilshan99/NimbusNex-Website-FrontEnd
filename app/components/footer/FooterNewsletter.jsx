"use client";
import React, { useEffect, useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import WhiteTopToBottom from "../buttons/WhiteTopToBottom";

const FooterNewsletter = () => {
  const [isView, setIsView] = useState({
    title: false,
    text: false,
    icon: false,
    box: false,
    emailText: false,
    btn: false,
    footerText: false,
  });

  const refs = {
    title: useRef(null),
    text: useRef(null),
    icon: useRef(null),
    box: useRef(null),
    emailText: useRef(null),
    btn: useRef(null),
    footerText: useRef(null),
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
    <div className="flex flex-col gap-3">
      <div
        className={`text-2xl font-semibold pb-2 ${
          isView.title ? "showItem textComeFromTopToBottom" : "hideItem"
        }`}
        ref={refs.title}
        data-id="title"
      >
        Newsletter
      </div>
      <div
        className={`text-lg font-semibold ${
          isView.text ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.text}
        data-id="text"
      >
        Get the latest news other tips
      </div>
      <div
        className={` py-2 pl-3 bg-white text-gray-500 items-center text-lg font-semibold rounded-sm  text-center flex ${
          isView.box ? "showItem popUpText" : "hideItem"
        }`}
        ref={refs.box}
        data-id="box"
      >
        <div
          className={`pr-2  ${
            isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
          }`}
          ref={refs.icon}
          data-id="icon"
        >
          <EmailIcon />
        </div>
        <div
          className={`${
            isView.emailText ? "showItem textComeFromRightToLeft" : "hideItem"
          }`}
          ref={refs.emailText}
          data-id="emailText"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb237] rounded-sm p-2"
          />
        </div>
      </div>

      <div
        className={` self-center ${
          isView.btn ? "showItem slowPopUpText" : "hideItem"
        }`}
        ref={refs.btn}
        data-id="btn"
      >
        <WhiteTopToBottom props={{ text: "subscribe" }} />
      </div>
      <div
        className={`text-gray-400 text-lg text-center ${
          isView.footerText ? "showItem textComeFromBottomToTop" : "hideItem"
        }`}
        ref={refs.footerText}
        data-id="footerText"
      >
        Looking to kick-off your project in the next 30-90 days ?
      </div>
    </div>
  );
};

export default FooterNewsletter;
