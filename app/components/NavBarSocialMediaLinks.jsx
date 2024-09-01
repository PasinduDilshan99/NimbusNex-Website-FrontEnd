import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const NavBarSocialMediaLinks = () => {
  const socialMediaLinks = [
    {
      id: 1,
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F",
    },
    {
      id: 2,
      icon: XIcon,
      link: "https://x.com/?lang=en",
    },
    {
      id: 3,
      icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
    {
      id: 4,
      icon: InstagramIcon,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="flex m-10">
      {socialMediaLinks.map((socialMediaLink) => (
        <a
          className="flex flex-col justify-center p-2 m-1 bg-slate-300 hover:bg-[#ffb237] transition-colors duration-1000 ease-in-out"
          key={socialMediaLink.id}
          href={socialMediaLink.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <socialMediaLink.icon />
        </a>
      ))}
    </div>
  );
};

export default NavBarSocialMediaLinks;
