import Reveal from "./Reveal";
import { paperSurface } from "./TornEdge";

const data = [
  {
    title: "Thể thao thành tích cao",
    content:
      "Đồng hành cùng vận động viên, huấn luyện viên và các đơn vị chuyên môn trong quá trình đào tạo, thi đấu và phát triển thành tích.",
  },
  {
    title: "Thể thao phong trào",
    content:
      "Phát triển phong trào tập luyện Cử tạ, Thể hình và Fitness trong cộng đồng.",
  },
  {
    title: "Đào tạo chuyên môn",
    content:
      "Góp phần xây dựng đội ngũ hướng dẫn viên, huấn luyện viên, trọng tài và nhân sự chuyên môn có kiến thức, kỹ năng và đạo đức nghề nghiệp.",
  },
  {
    title: "Tổ chức thi đấu",
    content:
      "Tổ chức và phối hợp tổ chức các giải đấu, từ cấp quốc gia đến các hoạt động phong trào.",
  },
  {
    title: "Khoa học thể thao",
    content:
      "Cập nhật và ứng dụng kiến thức khoa học, công nghệ và phương pháp huấn luyện hiện đại.",
  },
  {
    title: "Hợp tác trong nước và quốc tế",
    content:
      "Kết nối với các cơ quan quản lý, tổ chức thể thao, trường đại học, doanh nghiệp, chuyên gia và các tổ chức quốc tế.",
  },
];

// Hình minh họa đòn tạ đặt giữa lưới
const Barbell = () => (
  <svg
    viewBox="0 0 560 220"
    role="img"
    aria-label="Hình minh họa đòn tạ"
    xmlns="http://www.w3.org/2000/svg"
    className="block w-[min(88%,460px)] h-auto mx-auto mt-6 mb-2 lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[min(26%,360px)] lg:m-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:pointer-events-none lg:drop-shadow-[0_20px_24px_rgba(0,40,67,.18)]"
  >
    <defs>
      <linearGradient id="about-plate" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#FFB256" />
        <stop offset="1" stopColor="#CC6C00" />
      </linearGradient>
    </defs>
    <g
      fill="none"
      stroke="#002843"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="110" x2="554" y2="110" strokeWidth="2.4" />
      <g fill="url(#about-plate)" fillOpacity=".92">
        <rect x="70" y="18" width="26" height="184" rx="5" />
        <rect x="98" y="34" width="22" height="152" rx="5" />
        <rect x="122" y="52" width="18" height="116" rx="5" />
        <rect x="464" y="18" width="26" height="184" rx="5" />
        <rect x="440" y="34" width="22" height="152" rx="5" />
        <rect x="420" y="52" width="18" height="116" rx="5" />
      </g>
      <rect x="142" y="96" width="14" height="28" rx="3" fill="#FFFFFF" />
      <rect x="404" y="96" width="14" height="28" rx="3" fill="#FFFFFF" />
      <path
        d="M156 104 L404 104 M156 116 L404 116"
        strokeWidth="1"
        opacity=".55"
      />
    </g>
  </svg>
);

const Fields = () => {
  return (
    <section
      id="linh-vuc"
      className="relative md:py-24 py-16"
      style={paperSurface}
    >
      <div className="lg:mx-56 md:mx-12 mx-6">
        <Reveal
          as="h2"
          className="md:text-4xl text-[1.75rem] font-bold text-[#235B76] text-center"
        >
          Các lĩnh vực
          <br />
          hoạt động trọng tâm
        </Reveal>
        <Reveal
          as="p"
          delay={0.15}
          className="max-w-[600px] mx-auto mt-4 mb-12 text-center text-base text-[#8E8E93]"
        >
          Hoạt động của Liên đoàn được triển khai trên nhiều lĩnh vực, hướng tới
          sự phát triển toàn diện của hệ sinh thái Cử tạ và Thể hình Việt Nam:
        </Reveal>

        <div className="relative grid lg:grid-cols-2 grid-cols-1 border border-[#D1D1D6]">
          <Barbell />
          {data.map((item, index) => {
            const isRight = index % 2 === 1;
            const isLastRow = index >= data.length - 2;
            return (
              <Reveal
                as="article"
                key={index}
                x={isRight ? 32 : -32}
                y={0}
                delay={Math.floor(index / 2) * 0.12}
                className={`lg:px-12 md:p-8 px-6 py-8 border-b border-[#D1D1D6] ${
                  index === data.length - 1 ? "border-b-0" : ""
                } ${isLastRow ? "lg:border-b-0" : ""} ${
                  isRight ? "lg:text-right" : "lg:border-r"
                }`}
              >
                <h3
                  className={`max-w-[16em] mb-2 text-[1.375rem] font-bold text-[#222222] ${
                    isRight ? "lg:ml-auto" : ""
                  }`}
                >
                  <span className="block mb-2 text-xs text-[#FF9F2C]">
                    {`0${index + 1}`}
                  </span>
                  {item.title}
                </h3>
                <p
                  className={`max-w-[34ch] text-sm text-[#8E8E93] ${
                    isRight ? "lg:ml-auto" : ""
                  }`}
                >
                  {item.content}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fields;
