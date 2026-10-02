import CoreValues from "@/components/sections/about/CoreValues";
import Fields from "@/components/sections/about/Fields";
import Finale from "@/components/sections/about/Finale";
import Hero from "@/components/sections/about/Hero";
import History from "@/components/sections/about/History";
import Mission from "@/components/sections/about/Mission";
import PhotoBand from "@/components/sections/about/PhotoBand";
import Roles from "@/components/sections/about/Roles";
import Statement from "@/components/sections/about/Statement";
import { appConfig } from "@/configs/appConfig";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Giới thiệu - Liên đoàn Cử tạ, Thể hình Việt Nam",
  description:
    "Chung tay phát triển Cử tạ và Thể hình Việt Nam chuyên nghiệp – bền vững – hội nhập quốc tế. Giới thiệu Liên đoàn Cử tạ, Thể hình Việt Nam.",
};

const About = () => {
  if (appConfig.isWebsiteBlocked) {
    notFound();
  }
  return (
    <div className="bg-white overflow-x-hidden">
      <Hero />
      <Statement />
      <PhotoBand />
      <History />
      <Fields />
      <Mission />
      <CoreValues />
      <Roles />
      <Finale />
    </div>
  );
};

export default About;
