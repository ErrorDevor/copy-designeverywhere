import { createMutationRoute } from "shared/api/lib/createMutationRoute";
import { SubscribeResponse } from "./subscription.types";

export const subscriptionApi = {
  subscribe: createMutationRoute<SubscribeResponse, { priceId: string }>({
    endpoint: "/stripe/checkout",
    method: "POST"
  }),

  cancelSubscirption: createMutationRoute({
    endpoint: "/stripe/cancel-subscription",
    method: "POST"
  })
}