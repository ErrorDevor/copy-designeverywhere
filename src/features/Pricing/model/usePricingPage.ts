"use client";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";
import { PricingPage } from "../api/pricing.types";
import { useQuery } from "@tanstack/react-query";

export function usePricingPage() {
   const query = useQuery<PricingPage>({
      queryKey: ["pricing-page"],
      queryFn: () => fetchClientApi("/globals/page-pricing"),
   });

   if (!query.data) {
      throw new Error("Pricing page data is not provided");
   }

   return query.data;
}
