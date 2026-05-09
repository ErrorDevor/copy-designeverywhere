"use client";

import React from "react";

import { authApi } from "../api/authApi";
import { useQuery } from "@tanstack/react-query";

import { useAuth } from "./useAuth";

export function usePromptsLeft() {
   const authData = useAuth();

   const query = useQuery({
      queryKey: ["prompts-left", authData.data?.id],
      queryFn: () => authApi.getPromptsLeft(),
   });

   const promptsWaitCount = React.useMemo(() => {
      if (!query.data?.promptsLeft) {
         return 0;
      }
      return query.data.promptsLeft === "Infinity" ? Infinity : query.data.promptsLeft;
   }, [query.data]);

   return { ...query, promptsWaitCount };
}
