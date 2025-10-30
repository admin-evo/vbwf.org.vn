import axiosInstance from "@/utils/axiosInstance";
import { queryKey } from "../queryKey";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseWithPagination, Post } from "@/types";

const fetchData = async () => {
  const response = await axiosInstance.post(`Blog/get-page-list-blog-app`, {
    page: 1,
    pageSize: 20,
    keyword: "",
    status: 0,
    catalog: 1,
  });
  return response?.data;
};

const usePosts = () => {
  const { data, ...query } = useQuery<ApiResponseWithPagination<Post>>({
    queryKey: [queryKey.POSTS],
    queryFn: fetchData,
  });

  return {
    ...query,
    data: data?.data,
  };
};

export { usePosts };
