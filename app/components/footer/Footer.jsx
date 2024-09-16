"use client";
import React, { useEffect, useRef, useState } from "react";
import FooterPopularPost from "./FooterPopularPost";
import FooterCompanyDetails from "./FooterCompanyDetails";
import FooterLinksComponent from "./FooterLinksComponent";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocialMediaLinks from "./FooterSocialMediaLinks";

const Footer = () => {
  const [isView, setIsView] = useState({
    box: false,
    text: false,
    copyrights: false,
  });

  const refs = {
    box: useRef(null),
    text: useRef(null),
    copyrights: useRef(null),
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
      style={{
        backgroundImage: `url('/footer-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`text-white ${isView.box ? "showItem popUpText" : "hideItem"}`}
      ref={refs.box}
      data-id="box"
    >
      <div className="p-16">
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center">
            <FooterCompanyDetails />
            <FooterPopularPost />
            <FooterLinksComponent />
            <FooterNewsletter />
          </div>
          <hr className="w-full border-gray-300 border-t-2 my-2" />
          <div className="flex justify-between items-center pt-5">
            <div className="text-lg flex items-center">
              <div
                className={` ${
                  isView.text ? "showItem textComeFromLeftToRight" : "hideItem"
                }`}
                ref={refs.text}
                data-id="text"
              >
                Social
              </div>
              <div>
                <FooterSocialMediaLinks />
              </div>
            </div>
            <div
              className={`text-lg text-gray-300 ${
                isView.copyrights
                  ? "showItem textComeFromRightToLeft"
                  : "hideItem"
              }`}
              ref={refs.copyrights}
              data-id="copyrights"
            >
              ©2024 NimbusNex All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
