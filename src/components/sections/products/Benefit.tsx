import Image from "next/image";
import React from "react";

const data = [
  {
    src: "/assets/images/benefit/user.png",
    title: "Xác minh danh tính",
    description:
      "Đảm bảo tính xác thực và an toàn tài khoản của bạn với quy trình xác minh đơn giản và bảo mật cao.",
  },
  {
    src: "/assets/images/benefit/book-open.png",
    title: "Xác thực chứng chỉ",
    description:
      "Kiểm tra và xác thực các chứng chỉ học tập, đào tạo một cách nhanh chóng, chính xác.",
  },
  {
    src: "/assets/images/benefit/network.png",
    title: "Cơ hội việc làm",
    description:
      "Kết nối với các nhà tuyển dụng uy tín, phù hợp với chuyên môn và chứng chỉ đã đạt được.",
  },
  {
    src: "/assets/images/benefit/arrow-left-right.png",
    title: "Ưu đãi liên kết",
    description:
      "Nhận các mã giảm giá, phần thưởng và đặc quyền từ các đối tác liên kết của nền tảng.",
  },
];

const Benefit = () => {
  return (
    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#9ABBCB] md:bg-gradient-to-t md:from-[#FFFFFF] md:to-[#FFFFFF]">
      <div className="lg:px-0 md:mx-48 mx-6 py-6">
        <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
          Tiện ích dành cho người dùng
        </h3>
        <div className="grid md:grid-cols-4 grid-cols-1 items-center justify-center md:gap-[1.875rem] gap-6 md:bg-white bg-[rgba(255,255,255,0.45)] rounded-lg">
          {data?.map((item, index) => (
            <div key={index} className="md:px-4 px-[34px]">
              <div
                className={`border-b border-b-[#78A5BA] flex flex-col gap-2 items-center justify-center py-[24px] md:border-none ${
                  index === data.length - 1 && "!border-none"
                }`}
              >
                <Image src={item.src} width={66} height={66} alt="logo" />
                <h3 className="text-[1.75rem] font-bold text-[#235B76]">
                  {item?.title}
                </h3>
                <span className="text-[#8E8E93] text-[0.875rem] text-center">
                  {item?.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
