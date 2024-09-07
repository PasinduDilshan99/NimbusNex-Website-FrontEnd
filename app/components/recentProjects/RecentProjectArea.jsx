import React from "react";
import RecentProjectComponent from "./RecentProjectComponent";
import PentagonIcon from "@mui/icons-material/Pentagon";

const RecentProjectArea = () => {
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
      <div className="bg-[#45260e] flex flex-col items-center p-20 pb-32">
        <div className="p-4 uppercase flex justify-center items-center ">
          <div className="px-4">
            <PentagonIcon className="text-[#ffb237]" />
          </div>
          <div className="text-white font-bold text-lg">Our Completed Projects</div>
        </div>
        <div className="text-white font-extrabold text-6xl text-center p-4 ">
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
