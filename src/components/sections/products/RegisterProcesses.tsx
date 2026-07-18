const data = [
  {
    title: "Đăng ký thông tin",
    description: "Hệ thống kiểm tra giấy tờ hoặc dùng eKYC để xác minh.",
  },
  {
    title: "Xác thực & phê duyệt",
    description: "Người dùng nhận thẻ và kích hoạt tự động qua hệ thống.",
  },
  {
    title: "Nhận & kích hoạt thẻ NFC",
    description: "Dùng thẻ để quét truy cập, điểm danh, nhận ưu đãi...",
  },
  {
    title: "Sử dụng & quản lý",
    description:
      "Nhận thẻ NFC sau đó tải app để quản lý tài khoản, kiểm tra trạng thái thẻ, quét mã…",
  },
];

const RegisterProcesses = () => {
  return (
    <div className="bg-white">
      <div className="mx-6 py-6 md:mx-20 lg:mx-auto lg:max-w-7xl">
        <h3 className="mb-8 text-center text-[1.75rem] font-bold text-[#222222]">
          Quy trình đăng ký
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8">
          {data.map((item, index) => (
            <div key={index} className="h-full">
              <div
                className="
                  flex h-full flex-col items-center
                  rounded-xl border border-[#235B76]
                  px-6 py-8
                "
              >
                <h3 className="mb-4 text-center text-[1.125rem] font-bold text-[#235B76] underline">
                  {item.title}
                </h3>

                <p className="text-center text-[0.875rem] leading-6 text-[#8E8E93]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterProcesses;
