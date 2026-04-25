import React from "react";

import { PostList } from "../api/posts.types";
import { useQuery } from "@tanstack/react-query";
import qs from "qs";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";

export interface PostsFilter {
   page: number;
   aiTools: string[];
}

export const GET_POSTS_KEY = "get-posts";

export const getPostsFilter = (filter: Partial<PostsFilter> = {}) => {
   return {
      page: filter.page ?? 1,
      limit: 16,
      where: {
         "aiTool.name":
            filter.aiTools && filter.aiTools.length > 0
               ? { in: filter.aiTools.join(",") }
               : undefined,
      },
   };
};

export const usePosts = (filter: Partial<PostsFilter> = {}) => {
   const queryFilter = React.useMemo(() => getPostsFilter(filter), [filter]);

   const query = useQuery<PostList>({
      queryKey: [GET_POSTS_KEY, qs.stringify(queryFilter)],
      queryFn: () =>
         fetchClientApi("/posts", {
            query: queryFilter,
         }),
   });

   return query;
};
