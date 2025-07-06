/* eslint-disable @next/next/no-img-element */
import HighlightCard from "@/components/HighlightCard";
import ImageBox from "@/components/ImageBox";
import { AboutIcon1, AboutIcon2 } from "@/icons";
import React from "react";

const aboutItems = [
  {
    title: "Tổ chức các giải đấu cấp quốc gia và quốc tế",
    subtitle:
      "Tổ chức các giải đấu cấp quốc gia và quốc tế, từ phong trào đến chuyên nghiệp.",
    icon: <AboutIcon1 />,
  },
  {
    title: "Quản lý, phát triển phong trào thể thao",
    subtitle:
      "Thúc đẩy hình ảnh thể thao Việt Nam ra thế giới, thông qua việc tham dự và đăng cai các giải đấu quốc tế.",
    icon: <AboutIcon2 />,
  },
];

const AboutUs = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center lg:gap-16 md:gap-12 gap-10 lg:px-0 md:mx-48 mx-6">
      <ImageBox
        src="/assets/images/about/01.png"
        alt="Về chúng tôi"
        className="md:w-[37.5rem] md:h-[23.4375rem] md:block hidden"
      />
      <div className="md:w-[29.375rem] w-fit py-4">
        <div className="flex flex-col md:gap-0 gap-4 md:mb-0 mb-4">
          <h6 className="text-xs text-[#696969] uppercase mb-1">Giới thiệu</h6>
          <h3 className="text-3xl font-bold uppercase text-[#222222]">
            VỀ LIÊN ĐOÀN
          </h3>
          <p className="mt-1 text-[#777777] text-sm">
            Liên đoàn Cử tạ, Thể hình Việt Nam (Vietnam Bodybuilding &
            Weightlifting Federation - VBWF) là tổ chức chính thức đại diện cho
            các môn Cử tạ và Thể hình trong phạm vi quốc gia, trực thuộc sự quản
            lý của Tổng cục Thể dục Thể thao Việt Nam.
          </p>
        </div>
        <img
          src="/assets/images/about/01.png"
          alt="Về chúng tôi"
          className="md:hidden block w-full md:my-0 my-10"
        />

        <div className="flex flex-col gap-8 md:mt-4">
          {aboutItems?.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
