import TopSlider from "./components/TopSlider";
import NavBar from "./components/NavBar";
import CompanyOverview from "./components/CompanyOverview";
import Services from "./components/servicesComponents/Services";
import OurServices from "./components/ourServices/OurServices";
import ITSupport from "./components/itSupport/ITSupport";

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
        <OurServices/>
      </div>
      <div>
        <ITSupport/>
      </div>
    </main>
  );
}
