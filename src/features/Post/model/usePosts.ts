import React from "react";

import { PostList } from "../api/posts.types";
import { useQuery } from "@tanstack/react-query";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";

interface PostsFilter {
   page: number;
}

export const GET_POSTS_KEY = "get-posts";

export const getPostsFilter = (filter: Partial<PostsFilter> = {}) => {
   return {
      page: filter.page ?? 1,
      limit: 6,
   };
};

export const usePosts = (filter: Partial<PostsFilter> = {}) => {
   const queryFilter = React.useMemo(() => getPostsFilter(filter), [filter]);

   const query = useQuery<PostList>({
      queryKey: [GET_POSTS_KEY, queryFilter],
      queryFn: () =>
         fetchClientApi("/posts", {
            query: queryFilter,
         }),
   });

   return query;
};
