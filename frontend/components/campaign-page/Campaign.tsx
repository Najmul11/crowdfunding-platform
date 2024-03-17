/* eslint-disable @next/next/no-img-element */
"use client";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { ethers } from "ethers";
import Banner from "./Banner";
import { useState } from "react";

const Campaign = () => {
  const { id } = useParams();
  const [state, setState] = useState(0);

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
        <div className="relative ">
          <Banner campaign={campaign} />

          <div className="flex gap-5 pt-10">
            <div className="w-1/2 border border-gray-600/80 p-4 rounded-md flex flex-col gap-5 ">
              {/* left */}
              <div className="flex items-center gap-4">
                <Progress
                  value={
                    (formateBigNumber(campaign[6]) /
                      formateBigNumber(campaign[5])) *
                    100
                  }
                />
                <p className="font-semibold">
                  {formateBigNumber(campaign[6])}/
                  {formateBigNumber(campaign[5])} MATIC
                </p>
              </div>

              <div className="flex items-center gap-5 ">
                <input
                  type="text"
                  placeholder="hello"
                  className="text-black z-[10]"
                />
                <p>dfw</p>
              </div>
            </div>

            {/* right  */}
            <div className="w-1/2 border border-gray-600/80 p-4 rounded-md"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Campaign;
