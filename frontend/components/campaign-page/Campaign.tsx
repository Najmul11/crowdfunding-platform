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
    "0xBA69a8fcA948270b18d268e248FF53971bEC4f0E"
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
        <div className="relative">
          <Banner campaign={campaign} />

          <div className="flex gap-5 pt-10 ">
            <div className="flex-1 ">
              <div className="border border-gray-600/80 px-4 pt-10 pb-5 rounded-md z-[8]">
                <Donate
                  campaign={campaign}
                  formateBigNumber={formateBigNumber}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="border border-gray-600/80 rounded-md  p-4 pb-5 z-[8]">
                <AllDonations campaign={campaign} />
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
