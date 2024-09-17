"use client";
import React, { useEffect, useRef, useState } from "react";
import PentagonIcon from "@mui/icons-material/Pentagon";
import NewPostComponent from "./NewPostComponent";

const NewPosts = () => {
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

  const newPostsData = [
    {
      id: 1,
      image: "/blog-v3-img1.jpg",
      author: "user 1",
      title: "Technology",
      text: "Creating a Purpose-Driven Tech Culture at Chase",
      commentsCount: 10,
    },
    {
      id: 2,
      image: "/blog-v3-img2.jpg",
      author: "user 2",
      title: "Consulting",
      text: "At vero eos et accusamus et iusto odio dignissimos",
      commentsCount: 10,
    },
    {
      id: 3,
      image: "/blog-v3-img3.jpg",
      author: "user 3",
      title: "Design",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      commentsCount: 10,
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/blog-v3-pattern.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`pb-36 p-4  ${
          isView.icon ? "showItem popUpText" : "hideItem"
        }`}
        ref={refs.icon}
        data-id="icon"
      >
        <div className="flex flex-col md:items-center items-start ">
          <div className="p-4 uppercase  flex justify-center items-center ">
            <div
              className={`${
                isView.icon ? "showItem textComeFromLeftToRight" : "hideItem"
              }`}
              ref={refs.icon}
              data-id="icon"
            >
              <PentagonIcon className="text-[#ffb237]" />
            </div>
            <div
              className={`font-bold pl-4 text-lg ${
                isView.iconText
                  ? "showItem textComeFromRightToLeft"
                  : "hideItem"
              }`}
              ref={refs.iconText}
              data-id="iconText"
            >
              <div className="titleAnimationLeftToRight"></div>
              <div>Our News Post</div>
            </div>
          </div>
          <div
            className={`font-extrabold xl:text-6xl lg:text-5xl md:text-4xl text-3xl md:text-center px-4 ${
              isView.header ? "showItem textComeFromBottomToTop" : "hideItem"
            }`}
            ref={refs.header}
            data-id="header"
          >
            Latest News & Articles
          </div>
          <div className="flex flex-col self-center lg:flex-row lg:justify-evenly md:items-center gap-8 justify-center items-center pt-10">
            {newPostsData.map((newPost) => (
              <div
                key={newPost.id}
                className="hover:shadow-xl hover:shadow-[#ffb237]"
              >
                <NewPostComponent props={newPost} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
