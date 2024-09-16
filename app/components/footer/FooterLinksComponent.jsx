"use client";
import React, { useEffect, useRef, useState } from "react";

const FooterLinksComponent = () => {
  const [isView, setIsView] = useState({
    title: false,
    text: false,
  });

  const refs = {
    title: useRef(null),
    text: useRef(null),
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

  const links = [
    { id: 1, text: "Cookie" },
    { id: 2, text: "Careers" },
    { id: 3, text: "Policy" },
    { id: 4, text: "About us" },
    { id: 5, text: "Contact us" },
    { id: 6, text: "Pricing & Plans" },
  ];
  return (
    <div className="flex flex-col  px-4">
      <div
        className={`text-2xl font-semibold pb-6  ${
          isView.title ? "showItem textComeFromTopToBottom" : "hideItem"
        }`}
        ref={refs.title}
        data-id="title"
      >
        Links
      </div>
      <div>
        {links.map((link) => (
          <div
            key={link.id}
            className={`text-gray-400 text-lg pb-2 hover:text-[#ffb237] hover:font-bold  ${
              isView.text
                ? `${
                    link.id % 2 === 0
                      ? " textComeFromLeftToRight"
                      : " textComeFromRightToLeft"
                  } showItem`
                : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            {link.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksComponent;
