import Accordion, { AccordionItem } from "./Accordion";
import Reveal from "./Reveal";
import { paperSurface } from "./TornEdge";

const tournaments = [
  "Giải vô địch quốc gia",
  "Giải trẻ và thanh thiếu niên",
  "Giải các câu lạc bộ",
  "Các giải phong trào",
  "Các giải đấu chuyên ngành",
  "Các giải đấu quốc tế tổ chức tại Việt Nam",
  "Các hoạt động giao lưu, thi đấu quốc tế",
];

const data: AccordionItem[] = [
  {
    title: "Phát triển phong trào Cử tạ và Thể hình",
    content: (
      <p>
        Liên đoàn phối hợp với các địa phương, đơn vị và câu lạc bộ thúc đẩy
        phong trào tập luyện Cử tạ và Thể hình trên phạm vi cả nước, hướng tới
        mục tiêu nâng cao sức khỏe, thể lực và chất lượng đời sống cộng đồng.
      </p>
    ),
  },
  {
    title: "Tổ chức và phối hợp tổ chức thi đấu",
    content: (
      <>
        <p>
          Liên đoàn tham gia tổ chức, phối hợp tổ chức các giải Cử tạ và Thể
          hình từ cấp quốc gia đến các hoạt động phong trào, tạo môi trường thi
          đấu chuyên nghiệp, công bằng và lành mạnh cho vận động viên.
        </p>
        <p>
          Thực tế, Liên đoàn đã phối hợp với Cục thể dục Thể thao, các địa
          phương tổ chức nhiều giải đấu, tiêu biểu như
        </p>
        <ul className="flex flex-wrap gap-2">
          {tournaments.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 rounded-full border border-[#D1D1D6] bg-[#F2F2F7] text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Phát hiện và phát triển tài năng thể thao",
    content: (
      <p>
        Liên đoàn phối hợp với các đơn vị chuyên môn, địa phương và câu lạc bộ
        trong việc phát hiện, tuyển chọn và bồi dưỡng vận động viên có năng
        khiếu, góp phần xây dựng lực lượng Cử tạ và Thể hình Việt Nam có khả
        năng thi đấu ở cấp khu vực, châu lục và thế giới.
      </p>
    ),
  },
  {
    title: "Đào tạo và nâng cao chất lượng nguồn nhân lực",
    content: (
      <>
        <p>
          Một trong những nhiệm vụ quan trọng là góp phần nâng cao chất lượng
          đội ngũ huấn luyện viên, hướng dẫn viên, trọng tài và nhân sự chuyên
          môn.
        </p>
        <p>
          Đối với lĩnh vực Thể hình và Fitness, công tác tập huấn chuyên môn cho
          người hướng dẫn tập luyện cũng được pháp luật thể thao quy định với sự
          tham gia của Liên đoàn Cử tạ, Thể hình Việt Nam cùng các cơ quan, đơn
          vị có thẩm quyền.
        </p>
      </>
    ),
  },
  {
    title: "Kết nối khoa học, chuyên môn và thực tiễn",
    content: (
      <>
        <p>
          Liên đoàn hướng tới tăng cường ứng dụng khoa học thể thao trong huấn
          luyện và tập luyện, cập nhật kiến thức về sinh lý vận động, dinh
          dưỡng, phòng ngừa chấn thương, phục hồi thể thao và các phương pháp
          huấn luyện hiện đại.
        </p>
        <p>
          Qua đó, từng bước đưa hoạt động Cử tạ, Thể hình và Fitness tại Việt
          Nam tiếp cận các tiêu chuẩn chuyên môn tiên tiến của khu vực và thế
          giới.
        </p>
      </>
    ),
  },
  {
    title: "Đại diện và mở rộng hợp tác quốc tế",
    content: (
      <>
        <p>
          Liên đoàn thực hiện vai trò đại diện cho Cử tạ và Thể hình Việt Nam
          trong quan hệ với các tổ chức thể thao quốc tế phù hợp với quy định
          pháp luật và tư cách thành viên của Liên đoàn.
        </p>
        <p>
          Trong lịch sử phát triển của hệ thống thể thao Việt Nam, Cử tạ và Thể
          hình đã có sự hiện diện và thành tích đáng chú ý tại các đấu trường
          khu vực, châu lục và thế giới. Việc tăng cường hợp tác quốc tế là một
          trong những nền tảng quan trọng để tiếp tục nâng cao chuyên môn và vị
          thế của thể thao Việt Nam.
        </p>
      </>
    ),
  },
];

const Roles = () => {
  return (
    <section
      id="vai-tro"
      className="relative md:py-24 py-16"
      style={paperSurface}
    >
      <div className="lg:mx-56 md:mx-12 mx-6 grid lg:grid-cols-12 grid-cols-1 gap-x-6 gap-y-8">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <h2 className="mb-6 md:text-4xl text-[1.75rem] font-bold text-[#235B76]">
            Vai trò và chức năng của Liên đoàn
          </h2>
          <p className="max-w-[46ch] text-base text-[#222222]">
            Liên đoàn Cử tạ, Thể hình Việt Nam giữ vai trò là cầu nối giữa các
            cơ quan quản lý nhà nước, tổ chức thể thao, địa phương, câu lạc bộ,
            vận động viên, huấn luyện viên, trọng tài, chuyên gia và cộng đồng
            người tập.
          </p>
          <p className="max-w-[46ch] mt-6 pt-4 border-t border-[#D1D1D6] text-base font-bold text-[#FF9F2C]">
            Các hoạt động trọng tâm của Liên đoàn bao gồm:
          </p>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-start-7 lg:col-span-6">
          <Accordion data={data} />
        </Reveal>
      </div>
    </section>
  );
};

export default Roles;
