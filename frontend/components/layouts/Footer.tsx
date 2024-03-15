import { Receipt } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-3 py-10 mt-20 mb-3  rounded bg-gradient-to-r from-slate-800 to-blue-500/70 from-[60%] ">
      <div className="flex  justify-between items-center ">
        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
            className="flex items-center  font-bold uppercase text-xl bg-clip-text text-transparent bg-gradient-to-r from-highlight to-white"
          >
            <Receipt className="text-highlight font-bold" size={30} />
            Fund Forge
          </Link>
          <div className="font-bold leading-5">
            <p className="text-sm italic">Serve the needy</p>
            <p className="italic">Be the change you want!</p>
          </div>
        </div>
        <div className="font-semibold">&copy; All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
