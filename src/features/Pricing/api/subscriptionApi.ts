import {
   MySubscription,
   PlanBySubscription,
   SessionWaitRegisterList,
   SubscribeResponse,
} from "./subscription.types";

import { createMutationRoute } from "shared/api/lib/createMutationRoute";
import { createQueryRoute } from "shared/api/lib/createQueryRoute";

export const subscriptionApi = {
   subscribe: createMutationRoute<SubscribeResponse, { priceId: string }>({
      endpoint: "/stripe/checkout",
      method: "POST",
   }),

   cancelSubscirption: createMutationRoute({
      endpoint: "/stripe/cancel-subscription",
      method: "POST",
   }),

   getSession: createQueryRoute<SessionWaitRegisterList>({
      endpoint: "/wait-registers",
   }),

   getPlanBySubscriptionId: createQueryRoute<PlanBySubscription>({
      endpoint: "/subscriptions/:subscriptionId/plan",
   }),

   getMySubscription: createQueryRoute<MySubscription>({
      endpoint: "/subscriptions/my"
   })
};
