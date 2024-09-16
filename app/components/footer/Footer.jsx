"use client";
import React, { useEffect, useRef, useState } from "react";
import FooterPopularPost from "./FooterPopularPost";
import FooterCompanyDetails from "./FooterCompanyDetails";
import FooterLinksComponent from "./FooterLinksComponent";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocialMediaLinks from "./FooterSocialMediaLinks";

const Footer = () => {
  const [isView, setIsView] = useState({
    icon: false,
    iconText: false,
    header: false,
    box: false,
  });

  const refs = {
    icon: useRef(null),
    iconText: useRef(null),
    header: useRef(null),
    box: useRef(null),
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
      className="text-white"
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
              <div>Social</div>
              <div>
                <FooterSocialMediaLinks />
              </div>
            </div>
            <div className="text-lg text-gray-300">
              ©2024 NimbusNex All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
