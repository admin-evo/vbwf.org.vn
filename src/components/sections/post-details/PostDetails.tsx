"use client";
import HtmlContentWithoutReadmore from "@/components/HtmlContentWithoutReadmore";
import { usePost } from "@/hooks/react-query/posts/usePost";
import { formatDate } from "@/utils/formatDate";
import { getImage } from "@/utils/getImage";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { categories } from "../posts/ListCategories";
import React, { Fragment } from "react";
import RelatedPosts from "./RelatedPosts";
import { useRouter } from "next/navigation";

type Props = {
  uuid?: string;
};

const PostDetails = (props: Props) => {
  const { uuid } = props;
  const { data: post } = usePost({ uuid });
  const router = useRouter();

  const catalogLabel = React.useMemo(() => {
    return categories?.find((item) => item.id == post?.catalog)?.title;
  }, [post?.catalog]);

  if (!post) {
    return (
      <div className="md:h-[calc(100vh-96px)] h-[calc(100vh-72px)] flex items-center justify-center">
        <ClipLoader color="#FFB256" />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="flex flex-row items-center md:mb-6 mb-4 text-sm gap-2">
        <Image
          src={"/assets/svgs/go-back.svg"}
          width={16}
          height={16}
          alt="Clock"
          className="mt-0.5 cursor-pointer w-4 h-4"
          onClick={() => router.back()}
        />
        <span
          className="cursor-pointer font-medium whitespace-nowrap md:text-sm text-xs"
          onClick={() => router.push("/")}
        >
          Trang chủ
        </span>
        /
        <span className="cursor-pointer font-medium whitespace-nowrap md:text-sm text-xs">
          {catalogLabel}
        </span>
        /{" "}
        <span className="text-blue-500 whitespace-nowrap md:text-sm text-xs">
          {post?.uuid}
        </span>
      </div>
      <div className="flex flex-col justify-center gap-1 md:mt-1 mt-2">
        {post?.imagePath && (
          <Image
            src={getImage(post?.imagePath)}
            alt={post?.title || "No title"}
            width={468}
            height={252}
            className="w-full h-[504px] object-cover rounded-md"
          />
        )}
        <h3 className="text-black font-bold text-3xl mt-6 mb-2">
          {post?.title}
        </h3>
        <div className="flex flex-row items-center md:justify-normal md:gap-10 justify-between w-full text-gray-400 text-[0.75rem] mb-1">
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/assets/svgs/clock.svg"}
              width={18}
              height={18}
              alt="Clock"
            />
            {formatDate(post?.timePublic)}
          </div>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/assets/svgs/eye.svg"}
              width={18}
              height={18}
              alt="Eye"
            />
            {`${post?.view} lượt xem`}
          </div>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/assets/svgs/comment.svg"}
              width={18}
              height={18}
              alt="Comment"
            />
            {`${post?.countComment} bình luận`}
          </div>
        </div>
        <div className="text-[0.875rem]">
          Chuyên mục:
          <span className="text-blue-400 font-medium">{` ${catalogLabel}`}</span>
        </div>
        <div className="mt-1">
          <HtmlContentWithoutReadmore value={post?.content} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1 py-8">
        <div className="font-bold text-2xl">Bình luận (0)</div>
      </div>
      <RelatedPosts uuid={uuid} catalog={post?.catalog} />
    </Fragment>
  );
};

export default PostDetails;
