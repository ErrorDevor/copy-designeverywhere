import React from "react";

import { AiToolList } from "../api/posts.types";
import { useQuery } from "@tanstack/react-query";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";

export const GET_AI_TOOLS_KEY = "get-ai-tools";

export const useAiTools = () => {
   const query = useQuery<AiToolList>({
      queryKey: [GET_AI_TOOLS_KEY],
      queryFn: () => fetchClientApi("/ai-tools"),
   });

   return query;
};
