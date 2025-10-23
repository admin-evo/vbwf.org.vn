import Image from "next/image";

const data = [
  {
    price: "200.000đ",
    title: "Cơ bản",
    description: "For most businesses that want to otpimize web queries",
    subItems: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "600.000đ",
    title: "Bình thường",
    description: "For most businesses that want to otpimize web queries",
    subItems: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
  {
    price: "1.00.000đ",
    title: "Nâng cao",
    height: 36.48,
    description: "For most businesses that want to otpimize web queries",
    subItems: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-[#DDE8EE] pb-12">
      <div className="lg:px-0 md:mx-64 mx-6 py-6">
        <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
          Đăng ký gói
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-6">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-6 rounded-2xl shadow hover:shadow-2xl"
            >
              <div className="bg-[#9ABBCB] text-white text-[0.625rem] rounded-full px-4 py-1.5 mb-6 w-fit ml-auto">
                Nổi bậc nhất
              </div>
              <div className="flex items-center justify-center mb-3">
                <span className="text-[2.25rem] text-[#002843] font-bold">
                  {item?.price}
                </span>
                <span className="text-[#002843] text-[1.125rem]">/tháng</span>
              </div>
              <div className="text-[1.75rem] text-[#002843] font-bold mb-2.5">
                {item?.title}
              </div>
              <div className="text-[1rem] text-[#002843] font-medium">
                {item?.description}
              </div>
              <div className="mt-6 flex flex-col gap-2.5">
                {item?.subItems.map((sub, subIndex) => (
                  <div key={subIndex} className="flex flex-row gap-2.5">
                    <div className="size-6 min-w-6 min-h-6 bg-[#e6eaed] rounded-full items-center flex justify-center">
                      <Image
                        src={"/assets/images/check.png"}
                        width={11.47}
                        height={9.43}
                        alt="Check Icon"
                      />
                    </div>
                    <span className="text-[#002843] text-[1rem]">{sub}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#FF9F2C] rounded-md py-2 px-4 text-white cursor-pointer hover:opacity-75 mt-6 w-fit mx-auto">
                Đăng ký
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
