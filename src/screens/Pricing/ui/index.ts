import { PricingScreens } from "../lib";

import { Marquee } from "./Marquee";
import { Pricing } from "./Pricing";
import { Questions } from "./Questions";

export const sections = [
  { id: PricingScreens.MARQUEE, Section: Marquee },
  { id: PricingScreens.PRICING, Section: Pricing },
  { id: PricingScreens.QUESTIONS, Section: Questions },
];

export { Marquee, Pricing, Questions };