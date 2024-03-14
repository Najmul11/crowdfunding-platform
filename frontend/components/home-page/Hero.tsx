import Image from "next/image";
import banner from "../../public/banner.jpg";

const Hero = () => {
  return (
    <div className="text-white flex items-center justify-center pt-32">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold">Be the part of change</h1>
        <button className="px-5 bg-highlight py-2 text-black font-semibold rounded-md">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;
