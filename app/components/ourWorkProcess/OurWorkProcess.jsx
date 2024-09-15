import React from "react";
import PentagonIcon from "@mui/icons-material/Pentagon";
import WorkProcessComponent from "../servicesComponents/WorkProcessComponent";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import StairsIcon from "@mui/icons-material/Stairs";
import Image from "next/image";

const OurWorkProcess = () => {
  const workProcessList = [
    {
      id: "01",
      icon: SelfImprovementIcon,
      title: "Your Concept",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
    {
      id: "02",
      icon: SentimentVerySatisfiedIcon,
      title: "Task Process",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
    {
      id: "03",
      icon: StairsIcon,
      title: "Launch",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
  ];
  return (
    <div>
      <div>
        <div className="flex flex-col items-center p-20">
          <div className="p-4 uppercase flex justify-center items-center ">
            <div className="px-4">
              <PentagonIcon className="text-[#ffb237]" />
            </div>
            <div className=" font-bold text-lg">OUR WORK PROCESS</div>
          </div>
          <div className=" font-extrabold text-6xl text-center p-4 ">
            We Solve the Task Very Easily
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-center gap-5 items-center">
            {workProcessList.map((workProcessData, index) => (
              <div key={workProcessData.id} className="">
                <div className="flex justify-between items-center p-2">
                  <WorkProcessComponent props={workProcessData} />
                  {index !== workProcessList.length - 1 && (
                    <Image
                      className="pl-4 hidden lg:block"
                      src="/work-process-v1-shape3.png"
                      height={100}
                      width={100}
                      alt="text"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkProcess;
