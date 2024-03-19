"use client";
import { Web3Button } from "@thirdweb-dev/react";

const page = () => {
  const days = [5, 10, 20, 30];
  const createCampaign = () => {};
  return (
    <div className="max-w-screen-xl mx-auto ">
      <form className="w-1/2 mx-auto mt-5">
        <h2 className="font-semibold text-2xl mb-5">Create Campaign</h2>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label> Title</label>
            <input
              type="text"
              className="text-black appearance-none px-2 py-1 rounded focus:outline-none "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label> Description</label>
            <textarea
              rows={3}
              className=" text-black appearance-none px-2 py-1 rounded focus:outline-none "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label> Banner Url</label>
            <input
              type="text"
              className="text-black appearance-none px-2 py-1 rounded focus:outline-none "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label> Target Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              className="text-black appearance-none px-2 py-1 rounded focus:outline-none  "
              // onKeyDown={(e) => {
              //   if (["*", "-", "+", "/"].includes(e.key)) {
              //     e.preventDefault();
              //   }
              // }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label> Duration</label>
            <div className="flex gap-5 items-center">
              {days.map((day, i) => (
                <button
                  className="bg-highlight/90 hover:bg-highlight duration-200 text-black font-semibold px-3  py-2 rounded"
                  key={i}
                >
                  {day} Days
                </button>
              ))}
            </div>
          </div>

          <Web3Button
            contractAddress={process.env.NEXT_PUBLIC_CONTRACT || ""}
            action={createCampaign}
            className="!mt-5 !py-2 !rounded !font-semibold"
          >
            Create
          </Web3Button>
        </div>
      </form>
    </div>
  );
};

export default page;
