import { formatStr } from "@/lib/helpers/formate-str";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const AllDonations = ({ id }: { id: string }) => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT);

  const {
    data: donators,
    isLoading,
    error,
  } = useContractRead(contract, "getEventDonators", [`${id}`]);

  const {
    data: donations,
    isLoading: donationLoad,
    error: donationError,
  } = useContractRead(contract, "getEventDonations", [`${id}`]);

  console.log(donations);

  return (
    <div className="flex flex-col gap-5 ">
      <h3 className="w-full text-center rounde  bg-blue-500/50 px-5 font-bold py-2 text-highlight   ">
        All Donations
      </h3>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 w-full ">
          {donators && donators.length > 0
            ? donators.map((donator: string, i: number) => (
                <div key={i} className="flex justify-between ">
                  <p>{formatStr(donator)}</p>
                  <p className="font-semibold text-sm">
                    {" "}
                    {ethers.utils.formatEther(`${donations[i]}`)} MATIC
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default AllDonations;
