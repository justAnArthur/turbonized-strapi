import type { UID } from "@/services/strapi/uids"

type APIResponseError = {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details?: {};
  };
};

export type APIResponse<T extends keyof UID> =
  | {
  data: UID[T];
  meta: {};
}
  | APIResponseError;

type APICollectionPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type APICollectionResponse<T extends keyof UID> =
  | {
  data: UID[T][];
  meta: {
    pagination: APICollectionPagination;
  };
}
  | APIResponseError;

export type APIUrlParams<T extends Object> = {
  filters?: Partial<{
    [K in keyof T]: T[K] extends object ? APIUrlParams<T[K]> : T[K];
  }>;
  sort?: keyof T | Array<keyof T>;
  populate?:
    | Array<keyof T>
    | {
    [K in keyof T]?: T[K] extends object ? APIUrlParams<T[K]> | true : true;
  };
  publicationState?: "live" | "preview";
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  locale?: string;
};
