import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
