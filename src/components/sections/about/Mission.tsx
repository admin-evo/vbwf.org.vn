import Image from "next/image";
import Reveal from "./Reveal";
import TornEdge from "./TornEdge";

const Mission = () => {
  return (
    <section
      id="su-menh"
      className="relative grid items-center min-h-[clamp(520px,60vw,780px)] overflow-hidden bg-[#330000] text-white py-[calc(clamp(22px,3.4vw,52px)+4rem)]"
    >
      <TornEdge direction="down" />
      <Image
        src="/assets/images/about/khoa-hlv-the-hinh-fitness.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[50%_22%] grayscale contrast-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(204,108,0,.78)_0%,rgba(153,57,0,.86)_45%,rgba(51,0,0,.92)_100%)]" />

      <div className="relative z-[2] lg:mx-56 md:mx-12 mx-6 grid lg:grid-cols-12 grid-cols-1 gap-x-6 gap-y-8 items-center">
        <Reveal
          as="h2"
          x={-32}
          y={0}
          className="lg:col-span-5 md:text-5xl text-4xl font-bold leading-tight [text-shadow:0_2px_24px_rgba(51,0,0,.4)]"
        >
          Sứ mệnh
          <br />
          của Liên đoàn
        </Reveal>
        <Reveal delay={0.2} className="lg:col-start-7 lg:col-span-6">
          <p className="mb-6 text-lg font-medium">
            Phát triển Cử tạ và Thể hình Việt Nam theo hướng chuyên nghiệp, khoa
            học, an toàn và hội nhập quốc tế; góp phần nâng cao thể chất cộng
            đồng, phát triển tài năng thể thao và xây dựng nguồn nhân lực chất
            lượng cao cho ngành thể thao.
          </p>
          <p className="text-base text-white/95">
            Liên đoàn hướng tới việc tạo dựng một môi trường trong đó vận động
            viên được phát triển, huấn luyện viên được nâng cao chuyên môn,
            trọng tài được chuẩn hóa nghiệp vụ, câu lạc bộ được kết nối và cộng
            đồng được tiếp cận những kiến thức tập luyện khoa học, an toàn.
          </p>
        </Reveal>
      </div>
      <TornEdge direction="up" />
    </section>
  );
};

export default Mission;
