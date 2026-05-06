"use client";

import React from "react";

import { useRouter } from "next/navigation";

import clsx from "clsx";

import { useAuth } from "features/Auth";
import { usePricings } from "features/Pricing";
import { Pricing as PricingType } from "features/Pricing/api/pricing.types";
import { subscriptionApi } from "features/Pricing/api/subscriptionApi";

import { ImageApi } from "shared/api/ui/ImageApi";
import { Button } from "shared/ui/ui-kit/Button";
import { LoaderIcon } from "shared/ui/ui-kit/LoaderIcon";
import { H2, H3, H4, H5, P } from "shared/ui/ui-kit/Text";

import css from "./Pricing.module.scss";

interface Prop {
   className?: string;
}

type Period = "monthly" | "lifetime";

export const Pricing: React.FC<Prop> = ({ className }) => {
   const [period, setPeriod] = React.useState<Period>("monthly");
   const { data } = useAuth();
   const router = useRouter();

   const [priceActiveId, setPriceActiveId] = React.useState<string | null>(null);

   const { pricings } = usePricings();

   const cards = period === "lifetime" ? pricings.payments : pricings.subscriptions;

   const handlePrice = () => {
      if (!data) {
         router.push("/login");
      }
   };

   const handleSubscribe = async (pricing: PricingType) => {
      if (priceActiveId) {
         return;
      }

      setPriceActiveId(pricing.id);

      try {
         const response = await subscriptionApi.subscribe({
            priceId: pricing.id,
         });

         if (response.sessionUrl) {
            window.location.href = response.sessionUrl;
         }
      } finally {
         setPriceActiveId(null);
      }
   };

   return (
      <section className={clsx(css.pricing, className)}>
         {/* Intro */}
         <div className={css.intro}>
            <div className={css.intro_tag}>
               <P>pricing</P>
            </div>

            <H3>
               As a Club member, you will have access to a new way of experiencing Lafys with
               exclusive benefits and features tailored to each membership tier.
               <br />
               <br />
               Whether you join as a Basic, Grow, or Premium membership, you'll be supporting the
               growth and sustainability of Lafys while gaining access to a range of perks designed
               for members.
            </H3>
         </div>

         {/* Toggle */}
         <div className={css.toggle}>
            {pricings.subscriptions.length > 0 && (
               <button
                  className={clsx(css.toggle_btn, {
                     [css.active]: period === "monthly",
                  })}
                  onClick={() => setPeriod("monthly")}
               >
                  Monthly
               </button>
            )}

            {pricings.payments.length > 0 && (
               <button
                  className={clsx(css.toggle_btn, {
                     [css.active]: period === "lifetime",
                  })}
                  onClick={() => setPeriod("lifetime")}
               >
                  Lifetime <span>Best Value</span>
               </button>
            )}
         </div>

         {/* Cards */}
         <div className={css.cards}>
            {cards.map((card, index) => {
               const isFeatured = index === 1;
               const prices = card.oldPrice ? [card.oldPrice, card.price] : [card.price];
               return (
                  <div
                     key={card.id}
                     className={clsx(css.card, {
                        [css.featured]: isFeatured,
                     })}
                  >
                     <div className={css.card_top}>
                        <div className={css.card_image}>
                           <ImageApi data={card.preview} />
                        </div>

                        <div className={css.price_wrap}>
                           <H2>{card.title}</H2>

                           <div className={css.price}>
                              <H3 className={css.price_value}>
                                 {prices.map((price, priceIndex) => (
                                    <span
                                       key={priceIndex}
                                       className={clsx({
                                          [css.old_price]: prices.length > 1 && priceIndex === 0,
                                       })}
                                    >
                                       ${price}
                                    </span>
                                 ))}
                              </H3>
                              <P>{card.hint}</P>
                           </div>
                        </div>

                        <Button
                           className={css.cta}
                           variant={isFeatured ? "black" : "light"}
                           onClick={handleSubscribe.bind(null, card)}
                        >
                           <span>{card.buttonName}</span>
                           {priceActiveId === card.id ? (
                              <LoaderIcon className={clsx(isFeatured && css.cta_white)} />
                           ) : (
                              <span>→</span>
                           )}
                        </Button>
                     </div>

                     <div className={css.card_bottom}>
                        <ul className={css.benefits}>
                           {card.advantages.map((b, i) => (
                              <li key={i} className={css.benefit}>
                                 <span
                                    className={clsx(css.benefit_icon, {
                                       [css.active]: b.isInclude,
                                    })}
                                 >
                                    {b.isInclude ? (
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="#000"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                       >
                                          <path d="M20 6 9 17l-5-5" />
                                       </svg>
                                    ) : (
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="#5b5b5b"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                       >
                                          <path d="M18 6 6 18" />
                                          <path d="m6 6 12 12" />
                                       </svg>
                                    )}
                                 </span>

                                 <H4
                                    className={clsx(css.benefit_text, {
                                       [css.inactive]: !b.isInclude,
                                       // [css.strong]: b.strong,
                                    })}
                                 >
                                    {b.value}
                                 </H4>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};
