import Image from "next/image";
import Accordion, { AccordionItem } from "./Accordion";
import { paperSurface } from "./TornEdge";

const data: AccordionItem[] = [
  {
    title: "Trước khi Liên đoàn được thành lập",
    content: (
      <p>
        Trước khi Liên đoàn Cử tạ, Thể hình Việt Nam được thành lập, các hoạt
        động liên quan đến Cử tạ và Thể hình được quản lý trong hệ thống tổ
        chức thể thao hiện hành. Cùng với sự phát triển nhanh chóng của phong
        trào tập luyện, hệ thống câu lạc bộ và thành tích thi đấu của vận động
        viên Việt Nam, yêu cầu về một tổ chức xã hội – nghề nghiệp chuyên trách
        ngày càng trở nên cần thiết.
      </p>
    ),
  },
  {
    title: (
      <>
        <span className="mr-3 text-sm text-[#FF9F2C]">25/9/2015</span>
        Đại hội thành lập Liên đoàn
      </>
    ),
    content: (
      <>
        <p>
          Ngày 25/9/2015, Đại hội thành lập Liên đoàn Cử tạ, Thể hình Việt Nam
          khóa I, nhiệm kỳ 2015–2019 được tổ chức tại Hà Nội. Đại hội đã thông
          qua Điều lệ, phương hướng hoạt động và bầu Ban Chấp hành Liên đoàn.
          Ông Hoàng Xuân Lương được bầu giữ chức Chủ tịch Liên đoàn khóa I.
        </p>
        <p>
          Sự ra đời của Liên đoàn là dấu mốc quan trọng đối với quá trình chuyên
          nghiệp hóa công tác quản lý, tổ chức và phát triển Cử tạ, Thể hình
          tại Việt Nam. Theo Cục Thể dục thể thao, Liên đoàn được xác định là tổ
          chức quốc gia đại diện cho các môn Cử tạ và Thể hình Việt Nam trong
          quan hệ với các tổ chức thể thao trong nước và quốc tế theo quy định
          của pháp luật.
        </p>
      </>
    ),
  },
  {
    title: "Giai đoạn xây dựng nền tảng",
    content: (
      <>
        <p>
          Trong những năm đầu hoạt động, Liên đoàn tập trung xây dựng hệ thống
          tổ chức, phát triển phong trào tập luyện và thi đấu, đồng thời tăng
          cường công tác đào tạo đội ngũ huấn luyện viên, hướng dẫn viên và
          trọng tài.
        </p>
        <p>
          Cùng với sự phát triển của hệ thống phòng tập, câu lạc bộ và phong
          trào Fitness trên cả nước, Thể hình ngày càng trở thành một hoạt động
          thể thao phổ biến, gắn với nhu cầu nâng cao sức khỏe, thể chất và chất
          lượng cuộc sống của cộng đồng.
        </p>
        <p>
          Đối với Cử tạ, Liên đoàn phối hợp với các cơ quan quản lý thể thao và
          địa phương trong việc tổ chức các giải đấu cấp quốc gia, tạo môi
          trường thi đấu và tuyển chọn vận động viên cho hệ thống thể thao thành
          tích cao. Trong những năm gần đây, Liên đoàn tiếp tục tham gia tổ chức
          các giải vô địch quốc gia và các giải trẻ, góp phần duy trì hệ thống
          thi đấu thường xuyên cho môn Cử tạ.
        </p>
      </>
    ),
  },
  {
    title: "Giai đoạn phát triển và hội nhập",
    content: (
      <>
        <p>
          Bên cạnh nhiệm vụ phát triển thành tích cao, Liên đoàn từng bước mở
          rộng các hoạt động liên quan đến đào tạo chuyên môn, phát triển phong
          trào, phổ biến kiến thức khoa học thể thao và nâng cao chất lượng
          nguồn nhân lực trong lĩnh vực Thể hình và Fitness.
        </p>
        <p>
          Năm 2023, hoạt động kỷ niệm 30 năm phát triển Thể hình và Fitness
          Việt Nam đã ghi nhận những đóng góp của nhiều thế hệ vận động viên,
          huấn luyện viên, trọng tài, cán bộ quản lý và các đơn vị đồng hành
          đối với sự phát triển của môn thể thao này.
        </p>
        <p>
          Ngày nay, Liên đoàn hướng tới xây dựng hệ sinh thái Cử tạ – Thể hình
          phát triển đồng bộ, trong đó kết nối giữa thể thao thành tích cao,
          thể thao phong trào, đào tạo chuyên môn, khoa học thể thao và hoạt
          động xã hội hóa là những yếu tố quan trọng.
        </p>
      </>
    ),
  },
];

const History = () => {
  return (
    <section id="lich-su" className="relative md:py-24 py-16" style={paperSurface}>
      <div className="lg:mx-56 md:mx-12 mx-6 grid lg:grid-cols-12 grid-cols-1 gap-x-6 gap-y-8 items-end">
        <figure className="lg:col-span-5">
          <Image
            src="/assets/images/about/giai-vo-dich-the-hinh-2025.jpg"
            alt="Các đại biểu trên sân khấu Giải Vô địch Thể hình quốc gia năm 2025"
            width={800}
            height={1000}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="w-full aspect-[4/5] object-cover object-[50%_58%]"
          />
          <figcaption className="mt-3 max-w-[52ch] text-xs text-[#8E8E93]">
            Liên đoàn Cử tạ Thể hình Việt Nam phối hợp với Cục Thể dục Thể thao
            tổ chức giải Vô địch Thể hình quốc gia năm 2025
          </figcaption>
        </figure>

        <div className="lg:col-start-7 lg:col-span-6">
          <h2 className="md:text-4xl text-[1.75rem] font-bold text-[#235B76]">
            Lịch sử hình thành và phát triển
          </h2>
          <p className="mt-4 mb-8 max-w-[56ch] text-base text-[#8E8E93]">
            Cử tạ và Thể hình là những môn thể thao có quá trình phát triển lâu
            dài tại Việt Nam và từng bước hình thành hệ thống đào tạo, thi đấu
            từ phong trào đến thành tích cao.
          </p>
          <Accordion data={data} />
        </div>
      </div>
    </section>
  );
};

export default History;
