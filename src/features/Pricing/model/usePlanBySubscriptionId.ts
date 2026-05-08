"use client";

import React from "react";

import { subscriptionApi } from "../api/subscriptionApi";
import { useQuery } from "@tanstack/react-query";

export function usePlanBySubscriptionId(subscriptionId: string | undefined | null) {
   const query = useQuery({
      queryKey: ["plan-by-subscription", subscriptionId],
      queryFn: () =>
         subscriptionId
            ? subscriptionApi.getPlanBySubscriptionId({
                 params: { subscriptionId },
              })
            : null,
   });

   return query.data?.data || null;
}
