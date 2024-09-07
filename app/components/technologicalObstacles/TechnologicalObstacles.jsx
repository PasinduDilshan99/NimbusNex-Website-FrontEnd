import React from "react";
import TechnologicalObstaclesComponent from "./TechnologicalObstaclesComponent";

const TechnologicalObstacles = () => {
  const details = [
    { id: 1, value: 40, text1: "Our Successful", text2: "Completed Projects" },
    { id: 2, value: 50, text1: "Our Agency", text2: "IT Specialists" },
    { id: 3, value: 60, text1: "Our Successful", text2: "Completed Projects" },
  ];

  return (
    <div
      style={{
        backgroundImage: `url('/counter-v1-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-[60vh] p-10 flex flex-col justify-center items-center text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#ffb237] to-transparent opacity-70 z-0" />

      <div className="relative z-10">
        <div className="flex">
          {details.map((detail) => (
            <div key={detail.id} className="flex">
              <TechnologicalObstaclesComponent props={detail} />
            </div>
          ))}
        </div>

        <div className="text-black text-4xl font-bold mb-4 z-10">
          Assisting you in Overcoming your
          <br />
          Technological 
        </div>

        <div className="py-4 px-7 bg-black text-white text-xl mx-4 rounded-xl hover:bg-white hover:text-black transition-colors duration-1000 ease-in-out hover:scale-105 z-10">
          Discover more
        </div>
      </div>
    </div>
  );
};

export default TechnologicalObstacles;
