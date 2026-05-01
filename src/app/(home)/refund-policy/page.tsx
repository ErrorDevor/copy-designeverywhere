"use client";

import React from "react";

import css from "./TermsOfUse.module.scss";

const Page: React.FC = () => {
   React.useEffect(() => {
      const anchors = Array.from(document.querySelectorAll(`.${css.anchor}`)) as HTMLElement[];
      const headings = Array.from(document.querySelectorAll(`.other-title.p3`)) as HTMLElement[];

      const content = anchors.map((anchor, id) => ({
         anchor,
         heading: headings[id],
      }));

      content.forEach(({ anchor, heading }) => {
         anchor.onclick = () =>
            heading.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
      });

      const scroll = () => {
         const currentScroll = window.pageYOffset;
         const pointOfStart = currentScroll + 120;

         let active: {
            anchor: HTMLElement;
            heading: HTMLElement;
         } | null = content[0];

         for (const { anchor, heading } of content) {
            const elementTop = heading.getBoundingClientRect().top + window.pageYOffset;
            if (elementTop <= pointOfStart) {
               active = { anchor, heading };
            }
         }

         content.forEach((i) => {
            if (i.anchor === active?.anchor) {
               i.anchor.classList.add("active");
               const parentEl = i.anchor.parentElement;
               if (parentEl) {
                  parentEl.scrollTo({
                     left: i.anchor.offsetLeft,
                     behavior: "smooth",
                  });
               }
            } else {
               i.anchor.classList.remove("active");
            }
         });
      };

      scroll();

      window.addEventListener("scroll", scroll);

      return () => window.removeEventListener("scroll", scroll);
   }, []);

   return (
      <div className={css.root}>
         <div className={css.head}>
            <h2 className={css.head_title}>Refund Policy</h2>
            <p className={css.head_lastUpdated}>Last updated: 10 March 2026</p>
         </div>

         <div className={css.content}>
            <div className={css.content_sidebar}>
               <p className={css.anchor} data-idx="0">
                  1. Refund Policy
               </p>
            </div>

            <div className={css.content_content} id="content">
               <div className="single-other-content  single-other-content-0">
                  <span className="other-title p3">1. Refund Policy</span>{" "}
                  <div className="other-description p3">
                     <p>
                        Unfortunately, we do not offer refunds for memberships. If you decide to
                        cancel your membership, you may do so at any time, but payments already made
                        are non-refundable.
                     </p>
                     <p />
                     <p>
                        After cancellation, you will still have access to all membership benefits
                        until the end of your current billing cycle.
                     </p>
                     <p />
                     <p>
                        For example, if you signed up for a monthly membership on April 5, 2026, you
                        will continue to have access to your membership until May 5, 2026.
                     </p>
                     <p />
                     <p>
                        Please note that lifetime memberships are also non-refundable. Once
                        purchased and activated, a lifetime membership cannot be cancelled,
                        refunded, or exchanged.
                     </p>
                     <p>To cancel your membership, follow these steps:</p>
                     <p>Sign in to your account.</p>
                     <ul>
                        <li>Click on your avatar icon in the top-right corner of the page.</li>
                        <li>Select Membership from the dropdown menu.</li>
                        <li>Click Manage Membership, then click Manage under Manage Billing.</li>
                        <li>You will be redirected to the Stripe billing page.</li>
                        <li>Click Cancel Plan.</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
