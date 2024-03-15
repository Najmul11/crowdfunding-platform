"use client";
import { Mumbai } from "@thirdweb-dev/chains";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ReactNode } from "react";

const Thirdweb = ({ children }: { children: ReactNode }) => {
  return (
    <ThirdwebProvider
      activeChain={Mumbai}
      clientId={process.env.NEXT_PUBLIC_CLIENTID}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default Thirdweb;
