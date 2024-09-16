import Carousel from "@/app/components/Carosuel";
import FeedBackCarosuel from "@/app/components/feedback/FeedBackCarosuel";
import React from "react";
import '../../css/recentProjects/RecentProject.css'

const page = () => {
  return (
    <div className="bg-black">
      <FeedBackCarosuel />
      <div className="text-red-600">ABCEASAUSFuahifuha</div>
      <div className="circleBubble w-10 h-10 bg-red-500 rounded-full border-2 border-white"></div>
    </div>
  );
};

export default page;
