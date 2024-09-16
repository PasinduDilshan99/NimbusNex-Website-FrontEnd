"use client";
import React, { useEffect, useRef, useState } from "react";
import RecentProjectComponent from "./RecentProjectComponent";
import PentagonIcon from "@mui/icons-material/Pentagon";

const RecentProjectArea = () => {
  const [isView, setIsView] = useState({
    icon: false,
    iconText: false,
    header: false,
  });

  const refs = {
    icon: useRef(null),
    iconText: useRef(null),
    header: useRef(null),
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
  const projectsAreas = [
    {
      id: 1,
      image: "/projects-v1-img1.jpg",
      title: "Tech Solution",
      subTitle: "Tech Solution",
      text: "There are many variations of passages of lorem",
    },
    {
      id: 2,
      image: "/projects-v1-img2.jpg",
      title: "Tech Solution",
      subTitle: "Tech Solution",
      text: "There are many variations of passages of lorem",
    },
    {
      id: 3,
      image: "/projects-v1-img3.jpg",
      title: "Tech Solution",
      subTitle: "Tech Solution",
      text: "There are many variations of passages of lorem",
    },
  ];

  return (
    <div>
      <div className="bg-[#28241f] flex flex-col items-center p-20 pb-32">
        <div className="p-4 uppercase flex justify-center items-center ">
          <div
            className={`px-4 text-[#ffb237] pentagonAnimation ${
              isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.icon}
            data-id="icon"
          >
            <PentagonIcon />
          </div>
          <div
            className={`text-white font-bold text-lg ${
              isView.iconText ? "showItem textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.iconText}
            data-id="iconText"
          >
            <div className="titleAnimationLeftToRight"></div>
            <div>Our Completed Projects</div>
          </div>
        </div>
        <div
          className={`text-white font-extrabold xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-center p-4 ${
            isView.iconText ? "showItem textComeFromBottomToTop" : "hideItem"
          }`}
          ref={refs.iconText}
          data-id="iconText"
        >
          Technology Solutions Recent
          <br />
          Our Tech Projects
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {projectsAreas.map((projectsArea) => (
            <div
              key={projectsArea.id}
              style={{ width: "400px", height: "390px" }}
            >
              <RecentProjectComponent props={projectsArea} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectArea;
