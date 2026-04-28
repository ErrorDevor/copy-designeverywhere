import React from "react";

import { PostList } from "../api/posts.types";
import { useQuery } from "@tanstack/react-query";
import qs from "qs";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";
import { getPostsFilter } from "./usePosts";

export interface PostsFilter {
   page: number;
   aiTools: string[];
}

export const GET_BACKGROUND_POSTS_KEY = "get-background-posts";

export const useBackgroundPosts = (filter: Partial<PostsFilter> = {}) => {
   const queryFilter = React.useMemo(() => getPostsFilter(filter), [filter]);

   const query = useQuery<PostList>({
      queryKey: [GET_BACKGROUND_POSTS_KEY, qs.stringify(queryFilter)],
      queryFn: () =>
         fetchClientApi("/background-posts", {
            query: queryFilter,
         }),
   });

   return query;
};
