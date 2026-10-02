import Reveal from "./Reveal";
import { paperSurface } from "./TornEdge";

const data = [
  {
    title: "Chuyên nghiệp",
    content:
      "Đặt chất lượng chuyên môn, tính minh bạch và chuẩn mực nghề nghiệp làm nền tảng.",
  },
  {
    title: "Khoa học",
    content:
      "Đề cao việc ứng dụng khoa học thể thao và các phương pháp huấn luyện hiện đại.",
  },
  {
    title: "Phát triển",
    content:
      "Không ngừng nâng cao chất lượng vận động viên, huấn luyện viên, trọng tài và nguồn nhân lực trong ngành.",
  },
  {
    title: "Kết nối",
    content:
      "Tạo cầu nối giữa cơ quan quản lý, tổ chức thể thao, địa phương, câu lạc bộ, chuyên gia, doanh nghiệp và cộng đồng.",
  },
  {
    title: "Hội nhập",
    content:
      "Tăng cường giao lưu, hợp tác quốc tế và từng bước đưa Cử tạ, Thể hình Việt Nam tiếp cận các chuẩn mực quốc tế.",
  },
];

const CoreValues = () => {
  return (
    <section
      id="gia-tri"
      className="relative md:py-24 py-16"
      style={paperSurface}
    >
      <div className="lg:mx-56 md:mx-12 mx-6">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-6 gap-y-8 mb-16">
          <Reveal
            as="h2"
            className="lg:col-span-6 md:text-4xl text-[1.75rem] font-bold text-[#235B76]"
          >
            Tầm nhìn
            <br />
            và giá trị cốt lõi
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-6">
            <span className="block mb-2 text-base font-bold text-[#FF9F2C]">
              Tầm nhìn
            </span>
            <p className="max-w-[52ch] text-lg text-[#222222]">
              Trở thành tổ chức đầu mối có uy tín trong việc phát triển Cử tạ và
              Thể hình Việt Nam; xây dựng hệ sinh thái thể thao chuyên nghiệp,
              khoa học và bền vững, từng bước nâng cao vị thế của Cử tạ và Thể
              hình Việt Nam trên trường quốc tế.
            </p>
          </Reveal>
        </div>

        <ul className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8">
          {data.map((item, index) => (
            <Reveal
              as="li"
              key={index}
              delay={index * 0.1}
              className="pt-2 border-t-2 border-[#FF9F2C]"
            >
              <span className="block mt-4 mb-2 md:text-4xl text-[1.75rem] font-bold text-[#FF9F2C]">
                {`0${index + 1}`}
              </span>
              <h3 className="mb-2 text-lg font-bold text-[#222222]">
                {item.title}
              </h3>
              <p className="text-base text-[#8E8E93]">{item.content}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoreValues;
