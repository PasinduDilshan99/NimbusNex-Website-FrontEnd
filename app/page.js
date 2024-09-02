import TopSlider from "./components/TopSlider";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="z-20 relative">
        <NavBar />
      </div>
      <div className="-mt-10 z-10 relative">
        <TopSlider />
      </div>
    </main>
  );
}
