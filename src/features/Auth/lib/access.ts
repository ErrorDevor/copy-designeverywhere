export function isSubscribedAccess(plan: string | null | undefined) {
   if (!plan) return false;
   return ["Basic", "Grow", "Premium"].includes(plan);
}
export function isBasicAccess(plan: string | null | undefined) {
   if (!plan) return false;
   return plan === "Basic";
}
export function isGrowAccess(plan: string | null | undefined) {
   if (!plan) return false;
   return plan === "Grow";
}
export function isPremiumAccess(plan: string | null | undefined) {
   if (!plan) return false;
   return plan === "Premium";
}
