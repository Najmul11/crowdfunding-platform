import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-second   w-full flex flex-col items-center justify-center h-[70vh] ">
      <div className=" ">
        <span className="text-sm bg-blue-500/40 font-semibold px-2 py-[3px] rounded-full ">
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
          <Link
            href={"/campaigns/create"}
            className="rounded-full bg-highlight  font-semibold px-5 py-2  hover:bg-highlight/90 text-black duration-300"
          >
            Create campaign
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
