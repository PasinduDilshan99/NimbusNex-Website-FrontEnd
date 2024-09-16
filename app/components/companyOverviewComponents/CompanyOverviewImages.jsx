"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "../../css/companyOverview/CompanyOverview.css";
import "../../css/common/ComeText.css";

const CompanyOverviewImages = () => {
  const [isView, setIsView] = useState({
    fixedImage: false,
    changeImage: false,
    blackBar: false,
    yellowBar: false,
    logo: false,
  });

  const refs = {
    fixedImage: useRef(null),
    changeImage: useRef(null),
    blackBar: useRef(null),
    yellowBar: useRef(null),
    logo: useRef(null),
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
      {
        threshold: 0.1,
      }
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
    <div className="relative">
      <div
        className={`pr-14  ${
          isView.fixedImage ? "showItem textComeFromLeftToRight" : "hideItem"
        }`}
        ref={refs.fixedImage}
        data-id="fixedImage"
      >
        <Image src="/about-v3-img1.jpg" width={620} height={607} />
      </div>
      <div
        className={`w-4 h-10 bg-black absolute top-0 right-0 mr-4 z-10 blackBarAnimation ${
          isView.blackBar ? "showItem textComeFromTopToBottom" : "hideItem"
        }`}
        ref={refs.blackBar}
        data-id="blackBar"
      ></div>
      <div
        className={`w-4 h-36 bg-[#ffb237] absolute top-14 right-0 mr-4 z-10 yellowBarAnimation ${
          isView.yellowBar ? "showItem textComeFromBottomToTop" : "hideItem"
        }`}
        ref={refs.yellowBar}
        data-id="yellowBar"
      ></div>
      <div className="absolute bottom-0 right-0 z-10 border border-white border-t-8 border-l-8">
        <Image
          src="/about-v3-img2.jpg"
          width={200}
          height={200}
          alt="Image description"
          style={{
            width:"250px",
            height:"250px"
          }}
          className={`w-full h-auto lg:w-200 lg:h-200 md:w-150 md:h-150 w-100 h-100  imageZoom ${
            isView.changeImage ? "showItem textComeFromRightToLeft" : "hideItem"
          }`}
          ref={refs.changeImage}
          data-id="changeImage"
        />

        <div
          className={`absolute md:-top-10 md:-left-10 -top-7 -left-7 z-20 m-2 companyLogoAnimation xl:w-16 xl:h-16  w-10 h-10 rounded-full ${
            isView.logo ? "showItem textComeFromTopToBottom" : "hideItem"
          }`}
          ref={refs.logo}
          data-id="logo"
          style={{
            backgroundImage: `url(${"/company-logo.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CompanyOverviewImages;
