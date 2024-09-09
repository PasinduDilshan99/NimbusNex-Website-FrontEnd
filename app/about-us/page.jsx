import React from "react";
import NavBar from "../components/navBar/NavBar";
import TopImage from "../components/topImage/TopImage";
import CompanyOverview from "../components/companyOverviewComponents/CompanyOverview";
import Services from "../components/servicesComponents/Services";
import ITSupport from "../components/itSupport/ITSupport";
import FeedBack from "../components/feedback/FeedBack";
import CompanyVideo from "../components/companyVideo/CompanyVideo";
import TechnologicalObstacles from "../components/technologicalObstacles/technologicalObstacles";
import OurTeam from "../components/ourTeam/OurTeam";
import LocationDetails from "../components/locationDetails/LocationDetails";
import Footer from "../components/footer/Footer";
import ScrollNavBar from "../components/scrollNavBar/ScrollNavBar";
import NewNavBar from "../components/NewNavBar";

const page = () => {
  const headerDetails = {title:"About Us", content:"Home / About Us"}
  return (
    <div>
      <div>
        <NewNavBar />
      </div>
      <div>
        <TopImage props={headerDetails}/>
      </div>
      <div>
        <CompanyOverview />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <ITSupport />
      </div>
      <div>{/* <FeedBack/> */}</div>
      <div>
        <CompanyVideo />
      </div>
      <div>
        <TechnologicalObstacles />
      </div>
      <div>
        <OurTeam />
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
