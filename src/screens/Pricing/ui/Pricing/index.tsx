"use client";

import React from "react";

import clsx from "clsx";

import Image from "shared/ui/base/Image";
import { Button } from "shared/ui/ui-kit/Button";
import { H2, H3, H4, H5, P } from "shared/ui/ui-kit/Text";

import css from "./Pricing.module.scss";

interface Prop {
   className?: string;
}

type Period = "monthly" | "lifetime";

const pricingData = {
   lifetime: [
      {
         price: "$149",
         period: "Lifetime Access - One-time Payment",
         description: "Get started fast with unlimited access to all available components",
         image: "/images/basic.webp",
         buttonName: "Get Basic Access",
         benefits: [
            { text: "Unlimited access", active: true },
            { text: "30+ AI Ready Templates", active: false },
            { text: "Animated Backgrounds", active: false },
            { text: "Access to Future 1000+ hero prompts", active: true },
            { text: "10% OFF on QClay Services", active: true },
            { text: "Commercial license", active: true, strong: true }
         ],
      },
      {
         price: "$497 $199",
         period: "Lifetime Access - One-time Payment",
         description:
            "The most valuable plan, get lifetime access on MotionSites with a one-time payment",
         image: "/images/grow.webp",
         buttonName: "Get Grow Access",
         benefits: [
            { text: "Unlimited access", active: true },
            { text: "30+ AI Ready Templates", active: true },
            { text: "Animated Backgrounds", active: true },
            { text: "Access to Future 1000+ hero prompts", active: true },
            { text: "10% OFF on QClay Services", active: true },
            { text: "Commercial license", active: true, strong: true },
            { text: "Priority support", active: true },
            { text: "Access to payouts for your prompts", active: true },
         ],
      },
   ],

   monthly: [
      {
         price: "$30",
         period: "Per month, cancel anytime",
         description: "Get started fast with unlimited access to all available components",
         image: "/images/basic.webp",
         buttonName: "Subscribe Monthly",
         benefits: [
            { text: "Unlimited access", active: true },
            { text: "30+ AI Ready Templates", active: false },
            { text: "Animated Backgrounds", active: false },
            { text: "Access to Future 1000+ hero prompts", active: true },
            { text: "10% OFF on QClay Services", active: true },
            { text: "Commercial license", active: true, strong: true }
         ],
      },
      {
         price: "$80 $45",
         period: "Per month, cancel anytime",
         description:
            "The best plan, get full access on Lafys with a monthly subscription",
         image: "/images/grow.webp",
         buttonName: "Subscribe Monthly",
         benefits: [
            { text: "Unlimited access", active: true },
            { text: "30+ AI Ready Templates", active: true },
            { text: "Animated Backgrounds", active: true },
            { text: "Access to Future 1000+ hero prompts", active: true },
            { text: "10% OFF on QClay Services", active: true },
            { text: "Commercial license", active: true, strong: true },
            { text: "Priority support", active: true },
            { text: "Access to payouts for your prompts", active: true },
         ],
      },
      {
         price: "$100",
         period: "Per month, cancel anytime",
         description: "Build your own products or websites and resell unlimited time",
         image: "/images/premium.webp",
         buttonName: "Subscribe Monthly",
         benefits: [
            { text: "Everything in Grow", active: true, strong: true },
            { text: "Resell unlimited time", active: true, strong: true },
            { text: "Private chat with the team", active: true, strong: true },
            { text: "Access to new features", active: true },
            { text: "Commercial license", active: true },
            { text: "Priority support", active: true },
         ],
      },
   ],
};

export const Pricing: React.FC<Prop> = ({ className }) => {
   const [period, setPeriod] = React.useState<Period>("monthly");

   const cards = pricingData[period];

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
            <button
               className={clsx(css.toggle_btn, {
                  [css.active]: period === "monthly",
               })}
               onClick={() => setPeriod("monthly")}
            >
               Monthly
            </button>

            <button
               className={clsx(css.toggle_btn, {
                  [css.active]: period === "lifetime",
               })}
               onClick={() => setPeriod("lifetime")}
            >
               Lifetime <span>Best Value</span>
            </button>
         </div>

         {/* Cards */}
         <div className={css.cards}>
            {cards.map((card, index) => {
               const isFeatured = index === 1;
               const prices = card.price.split(" ");
               return (
                  <div
                     key={index}
                     className={clsx(css.card, {
                        [css.featured]: isFeatured,
                     })}
                  >
                     <div className={css.card_top}>
                        <div className={css.card_image}>
                           <Image.Default src={card.image} />
                        </div>

                        <div className={css.price_wrap}>
                           <H2>{card.description}</H2>

                           <div className={css.price}>
                              <H3 className={css.price_value}>
                                 {prices.map((price, priceIndex) => (
                                    <span
                                       key={priceIndex}
                                       className={clsx({
                                          [css.old_price]: prices.length > 1 && priceIndex === 0,
                                       })}
                                    >
                                       {price}
                                    </span>
                                 ))}
                              </H3>
                              <P>{card.period}</P>
                           </div>
                        </div>

                        <Button className={css.cta} variant={isFeatured ? "black" : "light"}>
                           <span>{card.buttonName}</span> <span>→</span>
                        </Button>
                     </div>

                     <div className={css.card_bottom}>
                        <ul className={css.benefits}>
                           {card.benefits.map((b, i) => (
                              <li key={i} className={css.benefit}>
                                 <span
                                    className={clsx(css.benefit_icon, {
                                       [css.active]: b.active,
                                    })}
                                 >
                                    {b.active ? (
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
                                       [css.inactive]: !b.active,
                                       [css.strong]: b.strong,
                                    })}
                                 >
                                    {b.text}
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
