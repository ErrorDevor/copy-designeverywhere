"use client";

import { Home } from "../api/home.types";
import { useQuery } from "@tanstack/react-query";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";

export const HOME_KEY = "get-home";

export function useHome() {
   const query = useQuery<Home>({
      queryKey: ["get-home"],
      queryFn: () => fetchClientApi("/globals/page-home"),
   });

   if (!query.data) {
      throw new Error("Home data is not provided");
   }

   return query.data;
}
