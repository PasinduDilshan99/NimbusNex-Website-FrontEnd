"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const OurServicesComponent = ({ props }) => {
  const [isView, setIsView] = useState({
    box: false,
    icon: false,
    title: false,
    text: false,
    image: false,
  });

  const refs = {
    box: useRef(null),
    icon: useRef(null),
    title: useRef(null),
    text: useRef(null),
    image: useRef(null),
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
      className={`flex flex-col justify-center items-center bg-black text-white p-4 py-8 text-center pb-0 relative ${
        isView.box ? "showItem popUpText" : "hideItem"
      }`}
      ref={refs.box}
      data-id="box"
    >
      <div
        className={`py-2 hover:text-[#ffb237] transition-all duration-300  ${
          isView.icon ? "showItem textComeFromRightToLeft" : "hideItem"
        }`}
        ref={refs.icon}
        data-id="icon"
      >
        <props.icon className="hover:scale-150 transition-all duration-300" />
      </div>
      <div
        className={`py-2 text-xl font-bold hover:text-[#ffb237] transition-all duration-300 hover:text-2xl ${
          isView.title ? "showItem popUpText" : "hideItem"
        }`}
        ref={refs.title}
        data-id="title"
      >
        {props.title}
      </div>
      <div
        className={`py-2 hover:text-lg hover:text-[#ffb237] transition-all duration-300 ${
          isView.text ? "showItem popUpText" : "hideItem"
        }`}
        ref={refs.text}
        data-id="text"
      >
        {props.text}
      </div>
      <div
        className={`w-3/4 hover:text-[#ffb237] transition-all duration-300 ${
          isView.image ? "showItem popUpText" : "hideItem"
        }`}
        ref={refs.image}
        data-id="image"
        style={{ height: "1%" }}
      >
        <Image
          src="/services-v1-shape1.png"
          width={200}
          height={200}
          alt="text"
          className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default OurServicesComponent;
