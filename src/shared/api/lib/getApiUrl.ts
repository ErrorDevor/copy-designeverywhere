import { config } from "../config";
import qs from "qs";

export function getApiUrl(endpoint: string, query?: Record<any, any>) {
  const base = config.apiUrl + "/api" + endpoint;
  const queryString = qs.stringify(query || {});

  return base + (queryString ? `?${queryString}` : "");
}
