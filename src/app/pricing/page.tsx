import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { PricingScreens } from "screens/Pricing";

import { getQueryClient } from "app/providers/ReactQueryProvider/getQueryClient";

import { pricingApi } from "features/Pricing/api/pricingApi";

import { fetchServerApi } from "shared/api/lib/fetchServerApi";

export const dynamic = "force-dynamic";

export default async function Pricing() {
   const queryClient = getQueryClient();

   await queryClient.prefetchQuery({
      queryKey: ["pricings"],
      queryFn: () =>
         pricingApi.pricingList({
            search: { limit: 100, sort: "price" },
         }),
   });

   const pagePricing = await fetchServerApi("/globals/page-pricing", {
      noCache: true,
   });

   queryClient.prefetchQuery({
      queryKey: ["pricing-page"],
      queryFn: () => pagePricing,
      initialData: pagePricing,
   });

   try {
      return (
         <HydrationBoundary state={dehydrate(queryClient)}>
            <PricingScreens.Pricing />
            <PricingScreens.Marquee />
            <PricingScreens.Questions />
         </HydrationBoundary>
      );
   } catch (error) {
      return null;
   }
}
