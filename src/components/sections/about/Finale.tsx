import Image from "next/image";
import TornEdge from "./TornEdge";

const verses = [
  "Mỗi vận động viên là một hành trình.",
  "Mỗi huấn luyện viên là một người truyền cảm hứng.",
  "Mỗi câu lạc bộ là một hạt nhân phát triển phong trào.",
  "Và mỗi người tập luyện là một phần của cộng đồng Cử tạ – Thể hình Việt Nam.",
];

const Finale = () => {
  return (
    <section
      id="dong-hanh"
      className="relative overflow-hidden bg-[#002843] text-white pt-[calc(clamp(22px,3.4vw,52px)+6rem)] md:pb-24 pb-16"
    >
      <TornEdge direction="tint" />
      <Image
        src="/assets/images/about/giai-vo-dich-the-hinh-2025.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover grayscale brightness-[.62] contrast-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,40,67,.55)_0%,rgba(0,40,67,.72)_55%,rgba(0,16,32,.96)_100%)]" />

      <div className="relative z-[2] lg:mx-56 md:mx-12 mx-6 flex flex-col items-center text-center">
        <h2 className="max-w-[20em] md:text-5xl text-4xl font-bold leading-tight">
          Đồng hành cùng cộng đồng <br className="hidden md:block" />
          Cử tạ và Thể hình Việt Nam
        </h2>
        <div className="max-w-[720px] mt-6 flex flex-col gap-4 text-base text-white/90">
          <p>
            Từ thể thao thành tích cao đến phong trào tập luyện trong cộng đồng,
            Liên đoàn Cử tạ, Thể hình Việt Nam hướng tới xây dựng một môi trường
            phát triển toàn diện và bền vững.
          </p>
          <p>
            Liên đoàn tin rằng sự phát triển của Cử tạ và Thể hình không chỉ
            được đo bằng những tấm huy chương trên đấu trường quốc tế, mà còn
            được thể hiện qua số lượng người tham gia tập luyện, chất lượng đội
            ngũ chuyên môn, sự phát triển của các câu lạc bộ và những giá trị
            tích cực mà thể thao mang lại cho cộng đồng.
          </p>
        </div>

        <div className="w-full max-w-[960px] mt-16 border-t border-white/20">
          {verses.map((item, index) => (
            <p
              key={index}
              className={`py-6 border-b border-white/20 md:text-[1.75rem] text-[1.375rem] font-bold ${
                index === verses.length - 1 ? "text-[#FFC580]" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Finale;
