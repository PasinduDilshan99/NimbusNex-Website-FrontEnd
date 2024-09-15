import Image from "next/image";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const FeedBackComponent = ({ props }) => {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-md">
      <div className="w-1/3">
        <Image src={props.image} height={200} width={200} alt="text" className="rounded-lg" />
      </div>
      <div className="flex flex-col pl-5 gap-y-4 w-2/3">
        <div className="flex items-center gap-3">
          <div className="text-yellow-500">
            <FormatQuoteIcon fontSize="large" />
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < props.rate ? "text-yellow-500" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="text-xl font-bold">{props.comment}</div>
        <div className="text-lg max-w-80 text-gray-600">{props.text}</div>
        <div className="border-yellow-500 border-l-4 pl-2">
          <div className="font-bold text-lg">{props.name}</div>
          <div className="text-gray-500">{props.position} - {props.company}</div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackComponent;
