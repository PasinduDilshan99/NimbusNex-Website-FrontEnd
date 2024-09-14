import React from "react";
import "./buttons.css";

const WhiteTopToBottom = ({ props }) => {
  return (
    <div className="absolute">
      <button className="btn btn4">{props.text}</button>
    </div>
  );
};

export default WhiteTopToBottom;
