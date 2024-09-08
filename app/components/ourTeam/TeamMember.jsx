import React from "react";
import TeamMemberSocialMediaLinks from "./TeamMemberSocialMediaLinks";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const TeamMember = ({ props }) => {
  const {
    id,
    image,
    name,
    position,
    faceBookLink,
    twitterLink,
    linkedinLink,
    instagramLink,
  } = props;

  return (
    <div className="flex flex-col">
      <div
        className="relative overflow-hidden h-[475px] w-[370px] transition-transform duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
<div className="flex items-center justify-evenly bg-gradient-to-t from-[#f2d4a4] to-transparent hover:bg-gradient-to-t hover:from-[#ffb237] hover:to-transparent absolute bottom-0 w-full p-2 text-white transition-all duration-300 group">
  <div className="p-4">
    <div className="flex justify-around">
      <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <a
          href={faceBookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center icon-animation icon-1"
        >
          <FacebookIcon />
        </a>
        <a
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center icon-animation icon-2"
        >
          <XIcon />
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center icon-animation icon-3"
        >
          <InstagramIcon />
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center icon-animation icon-4"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="h-20 text-black flex flex-col items-center p-2">
        <div className="font-bold text-xl">{name}</div>
        <div className="text-lg">{position}</div>
      </div>
    </div>
  );
};

export default TeamMember;
