"use client";
import { ArrowDownIcon } from "@/icons";
import React from "react";

const data = [
  {
    id: 1,
    title: "Thông tin khoá học",
    content: `Thời gian dự kiến: 04 - 10/08/2025
 Địa điểm học tập: Trường Đại Học Giao thông Vận tải Số 3, Cầu Giấy, Ngọc Khánh, Đống Đa, Hà Nội.
 Người liên hệ:
    - Lê Thị Thảo - 0342 753 753
    - Nguyễn Thị Thanh Trúc - 0971 090 094`,
  },
  {
    id: 2,
    title: "Hồ sơ đăng ký",
    content: `Hồ sơ gồm có:
    - Đơn đăng ký học (theo mẫu)
    - Bản sao công chứng bằng tốt nghiệp
    - 02 ảnh 3x4 (chụp trong 6 tháng gần nhất)
Hạn nộp hồ sơ: Trước ngày 01/08/2025`,
  },
  {
    id: 3,
    title: "Nội dung học",
    content: `Chương trình bao gồm:
    - Phần 1: Giới thiệu chuyên ngành
    - Phần 2: Kiến thức thực hành
    - Phần 3: Bài tập và đồ án cuối khóa`,
  },
  {
    id: 4,
    title: "Quyền lợi học viên",
    content: `Quyền lợi:
    - Nhận chứng chỉ sau khi hoàn thành khóa học
    - Hỗ trợ việc làm sau khóa học
    - Được tham gia các buổi workshop miễn phí`,
  },
  {
    id: 5,
    title: "Học phí",
    content: `Học phí: 4.500.000 VNĐ / học viên
Hình thức thanh toán:
    - Chuyển khoản ngân hàng
    - Thanh toán trực tiếp tại văn phòng
Lưu ý: Học viên đóng học phí trước khi khai giảng.`,
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
