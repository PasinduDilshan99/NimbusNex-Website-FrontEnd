import React from "react";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/team-v1-img1.jpg",
      name: "Adam Anderson",
      position: "Senior technician",
      faceBookLink: "facebook link",
      twitterLink: "twitter link",
      linkedinLink: "linkedin link",
      instagramLink: "instagram link",
    },
    {
      id: 2,
      image: "/team-v1-img2.jpg",
      name: "Adam Anderson",
      position: "Senior technician",
      faceBookLink: "facebook link",
      twitterLink: "twitter link",
      linkedinLink: "linkedin link",
      instagramLink: "instagram link",
    },
    {
      id: 3,
      image: "/team-v1-img3.jpg",
      name: "Adam Anderson",
      position: "Senior technician",
      faceBookLink: "facebook link",
      twitterLink: "twitter link",
      linkedinLink: "linkedin link",
      instagramLink: "instagram link",
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-center m-10">
        {teamMembers.map((teamMember) => (
          <div key={teamMember.id}>
            <TeamMember props={teamMember} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
