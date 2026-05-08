import { Pricing } from "./pricing.types";

export interface SubscribeResponse {
   sessionId: string;
   sessionUrl: string;
}

export interface SessionWaitRegister {
   id: string;
   sessionId: string;
   customerId: string;
   subscriptionId: string;
   email?: string;
   createdAt: string;
   updatedAt: string;
}

export interface SessionWaitRegisterList {
   docs: SessionWaitRegister[];
}

export interface PlanBySubscription {
   data: Pricing;
}

export interface MySubscription {
   subscription: {
      id: string;
      subscriptionId: string | null;
      cancelAtPeriodEnd: boolean;
      currentPeriodEnd: string | null;
      canceledAt: string | null;
      status: "active" | "cancelled";
   } | null;
   plan: {
      id: string;
      planType: "Basic" | "Grow" | "Premium";
      mode: "payment" | "subscription";
      priority: number;
   } | null;
}
