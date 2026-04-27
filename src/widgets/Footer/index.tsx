"use client";

import React from "react";

import clsx from "clsx";

import { Button } from "shared/ui/ui-kit/Button";
import { H2, H4, P } from "shared/ui/ui-kit/Text";

import css from "./Footer.module.scss";

export const Footer: React.FC = () => {
   const now = new Date();

   const formatted = now.toLocaleString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
   });

   return (
      <footer className={css.footer}>
         <div className={css.footer_top}>
            <div className={css.footer_newsletter}>
               <H2>Newsletter</H2>

               <form className={css.newsletter}>
                  <H4>Subscribe to our newsletter for occasional updates 🛸</H4>

                  <input type="email" placeholder="Enter email" className={css.newsletter_input} />

                  <div className={css.newsletter_bottom}>
                     <P>
                        By registering, you agree to the Terms of Use and acknowledge that you have
                        read our Privacy Policy.
                     </P>

                     <Button variant="light" className={css.more_button}>
                        Sign up
                        <span>→</span>
                     </Button>
                  </div>
               </form>
            </div>

            <div className={clsx(css.footer_links, css.p4)}>
               <div className={css.footer_links_wrap}>
                  <a href="/about">About</a>
                  <a href="/club">Join The Club</a>
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
                  <a href="/privacy-policy">
                     <P>Privacy Policy</P>
                  </a>
               </div>
            </div>

            <time className={clsx(css.footer_clock, css.subtitle2)}>
               <p>{formatted}</p>
            </time>
         </div>
      </footer>
   );
};
