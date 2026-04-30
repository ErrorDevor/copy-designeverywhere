import { SearchQuery } from "../types";
import { AxiosRequestConfig } from "axios";
import qs from "qs";

import { instance } from "./instance";
import { mergeSearchQuery } from "./withSearch";

interface MutationRouteProps {
  endpoint: string;
  method?: string;
  params?: Record<string, string | number>;
  search?: SearchQuery;
  config?: AxiosRequestConfig<any>;
  authToken?: string;
}

type MutationOverrideProps = Omit<MutationRouteProps, "method" | "endpoint">;

type MutationOverrideFunction<T = any, D = void> = [D] extends [void]
  ? (override?: Partial<MutationOverrideProps>) => Promise<T>
  : (data: D, override?: Partial<MutationOverrideProps>) => Promise<T>;

export function createMutationRoute<T = any, D = void>(params: MutationRouteProps) {
  const fn: MutationOverrideFunction<T, D> = (async (dataOrOverride?: any, maybeOverride?: any) => {
    let data: D | undefined;
    let override: Partial<MutationOverrideProps> | undefined;

    if (maybeOverride !== undefined) {
      data = dataOrOverride;
      override = maybeOverride;
    } else if (dataOrOverride !== undefined) {
      if ((dataOrOverride as any).url || (dataOrOverride as any).params) {
        override = dataOrOverride;
      } else {
        data = dataOrOverride;
      }
    }

    let endpoint = params.endpoint;
    const conditionParams = override?.params || params.params;

    if (conditionParams) {
      for (const [key, value] of Object.entries(conditionParams)) {
        endpoint = endpoint.replaceAll(`:${key}`, value.toString());
      }
    }

    const searchQuery = qs.stringify(mergeSearchQuery(params.search, override?.search));
    const token = override?.authToken || params.authToken;
    const cfg = { ...(params.config || {}), ...(override?.config || {}) };

    const config: AxiosRequestConfig = {
      ...cfg,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
            ...(cfg.headers || {}),
          }
        : cfg.headers,
      url: endpoint + (searchQuery ? `?${searchQuery}` : ""),
      method: params.method || "POST",
      ...(data !== undefined ? { data } : {}),
    };

    const response = await instance(config);

    return response.data;
  }) as MutationOverrideFunction<T, D>;

  return fn;
}
