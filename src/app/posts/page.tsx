"use client";
import Pagination from "@/components/Pagination";
import ListCategories from "@/components/sections/posts/ListCategories";
import { QueryParam, QueryValue, useFetch } from "@/hooks/react-query/useFetch";
import { Post } from "@/types";
import { apiEndpoints, ITEMS_PER_PAGE } from "@/utils/constants";
import { formatDate } from "@/utils/formatDate";
import { getImage } from "@/utils/getImage";
import { navigateToPostDetails } from "@/utils/navigate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const [page, setPage] = React.useState(1);
  const [keyword] = React.useState("");
  const [catalogId, setCatalogId] = React.useState<null | number>(null);
  const [coverPost, setcoverPost] = React.useState<Post | null>(null);
  const { data: posts, totalElements } = useFetch<Post>({
    endpoint: apiEndpoints.LIST_POSTS,
    page,
    limit: page === 1 ? ITEMS_PER_PAGE + 1 : ITEMS_PER_PAGE,
    queryParams: [QueryParam.KEY_WORD, QueryParam.CATALOG, QueryParam.STATUS],
    queryValues: [keyword, catalogId, QueryValue.STATUS_ACTIVE],
  });
  const router = useRouter();

  const otherPosts = React.useMemo(() => {
    if (page === 1) return posts?.slice(1, posts?.length);
    return posts;
  }, [page, posts]);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  React.useEffect(() => {
    if (page === 1 && posts?.[0]) {
      setcoverPost(posts?.[0]);
    }
  }, [page, posts]);

  React.useEffect(() => {
    setPage(1);
  }, [catalogId]);

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center gap-1 lg:px-0 md:mx-56 mx-6 md:mt-1 py-6">
        <div className="bg-white px-4 py-6 rounded-md w-full">
          {coverPost?.imagePath ? (
            <Image
              src={getImage(`${coverPost?.imagePath}`)}
              alt={coverPost?.title || "No title"}
              width={926}
              height={624}
              className="w-full h-auto object-contain rounded-md cursor-pointer"
              onClick={() => navigateToPostDetails(router, coverPost?.uuid)}
            />
          ) : (
            <div className="w-full h-96" />
          )}
          <div>
            <h6 className="text-[1.75rem] font-bold text-[#1D1D1D] mt-2 mb-2 line-clamp-2">
              {coverPost?.title || "Tiêu đề"}
            </h6>
            <p className="text-[1rem] text-[#737373] mb-2 w-full line-clamp-1">
              {coverPost?.title || "Mô tả"}...
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#959393] text-[0.875rem]">
                {(coverPost?.timePublic &&
                  formatDate(`${coverPost?.timePublic}`)) ||
                  "31/10/2025"}
              </span>
              <span
                className=" text-[1rem] text-[#235B76] underline cursor-pointer hover:opacity-70"
                onClick={() => navigateToPostDetails(router, coverPost?.uuid)}
              >
                Xem thêm
              </span>
            </div>
          </div>
        </div>

        <ListCategories onChange={(value) => setCatalogId(value)} />

        <div className="grid md:grid-cols-2 grid-cols-1 w-full items-center gap-8 pb-20">
          {otherPosts && otherPosts?.length > 0 ? (
            otherPosts.map((post, index) => (
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
        <Pagination
          onChange={onPageChange}
          totalItems={totalElements}
          itemsPerPage={3}
        />
      </div>
    </div>
  );
};

export default Page;
