import Image from "next/image";

const data = [
  {
    src: "/assets/images/pre-partners/07.png",
    width: 112,
    height: 35.84,
  },
  {
    src: "/assets/images/pre-partners/08.png",
    width: 100,
    height: 37,
  },
  {
    src: "/assets/images/pre-partners/09.png",
    width: 100,
    height: 37,
  },
  {
    src: "/assets/images/pre-partners/10.png",
    width: 89.89,
    height: 36.48,
  },
];

const PrePartner = () => {
  return (
    <div className="bg-white">
      <div className="lg:px-0 md:mx-56 mx-6 py-6">
        <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
          Đối tác liên kết
        </h3>
        <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-center md:gap-[1.875rem] gap-6 md:bg-white bg-[rgba(255,255,255,0.45)] md:pb-0 pb-12">
          {data?.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={item.src}
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[70%] h-auto md:w-[40%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrePartner;
