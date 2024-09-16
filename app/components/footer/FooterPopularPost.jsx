"use client";
import React, { useEffect, useRef, useState } from "react";
import FooterPopularPostComponent from "./FooterPopularPostComponent";

const FooterPopularPost = () => {
  const [isView, setIsView] = useState({
    title: false,
  });

  const refs = {
    title: useRef(null),
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

  const popularPosts = [
    {
      id: 1,
      image: "/footer-v1-img1.jpg",
      date: "10 Jun 2010",
      text: "Benefits of Cloud-powered disaster recovery network",
    },
    {
      id: 2,
      image: "/footer-v1-img2.jpg",
      date: "10 Jun 2010",
      text: "UX/UI design benefits for businesses in 2023",
    },
  ];

  return (
    <div className="flex flex-col">
      <div
        className={`text-2xl font-semibold pb-6 ${
          isView.title ? "showItem textComeFromTopToBottom" : "hideItem"
        }`}
        ref={refs.title}
        data-id="title"
      >
        Popular post
      </div>
      <div>
        {popularPosts.map((popularPost) => (
          <div key={popularPost.id} className="flex flex-col p-3 pr-0">
            <FooterPopularPostComponent props={popularPost} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterPopularPost;
