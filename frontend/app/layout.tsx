import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body className={cn(inter.className, "bg-black")}>
<<<<<<< Updated upstream
=======
        <Header />

>>>>>>> Stashed changes
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
