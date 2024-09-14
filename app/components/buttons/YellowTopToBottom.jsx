import React from "react";
import "./buttons.css";

const YellowTopToBottom = ({ props }) => {
  return (
    <div className="">
      <button className="btn btn1 rounded-xl py-3">{props.text}</button>
    </div>
  );
};

export default YellowTopToBottom;
