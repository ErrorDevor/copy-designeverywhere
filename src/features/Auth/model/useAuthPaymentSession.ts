"use client";

import React from "react";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { SessionWaitRegisterList } from "features/Pricing/api/subscription.types";

export function useAuthPaymentSession() {
   const searchParams = useSearchParams();

   const sessionId = React.useMemo(() => searchParams.get("session_id"), [searchParams]);

   const { data } = useQuery<SessionWaitRegisterList>({
    queryKey: ["paymentSessionId", sessionId]
   })

   return data?.docs[0] || null;
}
