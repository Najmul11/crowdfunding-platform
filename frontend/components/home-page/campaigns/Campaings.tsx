"use client";
import { useContractRead, useContract } from "@thirdweb-dev/react";
const Campaings = () => {
  const { contract } = useContract(
    "0xBA69a8fcA948270b18d268e248FF53971bEC4f0E"
  );
  const { data, isLoading, error } = useContractRead(contract, "getAllEvents");
  console.log(data[0]);

  return <div></div>;
};

export default Campaings;
