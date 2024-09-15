import React from "react";

const CompanyOverviewService = ({ props }) => {
  return (
    <div className="flex items-center p-2">
      <div className="p-4 m-2 rounded-full bg-[#ffb237] hover:bg-black hover:text-white transition-colors duration-500">
        <props.icon className="hover:scale-125"/>
      </div>
      <div className="flex flex-col ">
        <div className="font-semibold text-lg">{props.title}</div>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default CompanyOverviewService;
