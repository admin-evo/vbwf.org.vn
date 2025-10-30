"use client";
import React, { Fragment } from "react";

const data = [
  {
    id: 1,
    title: "Tôi có thể xem tại đâu?",
    content: `Bạn có thể xem tại:
- Nền tảng chính: website chính thức (www.example.edu.vn) — phát trực tiếp và video theo yêu cầu.
- Ứng dụng di động: iOS & Android (tìm kiếm "Example Academy").
- Điểm xem tập trung: Phòng A201, Tầng 2, Trung tâm Đào tạo.
Lưu ý: Một số buổi có bản quyền giới hạn khu vực.`,
  },
  {
    id: 2,
    title: "Thời lượng cho mỗi khoá học?",
    content: `Thời lượng khoá học:
- Tổng thời lượng: 24 giờ (8 buổi x 3 giờ).
- Học trực tiếp: 16 giờ (5 buổi tại trung tâm).
- Học trực tuyến: 8 giờ (4 buổi livestream + tài liệu tự học).
Yêu cầu hoàn thành: Tham gia ít nhất 75% buổi và nộp bài tập cuối khoá.`,
  },
  {
    id: 3,
    title: "Hồ sơ đăng ký bao gồm những gì?",
    content: `Hồ sơ đăng ký gồm:
- Đơn đăng ký (mẫu của trung tâm).
- 01 bản sao CMND/CCCD/hộ chiếu.
- 02 ảnh 3x4 (chụp trong 6 tháng).
- Bản sao bằng tốt nghiệp (nếu đăng ký học chuyên sâu).
Ghi chú: Hồ sơ nộp trực tiếp hoặc gửi file scan qua email tuyển sinh.`,
  },
  {
    id: 4,
    title: "Chính sách thanh toán & chính sách hoàn tiền",
    content: `Thanh toán:
- Học phí: 3.500.000 VNĐ/khóa.
- Hình thức: Chuyển khoản hoặc đóng trực tiếp tại văn phòng.
Chính sách hoàn tiền:
- Huỷ trước 7 ngày: hoàn 100% (khấu trừ phí quản lý 50.000 VNĐ).
- Huỷ trong vòng 3-7 ngày: hoàn 50%.
- Sau khi khóa bắt đầu: không hoàn tiền.
Liên hệ thanh toán: finance@example.edu.vn`,
  },
];

const CommonQuestions = () => {
  const [selected, setSelected] = React.useState<any | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-1 lg:px-0 md:mx-56 mx-6 py-12">
      <h3 className="font-bold text-[1.75rem]">Câu hỏi thường gặp</h3>
      <div className="w-full flex flex-col gap-1">
        {data?.map((item, index) => (
          <Fragment key={index}>
            <div
              className="bg-white py-3 px-8 w-full flex flex-row items-center justify-between cursor-pointer"
              onClick={() => {
                if (item.id === selected?.id) {
                  setSelected(null);
                  return undefined;
                }

                setSelected(item);
              }}
            >
              <div className="flex flex-row items-center gap-8">
                <span className="text-[2rem] font-bold text-[#FFD9AB]">{`0${item.id}`}</span>
                <span className="text-[1.125rem]">{item.title}</span>
              </div>
              <div
                className={`cursor-pointer w-10 h-10 min-w-10 min-h-10 rounded-full bg-[#FF9F2C] flex items-center justify-center ${
                  selected?.id === item.id && "!bg-[#F3F5F6]"
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${
                    selected?.id === item?.id ? "rotate-45" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z"
                    fill={selected?.id === item?.id ? "#000" : "#FFECD5"}
                  />
                </svg>
              </div>
            </div>
            <div
              className={`${
                selected?.id !== item?.id && "hidden"
              } p-6 bg-white whitespace-pre-line`}
            >
              {item.content}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CommonQuestions;
