import { CilEducationIcon } from "@/icons";

/* eslint-disable @next/next/no-img-element */
const Incoming = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit gap-2 mt-8 relative">
      <div className="absolute w-full h-full">
        <img
          src={"/assets/images/banners/02.jpg"}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[rgba(0,0,0,0.7)] z-0 w-full h-full py-8">
        <div className="flex items-center justify-center h-full flex-col">
          <CilEducationIcon />
          <div className="text-center flex items-center justify-center flex-col mt-2">
            <h3 className="text-white text-lg font-bold">
              Tuyển sinh tháng 9/2025
            </h3>
            <p className="text-[#D1D1D6] text-xs mt-1 mb-4">
              Nâng cấp kỹ năng – Học nhanh – Ứng dụng liền
            </p>
            <div className="bg-[#FF9F2C] hover:bg-[#FFB256] w-fit px-4 py-2 rounded-md text-white text-sm cursor-pointer">
              Đăng ký
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incoming;
