import { ImageType, PayloadPagination } from "shared/api/types";

export interface Pricing {
   id: string;
   planType: "Basic" | "Grow" | "Premium";
   stripePriceId: string;
   mode: "subscription" | "payment";
   preview: ImageType;
   title: string;
   price: number;
   oldPrice?: number;
   hint: string;
   buttonName: string;
   advantages: Array<{
      id: string;
      value: string;
      isInclude: boolean;
   }>;
   priority: number;
   fullPlanName: string;
}

export interface PricingList extends PayloadPagination {
   docs: Pricing[];
}
