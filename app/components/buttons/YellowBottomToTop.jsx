import React from "react";
import './buttons.css'

const YellowBottomToTop = ({props}) => {
  return (
    <div className="">
      <button className="btn btn2 rounded-xl py-3 px-7">{props.text}</button>
    </div>
  );
};

export default YellowBottomToTop;
