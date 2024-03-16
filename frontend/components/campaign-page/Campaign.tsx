/* eslint-disable @next/next/no-img-element */
"use client";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Image from "next/image";
import { useParams } from "next/navigation";

const Campaign = () => {
  const { id } = useParams();

  const { contract } = useContract(
    "0xBA69a8fcA948270b18d268e248FF53971bEC4f0E"
  );

  const { data, isLoading, error } = useContractRead(contract, "events", [id]);
  console.log(data ?? data);

  return (
    <div className="relative">
      <img
        src="https://media.wired.com/photos/63ed133dec9575838d529957/master/pass/Cli-salinas-flood-1246184112.jpg"
        className="w-full h-72 rounded-lg"
        alt=""
      />
    </div>
  );
};

export default Campaign;
