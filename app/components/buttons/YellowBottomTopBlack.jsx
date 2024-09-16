import React from "react";
import "./buttons.css";

const YellowBottomTopBlack = ({ props }) => {
  return (
    <div className="">
      <button className="btn btn2 rounded-xl py-3 px-7 hover:border-black hover:border-2 hover:shadow-lg hover:shadow-black">
        {props.text}
      </button>
    </div>
  );
};

export default YellowBottomTopBlack;
