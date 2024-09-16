import React from "react";
import "../../globals.css";

const WhiteLogo = () => {
  return (
    <div
      className="transition-opacity duration-400 ease-in-out"
      style={{ visibility: "visible" }}
    >
      <svg viewBox="0 0 10 50" className="w-44 h-12">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="text-body text-3xl stroke-current stroke-2"
          dy=".3em"
          style={{
            stroke: "white",
            animation: "animate-stroke 5s infinite alternate",
          }}
        >
          NimbusNex
        </text>
      </svg>
      <style jsx>{`
        @keyframes animate-stroke {
          0% {
            fill: transparent;
            stroke: white;
            stroke-width: 3;
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 32%;
          }

          50% {
            fill: transparent;
            stroke: white;
            stroke-width: 3;
          }

          80%,
          100% {
            fill: white;
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

export default WhiteLogo;
