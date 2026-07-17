"use client";
import { ArrowDownIcon } from "@/icons";
import React from "react";

const data = [
  {
    id: 1,
    title: "Thông tin khoá học",
    content: `Thông tin khoá học gồm:
- Khóa học offline tổ chức tại: Hà Nội, Đà Nẵng, Hồ Chí Minh
- Khóa học online: Dành cho học viên trên toàn quốc`,
  },
  {
    id: 2,
    title: "Hồ sơ đăng ký",
    content: `Hồ sơ đăng ký khóa học bao gồm:
- Bản đăng ký tham gia khóa học
- 02 ảnh 3x4 (ảnh thẻ nền trắng, mặc áo sơ mi)
- 02 ảnh 4x6  (ảnh thẻ nền trắng, mặc áo sơ mi)
- Bản photo căn cước điện tử trên VNeID`,
  },
  {
    id: 3,
    title: "Nội dung học",
    content: `Nội dung chương trình
- Lý luận và phương pháp giáo dục thể chất và huấn luyện thể thao;  
- Cơ sở giải phẫu và sinh lý vận động;  
- Lý luận và phương pháp Huấn luyện môn Thể hình;  
- Lý luận và phương pháp Huấn luyện môn Fitness;  
- Đề phòng chấn thương trong tập luyện;
- Dinh dưỡng trong tập luyện;
- Phòng và chống Doping trong luyện tập Thể hình & Fitness
- Tập luyện bằng phương pháp xung điện (EMS) trong Thể hình & Fitness
- Quản lý phòng tập, CEO và phương pháp tổ chức kinh doanh ngành Thể hình và Fitnees`,
  },
  {
    id: 4,
    title: "Quyền lợi học viên",
    content: `Quyền lợi học viên
- Nhận được chứng chỉ HLV cấp 2 cấp có giá trị trên toàn quốc
- Nhận được giáo trình độc quyền của Liên đoàn
- Nhận được áo đồng phục thiết kế độc quyền của Liên đoàn
- Được tham gia các buổi Workshop miễn phí
- Cơ hội giao lưu học hỏi kinh nghiệm giữa các giảng viên và học viên trong lớp
`,
  },
  {
    id: 5,
    title: "Học phí",
    content: `Học phí khóa HLV cấp 2 theo hình thức offline năm 2026 là 8.5tr/bạn (đã bao gồm áo, in bằng và tài liệu) 
- Không phát sinh chi phí
- Khóa tự túc chi phí ăn ở.
Học phí khóa HLV cấp 2 online năm 2026 là 9.5tr/bạn (đã bao gồm áo, in bằng, tài liệu tiền vận chuyển tài liệu giấy chứng nhận, VAT) ạ
- Không phát sinh chi phí
- Không bao gồm chi phí vận chuyển hồ sơ từ học viên đến văn phòng
Hình thức thanh toán:
- Chuyển khoản ngân hàng
- Thanh toán trực tiếp tại văn phòng
Lưu ý: Học viên đóng học phí trước khi hết hạn đăng ký.`,
  },
];

const ShortInfo = () => {
  const [selectedInfo, setSelectedInfo] = React.useState<null | any>(data[0]);
  return (
    <div className="flex flex-col items-center justify-center gap-1 lg:px-0 md:mx-56 mx-6 py-12">
      <div className="w-full flex md:flex-row flex-col gap-6">
        <div className="md:w-[28%] w-full flex flex-col md:gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <div
                className={`w-full bg-white md:py-2 py-4 md:px-4 px-6 md:text-[1.75rem] text-[18px] cursor-pointer border-b md:border-none border-b-[#E2E8F0] flex flex-row justify-between items-center ${
                  item.id === selectedInfo?.id && "!text-[#568EA9]"
                }`}
                onClick={() => {
                  setSelectedInfo(item);
                }}
              >
                {item.title}
                <div className="md:hidden">
                  <ArrowDownIcon
                    className={`transition-transform duration-300 ${
                      item.id === selectedInfo?.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              <div
                className={`md:hidden ${
                  selectedInfo?.id !== item.id && "hidden"
                } py-4 px-6 bg-white whitespace-pre-line`}
              >
                {selectedInfo?.content}
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-[72%] w-full md:block hidden bg-white h-fit p-4 text-base whitespace-pre-line">
          {selectedInfo?.content}
        </div>
      </div>
    </div>
  );
};

export default ShortInfo;
