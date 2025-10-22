import { ArrowRightIcon, EmailIcon, HomeGrayIcon, PhoneIcon } from "@/icons";

const contacts = [
  {
    text: "Số 3A24, Ngõ 385 Hoàng Quốc Việt, Phường Nghĩa Tân, Hanoi, Vietnam",
    icon: <HomeGrayIcon />,
  },
  {
    text: "034 275 3753",
    icon: <PhoneIcon />,
  },

  {
    text: "liendoancutathehinhvietnam@gmail.com",
    icon: <EmailIcon />,
  },
];

const pages = [
  {
    text: "Tin tức",
  },
  {
    text: "Khoá học",
  },

  {
    text: "Hội nghị",
  },
  {
    text: "Sự kiện",
  },
  {
    text: "Liên hệ",
  },
  {
    text: "Đăng ký",
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#002843] md:pb-0 pb-[20rem]">
        <div className="lg:px-0 md:mx-48 mx-6">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[1.875rem]  py-[3.75rem]">
            <div>
              <h3 className="text-[#FF9F2C] uppercase text-base border-b border-[#454545] py-3 mb-5">
                liên đoàn cử tạ thể hình vn
              </h3>
              <p className="text-xs text-[#8F8F8F]">
                Tổ chức chính thức đại diện cho các môn Cử tạ và Thể hình trong
                phạm vi quốc gia, trực thuộc sự quản lý của Tổng cục Thể dục Thể
                thao Việt Nam.
              </p>
            </div>
            {/* <div>
            <h3 className="text-[#e74c3c] uppercase text-base border-b border-[#454545] py-3 mb-5">
              Để lại lời nhắn cho chúng tôi
            </h3>
            <p className="text-xs text-[#8F8F8F]">
              Email: info@evovietnam.com.vn
              <br />
              Số điện thoại: 0971 090 094
            </p>
          </div> */}
            <div>
              <h3 className="text-[#FF9F2C] uppercase text-base border-b border-[#454545] py-3 mb-5">
                Trang
              </h3>
              <div>
                {pages?.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer flex flex-row gap-3 items-center"
                  >
                    <ArrowRightIcon />
                    <span className="text-xs text-[#8F8F8F]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#FF9F2C] uppercase text-base border-b border-[#8F8F8F] py-3 mb-5">
                liên hệ
              </h3>
              <div>
                {contacts.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 items-center mb-2"
                  >
                    <span className="w-5 flex items-center justify-center">
                      {item.icon}
                    </span>
                    <span className="text-xs text-[#8F8F8F] w-52 whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
