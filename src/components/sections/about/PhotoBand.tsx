import Image from "next/image";
import TornEdge from "./TornEdge";

const PhotoBand = () => {
  return (
    <section
      aria-label="Khóa đào tạo Huấn luyện viên Thể hình và Fitness"
      className="relative h-[clamp(320px,56vw,760px)] overflow-hidden bg-[#002843]"
    >
      <TornEdge direction="down" />
      <Image
        src="/assets/images/about/khoa-hlv-the-hinh-fitness.jpg"
        alt="Học viên và giảng viên chụp ảnh lưu niệm cùng chứng chỉ tại khóa Huấn luyện viên Thể hình & Fitness cấp 2"
        fill
        sizes="100vw"
        className="object-cover object-[50%_38%]"
      />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-[45%] bg-gradient-to-b from-transparent to-[rgba(0,16,32,.66)]" />
      <p className="hidden sm:block absolute z-[5] lg:left-56 md:left-12 left-6 bottom-[calc(clamp(22px,3.4vw,52px)+1rem)] max-w-[440px] pl-3 border-l-2 border-[#FF9F2C] text-xs text-white">
        Liên đoàn Cử tạ Thể hình Việt Nam phối hợp với Công Ty Evo Việt Nam tổ
        chức khóa HLV Thể hình & Fitness cấp 2
      </p>
      <TornEdge direction="up" />
    </section>
  );
};

export default PhotoBand;
