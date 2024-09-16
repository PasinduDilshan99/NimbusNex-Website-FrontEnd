"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ITSupportContent from "./ITSupportContent";

const ITSupport = () => {
  const [isView, setIsView] = useState({
    image: false,
    logo: false,
    content: false,
  });

  const refs = {
    image: useRef(null),
    logo: useRef(null),
    content: useRef(null),
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
    <div className="flex flex-col lg:flex-row md:justify-center mt-16 my-5 relative">
      <div
        className={`h-full w-full ${
          isView.image ? "showItem slowPopUpText" : "hideItem"
        }`}
        ref={refs.image}
        data-id="image"
      >
        <Image
          src="/support-v2-img1.jpg"
          height={1000}
          width={1000}
          alt="text"
          className="w-full"
        />
      </div>

      <div className="flex relative">
        <div
          className={`bg-[#f1dcba] p-3 rounded-full hover:bg-[#ffb237]  colorChangeBlackToYellow transition-colors duration-1000 ease-in-out z-10 absolute lg:-left-7 lg:-top-7 rotate-animation top-0 left-0 hidden lg:block ${
            isView.logo ? "showItem textComeFromTopToBottom" : "hideItem"
          }`}
          ref={refs.logo}
          data-id="logo"
        >
          <Image src="/company-logo.png" width={40} height={40} alt="logo" className="fullyCircle" />
        </div>
        <div
          className={`${isView.content ? "showItem popUpText" : "hideItem"}`}
          ref={refs.content}
          data-id="content"
        >
          <ITSupportContent />
        </div>
      </div>
    </div>
  );
};

export default ITSupport;
