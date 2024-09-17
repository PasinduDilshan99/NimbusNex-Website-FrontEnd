"use client";
import React, { useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const NewPostComponent = ({ props }) => {
  const [isView, setIsView] = useState({
    image: false,
    title: false,
    text: false,
    userIcon: false,
    user: false,
    commentIcon: false,
    comment: false,
  });

  const refs = {
    image: useRef(null),
    title: useRef(null),
    text: useRef(null),
    userIcon: useRef(null),
    user: useRef(null),
    commentIcon: useRef(null),
    comment: useRef(null),
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
      className={`relative overflow-hidden md:h-[475px] md:w-[370px] md:hover:h-[520px] md:hover:w-[400px] h-[445px] w-[340px] hover:h-[490px] hover:w-[370px] transition-all duration-300  ${
        isView.image ? "showItem popUpText" : "hideItem"
      }`}
      ref={refs.image}
      data-id="image"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-evenly bg-gradient-to-t from-black to-transparent hover:bg-gradient-to-t hover:from-[#ffb237] hover:to-transparent absolute bottom-0 w-full p-2 text-white transition-all duration-300">
        <div className="p-4">
          <div
            className={`bg-[#ffb237] text-lg text-black inline p-1 rounded-sm ${
              isView.title ? "showItem textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.title}
            data-id="title"
          >
            {props.title}
          </div>
          <div
            className={`font-bold text-xl ${
              isView.text ? "showItem textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            {props.text}
          </div>
          <div className="flex justify-around">
            <div className="flex justify-around">
              <div
                className={`${
                  isView.userIcon
                    ? "showItem textComeFromBottomToTop"
                    : "hideItem"
                }`}
                ref={refs.userIcon}
                data-id="userIcon"
              >
                <AccountCircleIcon />
              </div>
              <div
                className={`px-4 ${
                  isView.user ? "showItem textComeFromTopToBottom" : "hideItem"
                }`}
                ref={refs.user}
                data-id="user"
              >
                By {props.author}
              </div>
            </div>
            <div className="flex justify-around">
              <div
                className={`${
                  isView.commentIcon
                    ? "showItem textComeFromBottomToTop"
                    : "hideItem"
                }`}
                ref={refs.commentIcon}
                data-id="commentIcon"
              >
                <ChatBubbleOutlineIcon />
              </div>
              <div
                className={`px-4 ${
                  isView.comment
                    ? "showItem textComeFromTopToBottom"
                    : "hideItem"
                }`}
                ref={refs.comment}
                data-id="comment"
              >
                {" "}
                {props.commentsCount} Comments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostComponent;
