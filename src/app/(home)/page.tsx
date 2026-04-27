import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import qs from "qs";
import { HomeScreens } from "screens/HomeScreen";

import { getQueryClient } from "app/providers/ReactQueryProvider/getQueryClient";

import { GET_POSTS_KEY, getPostsFilter } from "features/Post/model/usePosts";

import { fetchServerApi } from "shared/api/lib/fetchServerApi";
import { PageWithSearchParams } from "shared/api/types";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }: PageWithSearchParams) {
   const { page, aiTools } = await searchParams;

   const queryPosts = getPostsFilter({
      page: Number(page) || 1,
      aiTools: aiTools?.toString().split(",") || [],
   });

   const posts = await fetchServerApi("/posts", {
      noCache: true,
      query: queryPosts,
   });

   const home = await fetchServerApi("/globals/page-home", {
      noCache: true,
   });

   const queryClient = getQueryClient();

   queryClient.prefetchQuery({
      queryKey: ["get-home"],
      queryFn: () => home,
      initialData: home,
   });

   queryClient.prefetchQuery({
      queryKey: [GET_POSTS_KEY, qs.stringify(queryPosts)],
      queryFn: () => posts,
      initialData: posts,
   });

   try {
      return (
         <HydrationBoundary state={dehydrate(queryClient)}>
            {/* <HomeScreens.Hero /> */}
            <HomeScreens.Trending />
            <HomeScreens.Library />
         </HydrationBoundary>
      );
   } catch (error) {
      return null;
   }
}
