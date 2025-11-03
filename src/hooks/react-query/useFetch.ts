import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosInstance";
import { removeUndefinedParams } from "@/utils/removeUndefinedParams";

export enum QueryParam {
  KEY_WORD = "keyword",
  CATALOG = "catalog",
  STATUS = "status",
  IGNORE_UUID = "ignoreUuid",
}

export const QueryValue = {
  STATUS_ACTIVE: 1,
  STATUS_INACTIVE: 0,
  CATALOG_NEWS: 1,
};

const fetchData = async <T>({
  page,
  endpoint,
  limit,
  queryParams,
  queryValues,
}: {
  page: number;
  endpoint: string;
  limit?: number;
  queryParams?: string[];
  queryValues?: any[];
}): Promise<{ data: T[]; total: number }> => {
  const queryObject = queryParams?.reduce((acc, key, index) => {
    acc[key] = queryValues?.[index];
    return acc;
  }, {} as Record<string, any>);

  const params = removeUndefinedParams({
    page,
    pageSize: limit,
    ...queryObject,
  });

  const res = await axiosInstance.post(endpoint, params);

  return {
    data: res?.data?.data?.items || [],
    total: res?.data?.data?.pagination?.totalCount,
  };
};

const useFetch = <T>({
  endpoint,
  page = 1,
  limit = 10,
  queryParams = [],
  queryValues = [],
  enabled,
  staleTime = Infinity,
}: {
  endpoint: string;
  page?: number;
  limit?: number;
  queryParams?: string[];
  queryValues?: any[];
  enabled?: any;
  staleTime?: number;
}) => {
  const queryKey = [endpoint, page, { limit, queryParams, queryValues }];

  const queryFn = () =>
    fetchData<T>({
      page,
      endpoint,
      limit,
      queryParams,
      queryValues,
    });

  const query = useQuery<{ data: T[]; total: number }>({
    queryKey,
    queryFn,
    placeholderData: (previousData) => previousData,
    enabled,
    staleTime,
  });

  return {
    ...query,
    data: query.data?.data || [],
    totalElements: query.data?.total || 0,
  };
};

export { useFetch };
