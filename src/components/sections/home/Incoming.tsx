import HighlightCard from "@/components/HighlightCard";
import {
  IncomingIcon1,
  IncomingIcon2,
  IncomingIcon3,
  IncomingIcon4,
  IncomingIcon5,
  IncomingIcon6,
} from "@/icons";

const incomingItems = [
  {
    title: "Lưu trữ hồ sơ học viên",
    subtitle:
      "Lưu trữ CV, kỹ năng, chứng chỉ, và portfolio học viên chỉ trong một lần chạm.",
    icon: <IncomingIcon1 />,
  },
  {
    title: "NFC - không cần internet",
    subtitle: "Chạm điện thoại để chia sẻ hồ sơ mà không cần kết nối mạng.",
    icon: <IncomingIcon2 />,
  },
  {
    title: "Giao diện cá nhân hoá",
    subtitle:
      "Tùy biến giao diện hồ sơ theo phong cách cá nhân hoặc nhận diện của trường/lớp.",
    icon: <IncomingIcon3 />,
  },
  {
    title: "Bảo mật và dễ quản lý",
    subtitle:
      "Thông tin được mã hóa và kiểm soát dễ dàng bởi nhà trường hoặc cá nhân.",
    icon: <IncomingIcon4 />,
  },
  {
    title: "Quét & lưu ngay vào danh bạ",
    subtitle:
      "Người nhận chỉ cần quét để lưu toàn bộ thông tin vào thiết bị của mình.",
    icon: <IncomingIcon5 />,
  },
  {
    title: "Kết nối đa nền tảng",
    subtitle:
      "Liên kết đến email, mạng xã hội, trang cá nhân, hoặc hệ thống đào tạo trực tuyến.",
    icon: <IncomingIcon6 />,
  },
];

const Incoming = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:mx-48 mx-6">
      <h3 className="text-3xl font-bold uppercase text-[#222222]">
        sắp ra mắt
      </h3>
      <p className="text-[#777777] text-sm md:w-[40%] text-center">
        Chạm nhẹ để kết nối. Giải pháp chia sẻ hồ sơ học viên nhanh chóng, bảo
        mật và chuyên nghiệp – chỉ với một cú chạm điện thoại.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-10 gap-8">
        {incomingItems?.map((item, index) => (
          <HighlightCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Incoming;
