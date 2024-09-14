import React from "react";
import './buttons.css'

const YellowBottomToTop = ({props}) => {
  return (
    <div className="absolute">
      <button className="btn btn4">{props.text}</button>
    </div>
  );
};

export default YellowBottomToTop;
