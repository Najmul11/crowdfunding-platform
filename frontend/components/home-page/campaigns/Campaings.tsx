"use client";
import { useContractRead, useContract } from "@thirdweb-dev/react";
import Card from "./Card";
const Campaings = () => {
  const { contract } = useContract(
    "0xBA69a8fcA948270b18d268e248FF53971bEC4f0E"
  );
  const { data, isLoading, error } = useContractRead(contract, "getAllEvents");
  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-5">
      {data && data.length > 0
        ? data.map((campaign, i: number) => (
            <Card campaign={campaign} key={i} />
          ))
        : ""}
    </div>
  );
};

export default Campaings;
