"use client";

import { useEffect, useRef } from "react";

import { useSearchParams } from "next/navigation";

import { useAuth } from "features/Auth";
import { authApi } from "features/Auth/api/authApi";

export function FetchSubscriptionPlan() {
   const searchParams = useSearchParams();
   const attemptsRef = useRef(0);
   const intervalRef = useRef<NodeJS.Timeout | null>(null);

   const { data: authData, setUserData } = useAuth();

   useEffect(() => {
      const redirectFrom = searchParams.get("redirectFrom");

      if (redirectFrom !== "stripe" || !authData || authData.plan) return;

      const fetchData = async () => {
         try {
            const data = await authApi.getMe();

            attemptsRef.current += 1;

            if (data.user && data.user.plan) {
               attemptsRef.current = 8;
               clearInterval(intervalRef.current!);
               setUserData(data.user);
            }

            if (attemptsRef.current >= 8) {
               clearInterval(intervalRef.current!);
            }
         } catch (e) {
            attemptsRef.current += 1;

            if (attemptsRef.current >= 8) {
               clearInterval(intervalRef.current!);
            }
         }
      };

      fetchData();

      intervalRef.current = setInterval(fetchData, 10000);

      return () => {
         if (intervalRef.current) {
            clearInterval(intervalRef.current);
         }
      };
   }, [authData]);

   return null;
}
