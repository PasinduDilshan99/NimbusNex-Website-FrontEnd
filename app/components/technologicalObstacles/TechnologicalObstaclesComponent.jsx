import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddIcon from "@mui/icons-material/Add";

const TechnologicalObstaclesComponent = ({ props }) => {
  return (
    <div className="bg-white p-8 text-xl text-black font-semibold rounded-lg min-2-[350] min-h-[200]">
      <div className="text-5xl flex items-center justify-center">
        <StarRateIcon className="w-10 h-10" />
        {props.value}
        <AddIcon className="w-10 h-10" />
      </div>
      <div className="flex flex-col">
        <div className="p-2">{props.text1}</div>
        <div>{props.text2}</div>
      </div>
    </div>
  );
};

export default TechnologicalObstaclesComponent;
