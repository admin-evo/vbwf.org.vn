"use client";
import { useDeviceType } from "@/hooks/useDeviceType";
import Image from "next/image";

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
  const deviceType = useDeviceType();
  return (
    <div
      className={
        deviceType === "mobile"
          ? "bg-gradient-to-t from-[#FFFFFF] to-[#9ABBCB]"
          : "bg-white!"
      }
    >
      <div className="mx-6 py-6 md:mx-20 lg:mx-auto lg:max-w-7xl">
        <h3 className="mb-8 text-center text-[1.75rem] font-bold text-[#222222]">
          Tiện ích dành cho người dùng
        </h3>

        <div className="grid grid-cols-1 gap-6 rounded-lg bg-[rgba(255,255,255,0.45)] md:grid-cols-4 md:gap-8 md:bg-white">
          {data.map((item, index) => (
            <div key={index} className="h-full px-[34px] md:px-4">
              <div
                className={`flex h-full flex-col items-center py-6 md:border-none ${
                  index !== data.length - 1 ? "border-b border-[#78A5BA]" : ""
                }`}
              >
                <Image src={item.src} width={66} height={66} alt={item.title} />

                <h3 className="mt-4 text-center text-[1.5rem] font-bold text-[#235B76]">
                  {item.title}
                </h3>

                <p className="mt-3 text-center text-[0.875rem] leading-6 text-[#8E8E93]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
