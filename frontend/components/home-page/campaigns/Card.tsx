/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TCampaign } from "./Campaings";
import Link from "next/link";

type TProps = {
  campaign: TCampaign;
  index: number;
};

const Card = ({ campaign, index }: TProps) => {
  console.log(campaign);

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-blue-500/30 relative group/cardw-auto  h-auto rounded-xl p-6 text-second  ">
        <CardItem translateZ="50" className="text-xl font-bold ">
          {campaign[1]}
        </CardItem>

        <CardItem as="p" translateZ="60" className=" text-sm max-w-sm mt-2 ">
          {campaign[3]}
        </CardItem>

        <CardItem translateZ="100" className=" mt-4">
          <img
            src={campaign[2] as string}
            height="1000"
            width="1000"
            className="h-60  object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-end items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl font-bold"
          >
            <Link
              href={`/campaigns/${index}`}
              className="rounded text-xs bg-black px-5 py-2 text-highlight hover:bg-highlight hover:text-black duration-300"
            >
              Donate
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
