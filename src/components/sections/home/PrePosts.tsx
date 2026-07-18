"use client";
import { QueryParam, QueryValue, useFetch } from "@/hooks/react-query/useFetch";
import { Post } from "@/types";
import { apiEndpoints } from "@/utils/constants";
import { formatDate } from "@/utils/formatDate";
import { getImage } from "@/utils/getImage";
import { navigateToPostDetails } from "@/utils/navigate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PrePosts = () => {
  const { data: posts } = useFetch<Post>({
    endpoint: apiEndpoints.LIST_POSTS,
    page: 1,
    limit: 4,
    queryParams: [QueryParam.CATALOG, QueryParam.STATUS],
    queryValues: [QueryValue.CATALOG_NEWS, QueryValue.STATUS_ACTIVE],
  });
  const router = useRouter();

  // const coverPost = React.useMemo(() => {
  //   return posts?.[0];
  // }, [posts]);

  const otherPosts = React.useMemo(() => {
    //return posts?.slice(1, posts?.length);
    return posts;
  }, [posts]);

  return (
    <div className="lg:px-0 md:mx-56 mx-6 mb-11 md:mt-0 mt-12">
      <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
        Tin tức
      </h3>
      <div className="flex lg:flex-row flex-col md:gap-8 gap-6 w-full">
        {otherPosts.map((post, index) => (
          <div key={index} className="w-full">
            {post?.imagePath && (
              <div
                className="w-full h-[252px] md:h-[252px] relative cursor-pointer"
                onClick={() => navigateToPostDetails(router, post?.uuid)}
              >
                <Image
                  src={getImage(`${post?.imagePath}`)}
                  alt={post?.title || "No title"}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
            <h6 className="text-[1.75rem] font-bold text-[#1D1D1D] mt-4 mb-2 line-clamp-2">
              {post?.title || "Tiêu đề"}
            </h6>
            <p className="text-[1rem] text-[#737373] mb-[1.125rem] w-full line-clamp-2">
              {post?.title || "Mô tả"}...
            </p>

            <div className="flex items-center justify-between">
              <span className="text-[#959393] text-[0.875rem]">
                {(post?.timePublic && formatDate(`${post?.timePublic}`)) ||
                  "31/10/2025"}
              </span>
              <span
                className=" text-[1rem] text-[#235B76] underline cursor-pointer hover:opacity-70"
                onClick={() => navigateToPostDetails(router, post?.uuid)}
              >
                Xem thêm
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrePosts;
