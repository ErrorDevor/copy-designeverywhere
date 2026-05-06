"use client";

import axios from "axios";

import { getAccessToken } from "features/Auth";

import { getApiUrl } from "./getApiUrl";

export interface FetchApiOptions {
   drafts?: boolean;
   locale?: string;
   query?: Record<any, any>;
   params?: Record<string, any>;
}

export async function fetchClientApi<T = unknown>(url: string, options: FetchApiOptions = {}) {
   const locale = options.locale ?? undefined;

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

   // Fetch data
   const accessToken = getAccessToken();

   const response = await axios.get(endpoint, {
      headers: accessToken
         ? {
              Authorization: `Bearer ${accessToken}`,
           }
         : undefined,
   });

   return response.data as T;
}
