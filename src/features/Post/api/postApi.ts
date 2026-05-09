import { GetPrompt } from "./posts.types";

import { createMutationRoute } from "shared/api/lib/createMutationRoute";
import { fetchClientApi } from "shared/api/lib/fetchClientApi";

export const postApi = {
   leaveEmail: createMutationRoute<void, { email: string; postId: string }>({
      endpoint: "/post-save-emails/new",
      method: "POST",
   }),

   getPromptByPostId: (postId: string) => {
      return fetchClientApi<GetPrompt>(`/posts/${postId}/prompt`);
   },
};
