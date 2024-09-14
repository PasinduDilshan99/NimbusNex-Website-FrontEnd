import React from "react";
import "../../globals.css";

const Logo = () => {
  return (
    <div
      className="transition-opacity duration-400 ease-in-out"
      style={{ visibility: 'visible' }} // Tailwind CSS doesn't handle visibility directly
    >
      <svg
        viewBox="0 0 200 100"
        className="w-28 md:w-32 lg:w-36 xl:w-44"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="text-body text-3xl stroke-current stroke-2"
          dy=".3em"
          style={{
            stroke: 'black',
            animation: 'animate-stroke 3s infinite alternate',
          }}
        >
          NimbusNex
        </text>
      </svg>
      <style jsx>{`
        @keyframes animate-stroke {
          0% {
            fill: transparent;
            stroke: black;
            stroke-width: 3;
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 32%;
          }

          50% {
            fill: transparent;
            stroke: black;
            stroke-width: 3;
          }

          80%,
          100% {
            fill: black;
            stroke: transparent;
            stroke-width: 0;
            stroke-dashoffset: -25%;
            stroke-dasharray: 32% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
