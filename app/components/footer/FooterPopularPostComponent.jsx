import Image from "next/image";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const FooterPopularPostComponent = ({ props }) => {
  return (
    <>
      <div className="flex items-center">
        <div className="pr-4">
          <Image src={props.image} width={120} height={120} alt={props.text} />
        </div>
        <div className="flex flex-col ">
          <div className="text-gray-500 tex-lg">
            <CalendarMonthIcon />
            {props.date}
          </div>
          <div className="p-2 text-xl font-semibold">{props.text}</div>
        </div>
      </div>
      <hr className="w-full border-gray-500 border-t-1 mt-4" />
    </>
  );
};

export default FooterPopularPostComponent;
