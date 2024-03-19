"use client";
import Link from "next/link";
import { Receipt } from "lucide-react";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  return (
    <header className="py-4 sticky top-0 z-[10]">
      <div className="max-w-screen-xl mx-auto p-3  rounded bg-gradient-to-r from-slate-800 to-blue-500 from-[10%] ">
        <div className="flex  justify-between items-center ">
          <Link
            href={"/"}
            className="flex items-center  font-bold uppercase text-xl bg-clip-text text-transparent bg-gradient-to-r from-highlight to-white"
          >
            <Receipt className="text-highlight font-bold" size={30} />
            Fund Forge
          </Link>

          <div className="flex gap-5 items-center text-white font-semibold text-sm ">
            <Link href={"/about"} className="hover:text-highlight duration-300">
              About us
            </Link>

            <div className="flex gap-1 items-center">
              <button className="rounded bg-black px-5 py-2 text-highlight hover:bg-highlight hover:text-black duration-300">
                Donate now
              </button>

              {/* <button className="rounded bg-blue-500/50 px-5 py-2 text-highlight hover:bg-highlight hover:text-black duration-300">
              </button> */}

              <ConnectWallet className="!rounded  !font-semibold  !p-2    hover:!text-black !duration-300" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
