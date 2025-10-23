import Banner from "@/components/sections/products/Banner";
import Benefit from "@/components/sections/products/Benefit";
import PrePartner from "@/components/sections/products/PrePartner";
import Pricing from "@/components/sections/products/Pricing";
import RegisterProcesses from "@/components/sections/products/RegisterProcesses";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-80">
      <Banner />
      <Benefit />
      <RegisterProcesses />
      <PrePartner />
      <Pricing />
    </div>
  );
};

export default Page;
