"use client";

import React from "react";

import { Pricing, PricingList } from "../api/pricing.types";
import { useQuery } from "@tanstack/react-query";

export function usePricings() {
   const query = useQuery<PricingList>({
      queryKey: ["pricings"],
   });

   const pricings = React.useMemo(() => {
      const subscriptions: Pricing[] = [];
      const payments: Pricing[] = [];

      if (query.data) {
         for (const item of query.data.docs) {
            if (item.mode === "payment") {
               payments.push(item);
               continue;
            }
            if (item.mode === "subscription") {
               subscriptions.push(item);
               continue;
            }
         }
      }

      return {
         subscriptions,
         payments,
      };
   }, [query.data]);

   return { ...query, pricings };
}
