import Image from "next/image";
import banner from "../../public/banner.jpg";

const Hero = () => {
  return (
    <div className="text-second flex flex-col items-center justify-center h-[70vh] ">
      <div>
        <span className="text-sm bg-blue-500/40 font-semibold px-2 py-[3px] rounded-full animate-pulse">
          Join •
        </span>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl font-bold ">
            Together, We Make Change Happen.
          </h1>
          <p className="text-center">
            Empowering the Vulnerable, Rebuilding Lives: Together, Let&apos;s
            Extend <br /> a Helping Hand to Those in Need.
          </p>
          <button className="rounded-full bg-highlight  font-semibold px-5 py-2  hover:bg-highlight/90 text-black duration-300">
            Explore campaigns
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
