"use client";

import React from "react";

import axios from "axios";
import clsx from "clsx";

import { fetchClientApi } from "shared/api/lib/fetchClientApi";
import { getApiUrl } from "shared/api/lib/getApiUrl";
import { Button } from "shared/ui/ui-kit/Button";
import { H2, H4, P } from "shared/ui/ui-kit/Text";

import css from "./Footer.module.scss";

export const Footer: React.FC = () => {
   const now = new Date();
   const [email, setEmail] = React.useState("");
   const [isSent, setSent] = React.useState(false);
   const [isSending, setIsSending] = React.useState(false);

   // const formatted = now.toLocaleString("en-GB", {
   //    weekday: "long",
   //    day: "2-digit",
   //    month: "long",
   //    year: "numeric",
   //    hour: "numeric",
   //    minute: "2-digit",
   //    hour12: true,
   // });

   const isEmail = (email: string) => {
      if (!email.includes("@")) {
         return false;
      }
      const [left, right] = email.split("@");
      if (left.trim() === "" || right.trim() === "") {
         return false;
      }
      if (!right.includes(".") || right.endsWith(".")) {
         return false;
      }
      return true;
   };

   const handleSubmit = async (e: React.SubmitEvent) => {
      e.preventDefault();

      try {
         setIsSending(true);

         await axios.post("/api/newsletter", { email });

         setSent(true);
      } catch (error) {
         setIsSending(false);
         setEmail("");
      }
   };

   return (
      <footer className={css.footer}>
         <div className={css.footer_top}>
            <div className={css.footer_newsletter}>
               <H2>Newsletter</H2>

               {isSent ? (
                  <div className={clsx(css.newsletter, css.subscribed)}>
                     <H4>Thank you!</H4>
                     <P>Your subscription has been confirmed.</P>
                  </div>
               ) : (
                  <form className={css.newsletter} onSubmit={handleSubmit}>
                     <H4>Subscribe to get the newest top-tier prompts first</H4>

                     <input
                        type="email"
                        placeholder="Enter email"
                        className={css.newsletter_input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />

                     <div className={css.newsletter_bottom}>
                        <P>
                           By subscribing, you agree to the Terms of Use and acknowledge that you
                           have read our Privacy Policy.
                        </P>

                        <Button
                           variant="light"
                           disabled={isSending || !isEmail(email)}
                           className={css.more_button}
                           type="submit"
                        >
                           Subscribe
                           <span>→</span>
                        </Button>
                     </div>
                  </form>
               )}
            </div>

            <div className={clsx(css.footer_links, css.p4)}>
               <div className={css.footer_links_wrap}>
                  {/* <a href="/about">About</a> */}
                  <a href="/pricing">Join The Club</a>
               </div>

               <div className={css.footer_social_links}>
                  <a href="https://x.com/bogdan_qclay" target="_blank" aria-label="Twitter">
                     <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                           fill="white"
                        />
                     </svg>
                  </a>
               </div>
            </div>
         </div>

         <div className={css.footer_bottom}>
            <div className={css.footer_bottom_start}>
               <a href="/">
                  <P className={css.p4}>© 2026 lafys.com</P>
               </a>

               <div className={css.footer_bottom_other}>
                  <a href="/terms-of-use">
                     <P>Terms of Use</P>
                  </a>
                  <a href="/privacy">
                     <P>Privacy Policy</P>
                  </a>
                  <a href="/refund-policy">
                     <P>Refund Policy</P>
                  </a>
               </div>
            </div>

            {/* <time className={clsx(css.footer_clock, css.subtitle2)}>
               <p>{formatted}</p>
            </time> */}
         </div>
      </footer>
   );
};
