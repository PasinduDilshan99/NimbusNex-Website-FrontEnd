import React from "react";
import "./buttons.css";

const WhiteTopToBottom = ({ props }) => {
  return (
    <div className="">
      <button className="btn btn4 rounded-xl">{props.text}</button>
    </div>
  );
};

export default WhiteTopToBottom;
