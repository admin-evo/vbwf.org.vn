import Image from "next/image";
import React from "react";

const posts = [
  {
    title: "KHAI GIẢNG KHÓA ĐÀO TẠO",
    description:
      "Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these. Horses nearer oh elinor of denote.",
    date: "01/01/2026",
    src: "/assets/images/posts/01.jpg",
  },
  {
    title: "Bế giảng",
    description:
      "Elinor her his secure far twenty eat object. Late any far saw size want man. ",
    date: "01/01/2026",
    src: "/assets/images/posts/02.jpg",
  },
  {
    title: "Bế giảng",
    description:
      "Elinor her his secure far twenty eat object. Late any far saw size want man. ",
    date: "01/01/2026",
    src: "/assets/images/posts/03.jpg",
  },
];

const PrePosts = () => {
  return (
    <div className="lg:px-0 md:mx-48 mx-6 mb-11 md:mt-0 mt-12">
      <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
        Tin tức
      </h3>
      <div className="flex md:flex-row flex-col gap-10">
        <div className="md:w-1/2 w-full">
          <Image
            src={posts[0]?.src}
            alt={posts[0]?.title || "No title"}
            width={468}
            height={252}
            className="w-full h-[252px] object-cover rounded-md"
          />
          <h6 className="text-[1.75rem] font-bold text-[#1D1D1D] mt-4 mb-2">
            {posts[0]?.title}
          </h6>
          <p className="text-[1rem] text-[#737373] mb-[1.125rem] w-full line-clamp-3">
            {posts[0]?.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-[#959393] text-[0.875rem]">
              {posts[0]?.date}
            </span>
            <span className=" text-[1rem] text-[#235B76] underline cursor-pointer hover:opacity-70">
              Xem thêm
            </span>
          </div>
        </div>

        <div className="flex flex-row md:w-1/2 w-full md:gap-10 gap-6">
          {posts.slice(1, 3).map((item, index) => (
            <div key={index}>
              <Image
                src={item?.src}
                alt={item?.title || "No title"}
                width={468}
                height={252}
                className="w-full h-[252px] object-cover rounded-md"
              />
              <h6 className="text-[1.75rem] font-bold text-[#1D1D1D] mt-4 mb-2">
                {item?.title}
              </h6>
              <p className="text-[1rem] text-[#737373] mb-[1.125rem] w-full line-clamp-3">
                {item?.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[#959393] text-[0.875rem]">
                  {posts[0]?.date}
                </span>
                <span className=" text-[1rem] text-[#235B76] underline cursor-pointer hover:opacity-70">
                  Xem thêm
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrePosts;
