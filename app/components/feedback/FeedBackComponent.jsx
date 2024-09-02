import Image from "next/image";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const FeedBackComponent = ({ props }) => {
  return (
    <div className="flex p-3">
      <div>
        <Image src={props.image} height={200} width={200} alt="text" />
      </div>
      {/* content */}
      <div className="flex flex-col pl-5 gap-y-4">
        <div className="flex justify-around">
          <div>
            <QuestionMarkIcon />
          </div>
          <div>{props.rate}</div>
        </div>

        <div className="text-xl font-bold">{props.comment}</div>
        <div className="text-lg max-w-80">{props.text}</div>
        <div className="border-yellow-500 border-l-4 border-b-4">
          <div className="font-bold text-lg">{props.name}</div>
          <div>
            {props.position}-{props.company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackComponent;
