/* eslint-disable @next/next/no-img-element */
const lectureres = [
  {
    name: "Nguyễn Hồng Minh",
    pos: "giảng viên",
    description: "Phó Chủ tịch Liên đoàn Cử tạ, Thể hình Việt Nam",
    src: "/assets/images/pre-lecturers/01.png",
  },
  {
    name: "Maik Berger",
    pos: "giảng viên",
    description: "Phó Chủ tịch Liên đoàn Cử tạ, Thể hình Việt Nam",
    src: "/assets/images/pre-lecturers/02.png",
  },
  {
    name: "PGS.TS Đàm Tuấn Khôi",
    pos: "giảng viên",
    description: "Phó Chủ tịch Liên đoàn Cử tạ, Thể hình Việt Nam",
    src: "/assets/images/pre-lecturers/03.png",
  },
  {
    name: "Bùi Minh Tiến",
    pos: "giảng viên",
    description: "Phó Chủ tịch Liên đoàn Cử tạ, Thể hình Việt Nam",
    src: "/assets/images/pre-lecturers/04.png",
  },
];

const PreLecturers = () => {
  return (
    <div className="lg:px-0 md:mx-48 mx-6">
      <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
        Đội ngũ giảng viên
      </h3>
      <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-center md:gap-[1.875rem] gap-6">
        {lectureres?.map((item, index) => (
          <div key={index} className="w-full bg-white p-3 min-h-[29rem]">
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="mt-5">
              <h3 className="text-base text-[#333333] text-[1.75rem] font-bold uppercase min-h-24">
                {item.name}
              </h3>
              <p className="uppercase text-[#FF9F2C] text-xs mt-0.5 mb-2">
                {item.pos}
              </p>
              <p className="text-[#696969] text-[1.125rem]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreLecturers;
