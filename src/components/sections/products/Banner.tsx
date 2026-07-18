"use client";
import { openZalo } from "@/utils/openZalo";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 1000); // cứ 2s đổi mặt 1 lần, lặp vô hạn

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[32rem] bg-gradient-to-b from-[#FFFFFF] to-[#9ABBCB] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-20 px-6 md:px-10 lg:px-[9.5625rem]">
        {/* Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[540px]">
          <h3 className="text-[1.75rem] md:text-[2.25rem] font-bold text-[#235B76] leading-tight">
            Thẻ NFC – Giải pháp định danh thông minh cho người dùng hiện đại
          </h3>

          <button
            className="bg-[#FF9F2C] rounded-md py-3 px-6 text-white cursor-pointer hover:opacity-75 mt-6"
            onClick={openZalo}
          >
            Đăng ký thẻ ngay
          </button>
        </div>

        {/* Flip card */}
        <div
          className="relative w-[240px] h-[150px] sm:w-[280px] sm:h-[180px] md:w-[340px] md:h-[220px] shrink-0"
          style={{
            perspective: "1200px",
          }}
        >
          <div
            className="relative w-full h-full transition-transform duration-500 ease-in-out"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <img
              src="/assets/images/products/card_truoc.png"
              alt="card_truoc"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            />

            <img
              src="/assets/images/products/card_sau.png"
              alt="card_sau"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Banner image */}
      {/* <div className="w-full max-w-[532px]">
          <Image
            src="/assets/images/products/banner.png"
            width={532}
            height={339}
            alt="Banner"
            className="w-full h-auto object-contain"
            priority
          />
        </div> */}
    </div>
  );
};

export default Banner;
