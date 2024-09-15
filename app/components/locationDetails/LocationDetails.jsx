import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationDetailsComponent from "./LocationDetailsComponent";

const LocationDetails = () => {
  const locationDetails = [
    {
      id: 1,
      icon: EmailIcon,
      title: "101 Merritt 5, north tower",
      text: "14851 New York, USA",
    },
    {
      id: 2,
      icon: AddLocationAltIcon,
      title: "Get In Touch",
      text: "+088 11 22 00 44",
    },
    {
      id: 3,
      icon: PhoneIcon,
      title: "Quick Email us",
      text: "help12@sitename.com",
    },
  ];
  return (
    <div className="w-full  mx-10 lg:mx-20">
      <div className="bg-[#ffb237] p-5 flex flex-col lg:flex-row lg:justify-evenly lg:items-center w-full transition-transform duration-300 hover:scale-105">
        {locationDetails.map((locationDetail) => (
          <div key={locationDetail.id} className="transition-transform duration-300 hover:scale-105">
            <LocationDetailsComponent props={locationDetail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationDetails;
