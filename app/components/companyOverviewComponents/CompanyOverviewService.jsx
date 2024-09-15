import React from "react";

const CompanyOverviewService = ({ props }) => {
  return (
    <div className="flex items-center p-2">
      <div className="p-4 m-2 rounded-full bg-[#ffb237]">
        <props.icon />
      </div>
      <div className="flex flex-col ">
        <div className="font-semibold text-lg">{props.title}</div>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default CompanyOverviewService;
