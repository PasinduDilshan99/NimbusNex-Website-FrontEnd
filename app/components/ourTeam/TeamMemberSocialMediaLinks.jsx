import React from "react";

const TeamMemberSocialMediaLinks = ({ props }) => {
  return (
    <div className="w-10 h-10 flex items-center justify-center text-white z-10">{props.link}</div>
  );
};

export default TeamMemberSocialMediaLinks;
