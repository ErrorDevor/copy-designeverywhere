import { SearchQuery } from "../types";
import { AxiosRequestConfig } from "axios";

import { instance } from "./instance";
import { mergeSearchQuery, withSearch } from "./withSearch";

interface FindRouteProps {
  endpoint: string;
  params?: Record<string, string | number>;
  search?: SearchQuery;
  locale?: string;
  config?: AxiosRequestConfig<any>;
  authToken?: string;
}

export function createQueryRoute<T = unknown>(params: FindRouteProps) {
  return async (override?: Partial<FindRouteProps>) => {
    let endpoint = override?.endpoint || params.endpoint;

    const conditionParams = override?.params || params.params;

    if (conditionParams) {
      for (const [key, value] of Object.entries(conditionParams)) {
        endpoint = endpoint.replaceAll(`:${key}`, value.toString());
      }
    }

    const config = override?.config || params.config || {};
    const token = override?.authToken || params.authToken;

    const response = await instance.get<T>(
      withSearch(
        endpoint,
        mergeSearchQuery(params.search, override?.search),
        override?.locale || params.locale || false
      ),
      {
        ...config,

        headers: token
          ? {
              Authorization: `Bearer ${token}`,
              ...(config.headers || {}),
            }
          : config.headers,
      }
    );

    return response.data;
  };
}
