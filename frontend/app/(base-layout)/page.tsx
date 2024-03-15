import Hero from "@/components/home-page/Hero";
import Campaings from "@/components/home-page/campaigns/Campaings";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Hero />
      <Campaings />
    </div>
  );
};

export default HomePage;
