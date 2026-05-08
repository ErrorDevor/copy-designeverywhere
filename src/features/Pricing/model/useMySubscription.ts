"use client";

import React from "react";

import { subscriptionApi } from "../api/subscriptionApi";
import { useQuery } from "@tanstack/react-query";

import { useAuth } from "features/Auth";

export function useMySubscription() {
   const authData = useAuth();
   const query = useQuery({
      queryKey: ["my-subscription", authData.data?.id],
      queryFn: () => subscriptionApi.getMySubscription(),
   });

   return query.data || { subscription: null, plan: null };
}
