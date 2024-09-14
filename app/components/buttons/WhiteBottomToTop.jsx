import React from "react";
import "./buttons.css";

const WhiteBottomToTop = ({ props }) => {
  return (
    <div className="">
      <button className="btn btn3 rounded-xl">{props.text}</button>
    </div>
  );
};

export default WhiteBottomToTop;
