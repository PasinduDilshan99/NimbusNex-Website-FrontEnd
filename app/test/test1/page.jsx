import Carousel from "@/app/components/Carosuel";
import FeedBackCarosuel from "@/app/components/feedback/FeedBackCarosuel";
import React from "react";
import "../../css/recentProjects/RecentProject.css";

const page = () => {
  return (
    <div className="bg-black">
      <FeedBackCarosuel />
      <div className="text-red-600">ABCEASAUSFuahifuha</div>
      <div className="circleBubble w-10 h-10 bg-red-500 rounded-full border-2 border-white"></div>
      <div className="bg-gradient-to-t from-black to-transparent hover:bg-gradient-to-t hover:from-[#ffb237] hover:to-transparent text-white transition-all duration-300">
        ABCD
      </div>
    </div>
  );
};

export default page;
