import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { HomeScreens } from "screens/HomeScreen";

import { getQueryClient } from "app/providers/ReactQueryProvider/getQueryClient";

import { Filter } from "features/Filter";
import { HOME_KEY } from "features/Home";
import { GET_POSTS_KEY, getPostsFilter } from "features/Post/model/usePosts";

import { fetchServerApi } from "shared/api/lib/fetchServerApi";

export const dynamic = "force-dynamic";

export default async function Home() {
   const queryPosts = getPostsFilter();

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
      queryKey: [GET_POSTS_KEY, queryPosts],
      queryFn: () => posts,
      initialData: posts,
   });

   try {
      return (
         <HydrationBoundary state={dehydrate(queryClient)}>
            <HomeScreens.Hero />
            <HomeScreens.Trending />
            <Filter />
            <HomeScreens.Library />
         </HydrationBoundary>
      );
   } catch (error) {
      return null;
   }
}
