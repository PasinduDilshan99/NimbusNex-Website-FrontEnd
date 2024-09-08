import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import AboutUsContactDetailsComponent from "./AboutUsContactDetailsComponent";

const AboutUsContactDetails = () => {
  const locationDetails = [
    {
      id: 1,
      icon: AddLocationAltIcon,
      title: "Address",
      subTitle: "21 King Street 5th Floor",
      text: "Hamilton, Ontario Canada",
    },
    {
      id: 2,
      icon: PhoneIcon,
      title: "Get In Touch",
      subTitle: "+8801682648101",
      text: "+00(88) 17456 51",
    },
    {
      id: 3,
      icon: EmailIcon,
      title: "Email Address",
      subTitle: "Info24@gmail.com",
      text: "Support24@gmail.com",
    },
  ];
  return (
    <div className="lg:mx-10">
      <div className="bg-[#ffb237] rounded-xl p-5 flex flex-col lg:flex-row lg:justify-evenly items-start lg:items-center  transition-transform duration-300 hover:scale-105">
        {locationDetails.map((locationDetail) => (
          <div
            key={locationDetail.id}
            className="transition-transform duration-300 hover:scale-105"
          >
            <AboutUsContactDetailsComponent props={locationDetail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsContactDetails;
