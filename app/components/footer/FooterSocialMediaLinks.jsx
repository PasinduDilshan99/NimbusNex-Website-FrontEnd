"use client";
import React, { useEffect, useRef, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../css/common/ComeText.css";

const FooterSocialMediaLinks = () => {
  const [isView, setIsView] = useState({
    icon: false,
  });

  const refs = {
    icon: useRef(null),
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
  const socialMediaLinks = [
    {
      id: 1,
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F",
    },
    {
      id: 2,
      icon: XIcon,
      link: "https://x.com/?lang=en",
    },
    {
      id: 3,
      icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
    {
      id: 4,
      icon: InstagramIcon,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="flex m-5">
      {socialMediaLinks.map((socialMediaLink) => (
        <div
          className={`flex  flex-col justify-center p-2 m-1 my-2 socialMediaLinkHover bg-white hover:bg-[#ffb237] transition-colors duration-300 ease-in-out rounded-full text-black hover:text-white ${
            isView.icon ? "showItem textComeFromBottomToTop" : "hideItem"
          }`}
          ref={refs.icon}
          data-id="icon"
          key={socialMediaLink.id}
          href={socialMediaLink.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <socialMediaLink.icon />
        </div>
      ))}
    </div>
  );
};

export default FooterSocialMediaLinks;
