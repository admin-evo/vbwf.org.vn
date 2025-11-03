"use client";
import { QueryParam, useFetch } from "@/hooks/react-query/useFetch";
import { Post } from "@/types";
import { apiEndpoints } from "@/utils/constants";
import { formatDate } from "@/utils/formatDate";
import { getImage } from "@/utils/getImage";
import { navigateToPostDetails } from "@/utils/navigate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { catalog?: number; uuid?: string };

const RelatedPosts = (props: Props) => {
  const { catalog, uuid } = props;
  const router = useRouter();
  const { data: posts } = useFetch<Post>({
    endpoint: apiEndpoints.RELATED_POSTS,
    page: 1,
    limit: 3,
    queryParams: [QueryParam.CATALOG, QueryParam.IGNORE_UUID],
    queryValues: [catalog, uuid],
    enabled: !!catalog && !!uuid,
  });
  return (
    <div className="flex flex-col justify-center gap-1 lg:px-0 md:mt-1 mt-2 py-8">
      <h3 className="font-bold text-2xl mb-2">Bài viết liên quan</h3>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full items-center gap-8 pb-20">
        {posts && posts?.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="w-full">
              {post?.imagePath && (
                <Image
                  src={getImage(post?.imagePath)}
                  alt={post?.title || "No title"}
                  width={468}
                  height={252}
                  className="w-full h-[252px] object-cover rounded-md cursor-pointer"
                  onClick={() => navigateToPostDetails(router, post?.uuid)}
                />
              )}
              <h6 className="text-[1.125rem] text-[#1D1D1D] mt-4 mb-2 line-clamp-2">
                {post?.title}
              </h6>
              <p className="text-[1rem] text-[#737373] mb-2 w-full line-clamp-1">
                {post?.title}...
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[#959393] text-[0.875rem]">
                  {post?.timePublic && formatDate(`${post?.timePublic}`)}
                </span>
                <span
                  className=" text-[1rem] text-[#235B76] underline cursor-pointer hover:opacity-70"
                  onClick={() => navigateToPostDetails(router, post?.uuid)}
                >
                  Xem thêm
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="font-medium">
            {" "}
            Không có tin tức nào được tìm thấy.
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedPosts;
