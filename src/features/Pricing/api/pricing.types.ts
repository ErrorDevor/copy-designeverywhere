import { FaqItem, ImageType, PayloadPagination } from "shared/api/types";

export interface PricingPage {
   pricings: Array<{
      id: string;
      data: Array<Pricing>;
   }>;
   faqs: Array<FaqItem>;
}

export type PricingType = "Basic" | "Grow" | "Lifetime" | "Enterprise";

export interface Pricing {
   id: string;
   planType: PricingType;
   stripePriceId: string;
   mode: "subscription" | "payment";
   preview: ImageType;
   title: string;
   price: number;
   oldPrice?: number;
   hint: string;
   buttonName: string;
   button?: {
      name?: string;
      url?: string;
   };
   advantages: Array<{
      id: string;
      value: string;
      isInclude: boolean;
   }>;
   priority: number;
   selectorText: string;
   fullPlanName: string;
}

export interface PricingList extends PayloadPagination {
   docs: Pricing[];
}
