/* eslint-disable @next/next/no-img-element */
const lectureres = [
  {
    name: "Nguyễn Hồng Minh",
    pos: "giảng viên",
    description: "Phó Chủ tịch Liên đoàn Cử tạ, Thể hình Việt Nam",
    image: "/assets/images/pre-lecturers/01.png",
  },
  {
    name: "Maik Berger",
    pos: "giảng viên",
    description: "Phó Chủ tịch Liên đoàn Cử tạ, Thể hình Việt Nam",
    image: "/assets/images/pre-lecturers/02.png",
  },
  {
    name: "PGS.TS Đàm Tuấn Khôi",
    pos: "giảng viên",
    description: "Phó Chủ tịch Liên đoàn Cử tạ, Thể hình Việt Nam",
    image: "/assets/images/pre-lecturers/03.png",
  },
  {
    name: "Bùi Minh Tiến",
    pos: "giảng viên",
    description: "Phó Chủ tịch Liên đoàn Cử tạ, Thể hình Việt Nam",
    image: "/assets/images/pre-lecturers/04.png",
  },
];

const PreLecturers = () => {
  return (
    <div className="lg:px-0 md:mx-48 mx-6">
      <h3 className="text-[#222222] uppercase font-bold text-3xl">
        Đội ngũ giảng viên
      </h3>
      <p className="text-sm text-[#777777] mt-1 mb-4">
        Kết nối tri thức từ chuyên gia trong và ngoài nước
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-[1.875rem]">
        {lectureres?.map((item, index) => (
          <div key={index} className="w-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="mt-5">
              <h3 className="text-base text-[#333333] font-bold uppercase">
                {item.name}
              </h3>
              <p className="uppercase text-[#e74c3c] text-xs mt-0.5 mb-2">
                {item.pos}
              </p>
              <p className="text-[#696969] text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreLecturers;
