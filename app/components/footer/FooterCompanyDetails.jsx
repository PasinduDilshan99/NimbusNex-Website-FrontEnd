"use client";
import React, { useEffect, useRef, useState } from "react";
import WhiteLogo from "../logo/WhiteLogo";

const FooterCompanyDetails = () => {
  const [isView, setIsView] = useState({
    icon: false,
    name: false,
    text: false,
  });

  const refs = {
    icon: useRef(null),
    name: useRef(null),
    text: useRef(null),
  };

  const getExperienceDuration = () => {
    const startDate = new Date("2024-07-27");
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (today.getDate() < startDate.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }

    return { years, months };
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

  const { years, months } = getExperienceDuration();

  return (
    <div className="flex flex-col ">
      <div className="text-3xl flex items-center ">
        <div
          className={`border-2 border-white rounded-full companyLogoAnimation xl:w-12 xl:h-12 m-2 w-10 h-10  ${
            isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
          } `}
          style={{
            backgroundImage: `url(${"/company-logo.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          ref={refs.icon}
          data-id="icon"
        ></div>
        <div
          className={`text-xl font-bold ${
            isView.name ? "showItem textComeFromRightToLeft" : "hideItem"
          }`}
          ref={refs.name}
          data-id="name"
        >
          <WhiteLogo />
        </div>
      </div>
      <div
        className={`pt-5 ${
          isView.text ? "showItem textComeFromBottomToTop" : "hideItem"
        }`}
        ref={refs.text}
        data-id="text"
      >
        {years > 0 && `${years} year${years !== 1 ? "s" : ""} and `}
        {`${months} month${
          months !== 1 ? "s" : ""
        } of experience, we’ll ensure you get the best guidance.`}
      </div>
    </div>
  );
};

export default FooterCompanyDetails;
