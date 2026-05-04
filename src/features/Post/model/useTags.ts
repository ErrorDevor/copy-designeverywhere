import React from "react";

import { PostTagList } from "../api/posts.types";
import { useQuery } from "@tanstack/react-query";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";

export const GET_TAGS = "get-tags";
export const GET_BACKGROUND_TAGS = "get-background-tags";

export const useTags = () => {
   const query = useQuery<PostTagList>({
      queryKey: [GET_TAGS],
      queryFn: () => fetchClientApi("/tags?sort=-count&limit=100"),
   });

   return query;
};

export const useBackgroundsTags = () => {
   const query = useQuery<PostTagList>({
      queryKey: [GET_BACKGROUND_TAGS],
      queryFn: () => fetchClientApi("/background-tags?sort=-count&limit=100"),
   });

   return query;
};
