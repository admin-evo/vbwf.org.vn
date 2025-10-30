/* eslint-disable @next/next/no-img-element */
import IconBox from "@/components/IconBox";
import { ArrowUpRightIcon, UserIcon } from "@/icons";

const data = [
  { icon: <UserIcon />, label: "Xác minh danh tính" },
  { icon: <UserIcon />, label: "Xác thực chứng chỉ" },
  { icon: <UserIcon />, label: "Cơ hội việc làm" },
  { icon: <UserIcon />, label: "Ưu đãi liên kết" },
];

const NFC = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-15 gap-6 lg:px-0 md:mx-56 mx-6 md:mt-8 mt-12">
      <img
        src="/assets/images/nfc/01.png"
        alt="NFC"
        className="h-fit md:w-1/4 w-full"
      />
      <div className="w-full">
        <h3 className="text-[#568EA9] md:text-[1.75rem] text-[3rem] font-bold">
          Thẻ NFC
        </h3>
        <p className="text-[#8E8E93] md:text-xs text-2xl mt-1 mb-4">
          Giải pháp chia sẻ hồ sơ học viên nhanh chóng, bảo mật và chuyên nghiệp
          – chỉ với một chạm
        </p>
        <div>
          <IconBox
            className="bg-[#568EA9] size-[44px] rounded-full items-center justify-center flex"
            icon={<ArrowUpRightIcon />}
          />

          {data?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row items-center gap-[8px] py-[16px] border-b border-solid border-b-[#235B76] ${
                index === data.length - 1 ? "!border-none" : ""
              }`}
            >
              <IconBox
                className="bg-[#BBD2DD] min-w-[44px] min-h-[44px] size-[44px] rounded-full flex items-center justify-center"
                icon={item.icon}
              />
              <p className="text-[#235B76] lg:text-[28px] md:text-[1.5rem] text-[28px] whitespace-nowrap">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/assets/images/nfc/02.jpg"
        alt="NFC"
        className="h-fit md:w-1/4 w-full rounded-lg"
      />
    </div>
  );
};

export default NFC;
