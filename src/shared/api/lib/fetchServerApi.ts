import qs from "qs";

import { getGuestContext } from "features/Auth/lib/getGuestContext";
import { getServerAccessToken } from "features/Auth/lib/getServerAccessToken";

import { config } from "../config";
import { getApiUrl } from "./getApiUrl";
import { getLocale } from "./getLocale";

export interface FetchApiOptions {
   drafts?: boolean;
   noCache?: boolean;
   locale?: boolean;
   query?: Record<any, any>;
   params?: Record<string, any>;
   tags?: string[];
   includeGuestHeaders?: boolean;
   method?: string;
}

export async function fetchServerApi<T = unknown>(url: string, options: FetchApiOptions = {}) {
   const locale = options.locale ? await getLocale() : undefined;

   let newUrl = url;

   // Replace url with params
   for (const [key, value] of Object.entries(options.params || {})) {
      newUrl = newUrl.replaceAll(`:${key}`, value);
   }

   // Generate endpoint
   const endpoint = getApiUrl(newUrl, {
      draft: options.drafts ?? false,
      locale,
      ...(options.query || {}),
   });

   const accessToken = await getServerAccessToken();

   const ctx = await getGuestContext();

   // Fetch data
   const response = await fetch(endpoint, {
      cache: options.noCache ? "no-store" : undefined,
      method: options.method ?? "get",
      headers: {
         ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
         ...(options.includeGuestHeaders
            ? {
                 "User-Agent": ctx.userAgent,
                 "x-guest-id": ctx.guestId,
                 "x-forwarded-for": ctx.ip,
              }
            : {}),
      },
      next: !options.noCache
         ? {
              revalidate: config.revalidateMs,
              tags: options.tags || [],
           }
         : undefined,
   });

   const json = await response.json();

   return json as T;
}
