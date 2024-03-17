"use client";
import { Progress } from "@/components/ui/progress";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Donate = ({ campaign, formateBigNumber }: any) => {
  const [amount, setAmount] = useState(1);

  const decrement = () => {
    if (amount > 1) setAmount(amount - 1);
  };
  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex items-center gap-4 ">
        <Progress
          className="w-[80%]"
          value={
            (formateBigNumber(campaign[6]) / formateBigNumber(campaign[5])) *
            100
          }
        />
        <p className="font-semibold">
          {formateBigNumber(campaign[6])}/{formateBigNumber(campaign[5])} MATIC
        </p>
      </div>

      <div className="flex items-center gap-5 ">
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="text-black appearance-none px-2 py-1 rounded focus:outline-none  "
          onKeyDown={(e) => {
            if (["*", "-", "+", "/"].includes(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <button className="rounded-md border border-gray-700 p-1">
          <Minus onClick={decrement} />
        </button>
        <button className="rounded-md border border-gray-700 p-1">
          <Plus onClick={() => setAmount(amount + 1)} />
        </button>
        <button className="rounded bg-blue-500/50 px-5 font-bold py-1 text-highlight hover:bg-highlight hover:text-black duration-300">
          Donate
        </button>
      </div>

      <button className="rounded bg-blue-500/50 px-5 font-bold py-2 text-highlight hover:bg-highlight hover:text-black duration-300 mt-10">
        Withdraw
      </button>
    </div>
  );
};

export default Donate;
