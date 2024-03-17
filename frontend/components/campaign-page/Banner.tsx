/* eslint-disable @next/next/no-img-element */

const Banner = ({ campaign }: any) => {
  return (
    <div className="">
      <img
        src="https://media.wired.com/photos/63ed133dec9575838d529957/master/pass/Cli-salinas-flood-1246184112.jpg"
        className="w-full h-72 rounded-lg"
        alt=""
      />
      <div className="inset-0 bg-gradient-to-t from-[10%] absolute from-black/10 to-black/70 w-full h-full flex justify-center pt-16">
        <div className="w-1/2 mx-auto">
          <h2 className="font-bold text-2xl text-center">{campaign[1]}</h2>
          <p className="text-center font-semibold mx-auto">{campaign[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
