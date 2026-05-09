import { AuthLoginDTO, AuthLoginDataDTO, PromptsLeft } from "./auth.types";

import { createMutationRoute } from "shared/api/lib/createMutationRoute";
import { createQueryRoute } from "shared/api/lib/createQueryRoute";
import { fetchClientApi } from "shared/api/lib/fetchClientApi";

export const authApi = {
   login: createMutationRoute<AuthLoginDTO, AuthLoginDataDTO>({
      endpoint: "/users/login",
      method: "POST",
   }),

   signup: createMutationRoute<AuthLoginDTO, AuthLoginDataDTO>({
      endpoint: "/users/register",
      method: "POST",
   }),

   getMe: createQueryRoute<AuthLoginDTO>({
      endpoint: "/users/me",
   }),

   getPromptsLeft: async () => {
      return await fetchClientApi<PromptsLeft>("/users/prompts-left");
   },
};
