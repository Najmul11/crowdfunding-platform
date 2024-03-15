import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Thirdweb from "@/components/providers/Thirdweb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fund Forge",
  description: "A decentralized crowdfunding platform on Polygon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Thirdweb>
      <html lang="en">
        <body className={cn(inter.className, "bg-black text-second")}>
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </Thirdweb>
  );
}
