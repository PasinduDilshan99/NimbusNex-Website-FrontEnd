import React from "react";
import TopImage from "../components/topImage/TopImage";
import CompanyVideo from "../components/companyVideo/CompanyVideo";
import TechnologicalObstacles from "../components/technologicalObstacles/technologicalObstacles";
import OurTeam from "../components/ourTeam/OurTeam";
import LocationDetails from "../components/locationDetails/LocationDetails";
import Footer from "../components/footer/Footer";
import OurStory from "./components/OurStory";
import AboutCompanyServices from "./components/AboutCompanyServices";
import WhyChoose from "./components/WhyChoose";
import Map from "../components/map/Map";

const page = () => {
  const headerDetails = {
    title: "About Us",
    content: "Home / About Us",
    text: "At Nimbusnex, we’re not just another IT company; we’re your partners in progress. Whether you’re looking to develop a new digital platform, enhance your cybersecurity, or leverage data for strategic insights, our team is ready to help you navigate your digital journey with confidence.",
  };
  return (
    <div className="md:mt-56 mt-20">
      {/* <div>
        <NewNavBar />
      </div> */}
      <div>
        <TopImage props={headerDetails} />
      </div>
      <div className="mt-20 mx-[5%]">
        <OurStory />
      </div>
      <div className="mt-20">
        <AboutCompanyServices />
      </div>
      <div className="mt-20">
        <WhyChoose />
      </div>
      <div>{/* <FeedBack/> */}</div>
      <div className="mt-20">
        <CompanyVideo />
      </div>
      <div className="mt-20">
        <TechnologicalObstacles />
      </div>
      <div className="mt-20">
        <OurTeam />
      </div>
      <div className="relative mt-20">
        {/* <div className="">
          <Map />
        </div> */}
        <div className="absolute w-full z-50 -bottom-10">
          <div className="flex justify-center w-full ">
            <LocationDetails />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default page;
