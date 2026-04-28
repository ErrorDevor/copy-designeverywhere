"use client";

import { Home } from "../api/home.types";
import { useQuery } from "@tanstack/react-query";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";

export const BACKGROUNDS_PAGE_KEY = "get-backgrounds-page";

export function useBackgounds() {
   const query = useQuery<Home>({
      queryKey: [BACKGROUNDS_PAGE_KEY],
      queryFn: () => fetchClientApi("/globals/page-backgrounds"),
   });

   if (!query.data) {
      throw new Error("Backgrounds data is not provided");
   }

   return query.data;
}
