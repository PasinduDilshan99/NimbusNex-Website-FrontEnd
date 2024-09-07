import TopSlider from "./components/TopSlider";
import NavBar from "./components/NavBar";
import CompanyOverview from "./components/CompanyOverview";
import Services from "./components/servicesComponents/Services";
import OurServices from "./components/ourServices/OurServices";
import ITSupport from "./components/itSupport/ITSupport";
import FeedBack from "./components/feedback/FeedBack";
import RecentProjectArea from "./components/recentProjects/RecentProjectArea";
import OurWorkProcess from "./components/ourWorkProcess/OurWorkProcess";
import ITServiceCustomize from "./components/itServiceCustomize/ITServiceCustomize";
import NewPosts from "./components/newPosts/NewPosts";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white text-black">
      <div className="z-20 relative">
        <NavBar />
      </div>
      <div className="-mt-10 z-10 relative">
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
      {/* <div>
        <FeedBack/>
      </div> */}
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
    </main>
  );
}
