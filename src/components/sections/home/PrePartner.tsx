/* eslint-disable @next/next/no-img-element */
import React from "react";

const logos = [
  {
    src: "/assets/images/pre-partners/01.png",
    alt: "Trường đại học Sư phạm",
    className: "h-[44px] w-[86px]",
  },
  {
    src: "/assets/images/pre-partners/02.png",
    alt: "Trường đại học thể dục thể thao Đà Nẵng",
    className: "h-[58px] w-[58px]",
  },
  {
    src: "/assets/images/pre-partners/03.png",
    alt: "Evo",
    className: "h-[30.44px] w-[65.27px]",
  },
  {
    src: "/assets/images/pre-partners/04.png",
    alt: "Trường đại học thể dục thể thao Hà Nội",
    className: "h-[62px] w-[60px]",
  },
  {
    src: "/assets/images/pre-partners/05.png",
    alt: "Mofit",
    className: "h-[36px] w-[50px]",
  },
];

const PrePartner = () => {
  return (
    <div className="lg:px-0 md:mx-56 mx-6 mb-11 md:mt-20 mt-12">
      <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
        Đối tác liên kết
      </h3>
      <div className="w-full grid md:grid-cols-5 grid-cols-2 place-items-center gap-10">
        {logos?.map((item, index) => (
          <img
            src={item?.src}
            alt={item.alt}
            key={index}
            className={item?.className}
          />
        ))}
      </div>
    </div>
  );
};

export default PrePartner;
