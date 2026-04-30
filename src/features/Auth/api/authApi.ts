import { createMutationRoute } from "shared/api/lib/createMutationRoute";
import { AuthLoginDataDTO, AuthLoginDTO } from "./auth.types";
import { createQueryRoute } from "shared/api/lib/createQueryRoute";

export const authApi = {
  login: createMutationRoute<AuthLoginDTO, AuthLoginDataDTO>({
    endpoint: "/users/login",
    method: "POST"
  }),

  signup: createMutationRoute<AuthLoginDTO, AuthLoginDataDTO>({
    endpoint: "/users/register",
    method: "POST"
  }),

  getMe: createQueryRoute<AuthLoginDTO>({
    endpoint: "/users/me"
  })
};
