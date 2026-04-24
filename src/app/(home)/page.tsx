import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { HomeScreens } from "screens/HomeScreen";

import { Filter } from "features/Filter";
import { GET_POSTS_KEY, getPostsFilter } from "features/Post/model/usePosts";

import { fetchServerApi } from "shared/api/lib/fetchServerApi";

export const dynamic = "force-dynamic";

export default async function Home() {
   const queryPosts = getPostsFilter();

   const posts = await fetchServerApi("/posts", {
      noCache: true,
      query: queryPosts,
   });

   const queryClient = new QueryClient();

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
