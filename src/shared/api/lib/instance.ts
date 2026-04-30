import axios from "axios";

import { getAccessToken } from "features/Auth";

import { config } from "../config";

const instance = axios.create({
   baseURL: config.apiUrl + "/api",
   // withCredentials: true,
});

instance.interceptors.request.use(function (config) {
   if (typeof document !== "undefined") {
      const accessToken = getAccessToken();
      if (accessToken) {
         config.headers.Authorization = `Bearer ${accessToken}`;
      }
   }

   return config;
});

export { instance };
