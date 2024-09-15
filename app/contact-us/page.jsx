import React from "react";
import NavBar from "../components/navBar/NavBar";
import TopImage from "../components/topImage/TopImage";
import AboutUsDetails from "../components/aboutusForm/aboutUsDetails";
import LocationDetails from "../components/locationDetails/LocationDetails";
import Footer from "../components/footer/Footer";

const page = () => {
  const headerDetails = { title: "Contact Us", content: "Home / Contact Us" };
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <TopImage props={headerDetails} />
      </div>
      <div>
        <AboutUsDetails />
      </div>
      <div className="relative">
        {/* <div className="">
          <Map />
        </div> */}
        <div className="absolute w-full z-50 -bottom-10">
          <div className="flex justify-center w-full ">
            <LocationDetails />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
