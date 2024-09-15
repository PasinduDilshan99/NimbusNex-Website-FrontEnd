import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const NewPostComponent = ({ props }) => {
  return (
    <div
      className="relative overflow-hidden h-[475px] w-[370px] transition-transform duration-300 hover:scale-105"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-evenly bg-gradient-to-t from-black to-transparent hover:bg-gradient-to-t hover:from-[#ffb237] hover:to-transparent absolute bottom-0 w-full p-2 text-white transition-all duration-300">
        <div className="p-4">
          <div className="bg-[#ffb237] text-lg text-black inline p-1 rounded-sm ">
            {props.title}
          </div>
          <div className="font-bold text-xl">{props.text}</div>
          <div className="flex justify-around">
            <div className="flex justify-around">
              <div>
                <AccountCircleIcon />
              </div>
              <div className="px-4">By {props.author}</div>
            </div>
            <div className="flex justify-around">
              <div>
                <ChatBubbleOutlineIcon />
              </div>
              <div className="px-4"> {props.commentsCount} Comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostComponent;
