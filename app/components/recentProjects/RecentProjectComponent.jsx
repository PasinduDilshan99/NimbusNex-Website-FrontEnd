import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const RecentProjectComponent = ({ props }) => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${props.image})`,
        width: "400px",
        height: "390px",
      }}
    >
      <div className="flex items-center justify-evenly bg-neutral-50/80 absolute bottom-10 w-full p-2">
        <div>
          <div className="text-[#ffb237] text-lg">
            <HorizontalRuleIcon />
            {props.title}
          </div>
          <div className="font-bold text-xl">{props.subTitle}</div>
          <div>{props.text}</div>
        </div>
        <div className="bg-[#ffb237] rounded-full w-12 h-12 flex justify-center items-center border-black border-2 transition-all duration-300 hover:w-16 hover:h-16">
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default RecentProjectComponent;
