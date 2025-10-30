"use client";

import { openZalo } from "@/utils/openZalo";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 lg:px-0 md:mx-56 mx-6 py-12">
      <div className="flex md:flex-row flex-col justify-between gap-4 w-full">
        <div className="md:w-[326px]">
          <h3 className="font-bold text-4xl text-[#235B76]">
            Khóa học HLV Thể hình & Fitness – Cấp 2
          </h3>
          <p className="text-[0.875em] mt-4 mb-3">
            Đào tạo chuyên sâu, 7 ngày liên tục – chuẩn hóa kỹ năng hướng dẫn
            tập luyện
          </p>
          <div className="flex flex-row gap-3">
            <div
              className="bg-[#FF9F2C] hover:bg-[#FFB256] w-fit px-4 py-2 rounded-md text-white text-sm cursor-pointer"
              onClick={openZalo}
            >
              Đăng ký ngay
            </div>
            <div
              className="bg-white border border-[#FF9F2C] w-fit px-4 py-2 rounded-md text-[#FF9F2C] text-sm cursor-pointer"
              onClick={openZalo}
            >
              Tư vấn
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/images/courses/01.png"}
            alt="Course Image"
            width={856}
            height={334}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
