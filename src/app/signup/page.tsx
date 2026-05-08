import { redirect } from "next/navigation";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { SignupForm } from "screens/AuthScreen";

import { getQueryClient } from "app/providers/ReactQueryProvider/getQueryClient";

import { Header } from "widgets/Header";

import { subscriptionApi } from "features/Pricing/api/subscriptionApi";

import css from "./auth.module.scss";

interface Props {
   searchParams: Promise<{
      session_id?: string;
   }>;
}

export default async function Page({ searchParams }: Props) {
   const { session_id } = await searchParams;
   const queryClient = getQueryClient();

   if (session_id) {
      const session = await subscriptionApi.getSession({
         search: { where: { sessionId: { equals: session_id } } },
      });
      if (!session.docs[0]) {
         return redirect("/signup");
      }

      await queryClient.prefetchQuery({
         queryKey: ["paymentSessionId", session_id],
         queryFn: () => session,
         initialData: session,
      });
   }

   return (
      <HydrationBoundary state={dehydrate(queryClient)}>
         <div className={css.layout}>
            <Header />
            <div className={css.layout_content}>
               <div className={css.layout_form}>
                  <SignupForm />
               </div>
               {/* <h1 className={css.layout_title}>SIGN UP</h1> */}
            </div>
         </div>
      </HydrationBoundary>
   );
}
