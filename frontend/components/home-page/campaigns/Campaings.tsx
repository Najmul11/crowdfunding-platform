"use client";
import { useContractRead, useContract } from "@thirdweb-dev/react";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";

export type TCampaign = (string | number | boolean)[];

const Campaings = () => {
  const { contract } = useContract(
    "0xBA69a8fcA948270b18d268e248FF53971bEC4f0E"
  );
  const { data, isLoading, error } = useContractRead(contract, "getAllEvents");
  //   const liveCam = data?.filter((p) => p[4]);

  return (
    <div>
      <div className="flex">
        <h3 className="text-lg font-bold bg-blue-500/30 py-1 px-5 rounded-full">
          Live Campaigns
        </h3>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-3 gap-5 mt-20">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <>
          {data && data.length > 0 ? (
            <div className="grid grid-cols-3 gap-5 ">
              {data.map((campaign: TCampaign, i: number) => (
                <>
                  <Card campaign={campaign} key={i} index={i} />
                  <Card campaign={campaign} key={i} index={i} />
                  <Card campaign={campaign} key={i} index={i} />
                </>
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-xl  text-center font-semibold py-10 bg-red-400/20">
              No campaign running at the moment❌❌❌
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Campaings;
