import TopSlider from "./components/topSlider/TopSlider";
import NavBar from "./components/navBar/NavBar";
import CompanyOverview from "./components/companyOverviewComponents/CompanyOverview";
import Services from "./components/servicesComponents/Services";
import OurServices from "./components/ourServices/OurServices";
import ITSupport from "./components/itSupport/ITSupport";
import FeedBack from "./components/feedback/FeedBack";
import RecentProjectArea from "./components/recentProjects/RecentProjectArea";
import OurWorkProcess from "./components/ourWorkProcess/OurWorkProcess";
import ITServiceCustomize from "./components/itServiceCustomize/ITServiceCustomize";
import NewPosts from "./components/newPosts/NewPosts";
import "leaflet/dist/leaflet.css";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import LocationDetails from "./components/locationDetails/LocationDetails";
import OurTeam from "./components/ourTeam/Ourteam";
import FeedBackCarosuel from "./components/feedback/FeedBackCarosuel";

export default function Home() {
  return (
    <main className="relative bg-[#fffbe3] text-black mt-56 md:mt-56">
      {/* <div className="z-20 relative">
        <NavBar />
      </div> */}
      <div className="-mt-20 z-10 relative">
        <TopSlider />
      </div>
      <div>
        <CompanyOverview />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <ITSupport />
      </div>
      <div>
        <FeedBackCarosuel />
      </div>
      <div className="relative">
        <div>
          <RecentProjectArea />
        </div>
        <div className="absolute w-full z-10 -bottom-10">
          <div className="flex justify-center w-full ">
            <ITServiceCustomize />
          </div>
        </div>
      </div>
      <div>
        <OurWorkProcess />
      </div>
      <div>
        <NewPosts />
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
    </main>
  );
}
