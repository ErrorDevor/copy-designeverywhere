import { PricingList } from "./pricing.types";

import { createQueryRoute } from "shared/api/lib/createQueryRoute";

export const pricingApi = {
   pricingList: createQueryRoute<PricingList>({
      endpoint: "/pricings",
   }),
};
