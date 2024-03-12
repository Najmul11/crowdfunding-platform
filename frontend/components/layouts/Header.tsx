import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 sticky top-0">
      <div className="max-w-screen-xl mx-auto p-2  rounded bg-gradient-to-r from-slate-800 to-blue-500 from-[10%] ">
        <div className="flex  justify-between items-center">
          <Link href={"/"}>
            <Image src={logo} width={50} height={50} alt="" />
          </Link>

          <div className="flex gap-5 items-center text-white font-semibold text-sm pr-2">
            <Link
              href={"/how-it-works"}
              className="hover:text-highlight duration-300"
            >
              How it works?
            </Link>
            <Link
              href={"/how-it-works"}
              className="hover:text-highlight duration-300"
            >
              About us
            </Link>

            <button className="rounded bg-black px-5 py-2 text-highlight hover:bg-highlight hover:text-black duration-300">
              Donate now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
