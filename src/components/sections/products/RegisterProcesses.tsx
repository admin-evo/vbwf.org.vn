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
      <div className="lg:px-0 md:mx-48 mx-6 py-6 ">
        <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
          Quy trình đăng ký
        </h3>
        <div className="grid md:grid-cols-4 grid-cols-1 items-center justify-center md:gap-[1.875rem] gap-6 md:bg-white bg-[rgba(255,255,255,0.45)] p-6 md:p-0">
          {data?.map((item, index) => (
            <div key={index} className="px-4">
              <div
                className={`flex flex-col md:gap-2 gap-[0.625rem] items-center justify-center py-[20px] border border-[#235B76] rounded-lg md:border-none`}
              >
                <h3 className="text-[1.125rem] font-bold text-[#235B76] underline">
                  {item?.title}
                </h3>
                <span className="text-[#8E8E93] text-[0.875rem] text-center md:w-[11.875rem] md:px-0 px-4">
                  {item?.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterProcesses;
