/* eslint-disable @next/next/no-img-element */
"use client";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useParams } from "next/navigation";
import { ethers } from "ethers";
import Banner from "./Banner";
import Donate from "./Donate";
import AllDonations from "./AllDonations";

const Campaign = () => {
  const { id } = useParams();

  const { contract } = useContract(
    "0xB4CE25F3e5Ba6316c2b4E5d0853633785531fEb2"
  );

  const {
    data: campaign,
    isLoading,
    error,
  } = useContractRead(contract, "events", [id]);

  const formateBigNumber = (bigNum: string) => {
    return Number(ethers.utils.formatEther(bigNum));
  };

  return (
    <div>
      {campaign ? (
        <div>
          <div className="relative ">
            <Banner campaign={campaign} />
          </div>
          <div className="flex gap-5 pt-10 ">
            <div className="flex-1 ">
              <div className="border border-gray-600/80 px-4 pt-10 pb-5 rounded-md ">
                <Donate
                  campaign={campaign}
                  formateBigNumber={formateBigNumber}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="border border-gray-600/80 rounded-md  p-4 pb-5 ">
                <AllDonations id={id as string} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Campaign;
