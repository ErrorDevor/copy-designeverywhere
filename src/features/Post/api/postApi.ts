import { createMutationRoute } from "shared/api/lib/createMutationRoute";

export const postApi = {
   leaveEmail: createMutationRoute<void, { email: string; postId: string }>({
      endpoint: "/post-save-emails/new",
      method: "POST",
   }),
};
