import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[37.5rem] bg-gradient-to-b from-[#FFFFFF] to-[#9ABBCB]">
      <div className="flex md:flex-row flex-col py-12 justify-between md:px-[9.5625rem] px-6">
        <div>
          <h3 className="md:text-[2.25rem] text-[1.75rem] text-[#235B76] md:w-[33.625rem] font-bold">
            Thẻ NFC – Giải pháp định danh thông minh cho người dùng hiện đại
          </h3>
          <button className="bg-[#FF9F2C] rounded-md py-2 px-4 text-white cursor-pointer hover:opacity-75 mt-6">
            Đăng ký thẻ ngay
          </button>
        </div>
        <Image
          src="/assets/images/products/banner.png"
          width={532}
          height={339}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
