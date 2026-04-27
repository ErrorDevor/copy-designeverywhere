import { PricingScreens } from "screens/Pricing";

export const dynamic = "force-dynamic";

export default async function Pricing() {
   try {
      return (
         <>
            <PricingScreens.Pricing />
            <PricingScreens.Marquee />
            <PricingScreens.Questions />
         </>
      );
   } catch (error) {
      return null;
   }
}
