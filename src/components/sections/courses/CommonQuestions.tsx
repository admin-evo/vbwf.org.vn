"use client";
import React, { Fragment } from "react";

const data = [
  {
    id: 1,
    title: "Khóa học đang được tuyển sinh là khóa cấp mấy?",
    content: `Liên đoàn hiện nay đang tổ chức khóa <strong>"Đào tạo người hướng dẫn tập luyện môn Thể hình & Fitness trình độ HLV cấp 2"<strong>
`,
  },
  {
    id: 2,
    title: "Tại sao Liên đoàn tổ chức khóa cấp 2 mà không phải là khóa cấp 1?",
    content: `Vì theo phân cấp của Liên đoàn, Khóa HLV cấp 2 là <strong>khóa học cơ bản, dành cho mọi đối tượng</strong> học viên từ trên 18 tuổi.`,
  },
  {
    id: 3,
    title: "Khóa học diễn ra trong bao lâu?",
    content: `Khóa học sẽ diễn ra trực tiếp trong 7 ngày hoặc theo thông báo của từng lớp`,
  },
  {
    id: 4,
    title: "Hồ sơ tham gia khóa học bao gồm những gì",
    content: `Thanh toán:
👉Hồ sơ tham dự khóa học gồm:
- Bản đăng ký tham gia khóa học 
- 02 ảnh 3x4 (ảnh thẻ nền trắng, áo sơ mi trắng)
- 02 ảnh 4x6 (ảnh thẻ nền trắng, áo sơ mi trắng)
- Bản photo CCCD (còn hạn sử dụng) không cần công chứng`,
  },
  {
    id: 5,
    title: "Giá trị của giấy chứng nhận là gì?",
    content: `Thanh toán:
GIÁ TRỊ CỦA GIẤY CHỨNG NHẬN KHÓA HLV CẤP II:
✅ Giấy phép hành nghề DUY NHẤT, có giá trị TOÀN QUỐC
✅ Giấy chứng nhận hành nghề HLV chuyên nghiệp
✅ Đủ cơ sở pháp lý để hành nghề và kinh doanh trong lĩnh vực Gym và Fitness`,
  },
];

const CommonQuestions = () => {
  const [selected, setSelected] = React.useState<any | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-1 lg:px-0 md:mx-56 mx-6 py-12">
      <h3 className="font-bold text-[1.75rem] mb-1">Câu hỏi thường gặp</h3>
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
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CommonQuestions;
