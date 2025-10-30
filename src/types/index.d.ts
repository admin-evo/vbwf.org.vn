export interface ApiResponseWithPagination<T> {
  data: {
    items: T[];
    pagination: {
      totalCount?: number | undefined;
      totalPage?: number | undefined;
    };
  };
  error?: {
    code?: number | undefined;
    message?: string | undefined;
  };
}

export interface Post {
  title?: string | undefined;
  imagePath?: string | undefined;
  catalog?: number | undefined;
  view?: number | undefined;
  countComment?: number | undefined;
  timePublic?: string | undefined;
  status?: number | undefined;
  uuid?: string | undefined;
}
