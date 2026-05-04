import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import qs from "qs";
import { BackgroundsScreen } from "screens/BackgroundsScreen";

import { getQueryClient } from "app/providers/ReactQueryProvider/getQueryClient";

import { getPostsFilter } from "features/Post/model/usePosts";

import { fetchServerApi } from "shared/api/lib/fetchServerApi";
import { PageWithSearchParams } from "shared/api/types";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }: PageWithSearchParams) {
   const { page, aiTools, tags } = await searchParams;

   const queryPosts = getPostsFilter({
      page: Number(page) || 1,
      aiTools: aiTools?.toString().split(",") || [],
      tags: tags?.toString().split(",") || [],
   });

   const posts = await fetchServerApi("/background-posts", {
      noCache: true,
      query: queryPosts,
   });

   const home = await fetchServerApi("/globals/page-backgrounds", {
      noCache: true,
   });

   const queryClient = getQueryClient();

   queryClient.prefetchQuery({
      queryKey: ["get-backgrounds-page"],
      queryFn: () => home,
      initialData: home,
   });

   queryClient.prefetchQuery({
      queryKey: ["get-background-posts", qs.stringify(queryPosts)],
      queryFn: () => posts,
      initialData: posts,
   });

   try {
      return (
         <HydrationBoundary state={dehydrate(queryClient)}>
            {/* <HomeScreens.Hero /> */}
            <BackgroundsScreen.Trending />
            <BackgroundsScreen.Library />
         </HydrationBoundary>
      );
   } catch (error) {
      return null;
   }
}
