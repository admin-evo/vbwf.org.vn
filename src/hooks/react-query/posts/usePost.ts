import { PostDetails } from "@/types";
import axiosInstance from "@/utils/axiosInstance";
import { apiEndpoints } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

type Params = {
  uuid?: string;
};

const fetchData = async (params?: Params) => {
  const response = await axiosInstance.post(apiEndpoints.POST, {
    uuid: params?.uuid,
  });
  return response?.data?.data;
};

const usePost = (params: Params) => {
  const { data, ...query } = useQuery<PostDetails>({
    queryKey: [apiEndpoints.POST, params.uuid],
    queryFn: () => fetchData(params),
    enabled: !!params.uuid,
  });

  return {
    ...query,
    data: data,
  };
};

export { usePost };
