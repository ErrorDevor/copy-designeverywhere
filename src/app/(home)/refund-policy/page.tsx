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
            <p className={css.head_lastUpdated}>Last updated: 30 January 2023</p>
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
                  <span className="other-description p3">
                     <p>
                        At Lafys, we want our customers to feel confident when purchasing our
                        products and subscriptions.
                     </p>
                     <p />
                     <p>
                        If you are eligible for a refund, the refunded amount will be returned to
                        your original payment method within 14 business days after your refund
                        request has been reviewed and approved.
                     </p>
                     <p />
                     <p>
                        Please note that lifetime subscriptions are non-refundable. Once a lifetime
                        subscription has been purchased and activated, it cannot be cancelled,
                        refunded, or exchanged.
                     </p>
                     <p />
                     <p>
                        To request a refund, please contact our support team with your order details
                        and the reason for your request. We reserve the right to review each refund
                        request individually and approve or decline it based on the terms of this
                        Refund Policy.
                     </p>
                     <p>
                        By purchasing a subscription or product from Lafys, you agree to this Refund
                        Policy.
                     </p>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
