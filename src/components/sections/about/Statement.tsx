import Reveal from "./Reveal";
import { paperSurface } from "./TornEdge";

const data = [
  "Liên đoàn Cử tạ, Thể hình Việt Nam hoạt động trong lĩnh vực thể dục, thể thao theo quy định của pháp luật và Điều lệ Liên đoàn; chịu sự quản lý nhà nước về thể dục, thể thao của Bộ Văn hóa, Thể thao và Du lịch thông qua cơ quan chuyên môn là Cục Thể dục thể thao Việt Nam. Với tư cách là tổ chức xã hội – nghề nghiệp cấp quốc gia, Liên đoàn phối hợp với các cơ quan quản lý, tổ chức thể thao, địa phương và các đơn vị liên quan để phát triển phong trào, tổ chức thi đấu, đào tạo nguồn nhân lực và thúc đẩy sự phát triển của Cử tạ, Thể hình Việt Nam.",
  "Với định hướng phát triển thể thao chuyên nghiệp gắn với phong trào quần chúng, Liên đoàn từng bước xây dựng môi trường hoạt động chuyên môn, tổ chức thi đấu, đào tạo nguồn nhân lực, phát hiện và phát triển tài năng, đồng thời mở rộng hợp tác trong nước và quốc tế.",
  "Thông qua các hoạt động chuyên môn và xã hội hóa thể thao, Liên đoàn hướng tới góp phần nâng cao chất lượng Cử tạ và Thể hình Việt Nam, thúc đẩy việc ứng dụng khoa học thể thao trong tập luyện và huấn luyện, đồng thời tạo điều kiện để các vận động viên, huấn luyện viên và những người hoạt động trong lĩnh vực phát triển lâu dài, chuyên nghiệp.",
];

// Khoảng lệch bậc thang của 3 khối chữ trên desktop
const offsets = ["", "lg:mt-12", "lg:mt-24"];

const Statement = () => {
  return (
    <section
      id="gioi-thieu"
      className="relative scroll-mt-24 md:py-24 py-16"
      style={paperSurface}
    >
      <div className="lg:mx-56 md:mx-12 mx-6">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-6 gap-y-8">
          <Reveal
            as="h2"
            className="lg:col-span-7 md:text-4xl text-[1.75rem] font-bold text-[#235B76]"
          >
            Tổ chức xã hội – nghề nghiệp cấp quốc gia
          </Reveal>
          <Reveal
            as="p"
            delay={0.15}
            className="lg:col-span-5 text-lg text-[#222222]"
          >
            Liên đoàn Cử tạ, Thể hình Việt Nam là tổ chức xã hội – nghề nghiệp
            hoạt động trong lĩnh vực Cử tạ và Thể hình tại Việt Nam. Liên đoàn
            có vai trò tập hợp, kết nối các tổ chức, câu lạc bộ, vận động viên,
            huấn luyện viên, trọng tài, chuyên gia và những người hoạt động, tập
            luyện, quan tâm đến hai môn thể thao Cử tạ và Thể hình.
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 md:mt-20 mt-12">
          {data.map((item, index) => (
            <Reveal
              as="p"
              key={index}
              delay={index * 0.15}
              className={`relative pt-6 border-t border-[#D1D1D6] text-base text-[#222222] ${
                offsets[index]
              } ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="absolute left-0 -top-[5px] size-[9px] rounded-full bg-[#FF9F2C]" />
              {item}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statement;
