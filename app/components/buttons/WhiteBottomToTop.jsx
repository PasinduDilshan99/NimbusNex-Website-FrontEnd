import React from "react";
import "./buttons.css";

const WhiteBottomToTop = ({props}) => {
  return (
    <div className="absolute">
      <button className="btn btn3">{props.text}</button>
    </div>
  );
};

export default WhiteBottomToTop;
