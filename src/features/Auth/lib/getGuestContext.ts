import { cookies, headers } from "next/headers";

async function sha256(input: string) {
   const encoder = new TextEncoder();

   const data = encoder.encode(input);

   const hashBuffer = await crypto.subtle.digest("SHA-256", data);

   return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
}

export async function getGuestContext() {
   const cookieStore = await cookies();
   const headersList = await headers();

   const guestId = cookieStore.get("guest_id")?.value || "";
   const userAgent = headersList.get("user-agent") || "";
   const forwardedFor = headersList.get("x-forwarded-for");
   const ip = forwardedFor?.split(",")[0]?.trim() || headersList.get("x-real-ip") || "none";

   const userAgentHash = await sha256(userAgent);
   const ipHash = await sha256(ip + process.env.IP_SALT);

   return {
      guestId,
      userAgent,
      userAgentHash,
      ip,
      ipHash,
   };
   //  if (!guestId) {
   //     guestId = crypto.randomUUID();

   //     cookieStore.set("guest_id", guestId, {
   //        httpOnly: true,
   //        secure: true,
   //        sameSite: "none",
   //        path: "/",
   //        maxAge: 60 * 60 * 24 * 365,
   //     });
   //  }
}
