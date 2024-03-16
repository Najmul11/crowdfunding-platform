/* eslint-disable @next/next/no-img-element */
"use client";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { BigNumber, ethers } from "ethers";

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

  const formateBigNumber = (num: string) => {
    return Number(ethers.utils.formatEther(num));
  };

  return (
    <div>
      {campaign ? (
        <div className="relative z-[-10]">
          {/* banner */}
          <div>
            <img
              src="https://media.wired.com/photos/63ed133dec9575838d529957/master/pass/Cli-salinas-flood-1246184112.jpg"
              className="w-full h-72 rounded-lg"
              alt=""
            />
            <div className="inset-0 bg-gradient-to-t from-[10%] absolute from-black/10 to-black/70 w-full h-full flex justify-center pt-16">
              <div className="w-1/2 mx-auto">
                <h2 className="font-bold text-2xl text-center">
                  {campaign[1]}
                </h2>
                <p className="text-center font-semibold mx-auto">
                  {campaign[3]}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-10">
            <div className="w-1/2 border border-gray-600/80 p-4 rounded-md">
              {/* left */}
              <div className="flex items-center gap-4">
                <Progress value={formateBigNumber(campaign[6])} />
                <p className="font-semibold">
                  {formateBigNumber(campaign[6])}/
                  {formateBigNumber(campaign[5])} MATIC
                </p>
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
