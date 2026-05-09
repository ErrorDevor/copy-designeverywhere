"use client";
import React from "react";

import clsx from "clsx";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMySubscription, usePricingPage } from "features/Pricing";
import { Pricing as PricingType } from "features/Pricing/api/pricing.types";
import { subscriptionApi } from "features/Pricing/api/subscriptionApi";

import { ImageApi } from "shared/api/ui/ImageApi";
import { useSwiperHelper } from "shared/lib/hooks/useSwiperHelper";
import { Button } from "shared/ui/ui-kit/Button";
import { LoaderIcon } from "shared/ui/ui-kit/LoaderIcon";
import { H2, H3, H4, H5, P } from "shared/ui/ui-kit/Text";

import css from "./Pricing.module.scss";

interface Prop {
   className?: string;
}

const PricingGroup = ({ data, index }: { data: PricingType[]; index: number }) => {
   const [isFetching, setFetching] = React.useState(false);
   const mySubscription = useMySubscription();

   const [currentItem, setCurrentItem] = React.useState(data[0]);
   const isFeatured = index === 1;

   const handleSubscribe = async (pricing: PricingType) => {
      if (isFetching || mySubscription.plan?.id === pricing.id) {
         return;
      }

      setFetching(true);

      try {
         const response = await subscriptionApi.subscribe({
            priceId: pricing.id,
         });

         if (response.sessionUrl) {
            window.location.href = response.sessionUrl;
         }
      } finally {
         setFetching(false);
      }
   };

   const prices = [currentItem.oldPrice, currentItem.price].filter(Boolean);

   return (
      <div
         className={clsx(css.card, {
            [css.featured]: isFeatured,
         })}
      >
         <div className={css.card_top}>
            <div className={css.card_image}>
               <ImageApi data={currentItem.preview} />
               {data.length > 1 && (
                  <div className={css.card_switcher}>
                     {data.map((item) => (
                        <button
                           className={css.card_switcher_btn}
                           disabled={currentItem.id === item.id}
                           onClick={() => setCurrentItem(item)}
                           key={item.selectorText}
                        >
                           {item.selectorText}
                        </button>
                     ))}
                  </div>
               )}
            </div>

            <div className={css.price_wrap}>
               <H2>{currentItem.title}</H2>

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
                  <P>{currentItem.hint}</P>
               </div>
            </div>

            {currentItem.button?.name ? (
               <Button
                  className={css.cta}
                  variant={isFeatured ? "black" : "light"}
                  href={currentItem.button.url}
                  as="a"
               >
                  {currentItem.button?.name}
               </Button>
            ) : (
               <Button
                  className={css.cta}
                  disabled={
                     mySubscription.plan?.id === currentItem.id ||
                     (mySubscription.plan?.priority || 0) > currentItem.priority
                  }
                  variant={isFeatured ? "black" : "light"}
                  onClick={handleSubscribe.bind(null, currentItem)}
               >
                  <span>
                     {mySubscription.plan?.id === currentItem.id
                        ? "Current plan"
                        : currentItem.buttonName}
                  </span>
                  {isFetching ? (
                     <LoaderIcon className={clsx(isFeatured && css.cta_white)} />
                  ) : (
                     <span>→</span>
                  )}
               </Button>
            )}
         </div>

         <div className={css.card_bottom}>
            <ul className={css.benefits}>
               {currentItem.advantages.map((b, i) => (
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
};

export const Pricing: React.FC<Prop> = ({ className }) => {
   const { pricings } = usePricingPage();
   const swiper = useSwiperHelper();

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
         <div className={css.pricing_head}>
            <h2 className={css.pricing_title}>Pricing</h2>
            <div className={css.pricing_controls}>
               <button
                  className={css.pricing_controls_btn}
                  onClick={swiper.slidePrev}
                  disabled={swiper.isBeginning}
               >
                  ←
               </button>
               <button
                  className={css.pricing_controls_btn}
                  onClick={swiper.slideNext}
                  disabled={swiper.isEnd}
               >
                  →
               </button>
            </div>
         </div>

         {/* Cards */}
         <div className={css.cards_swiper}>
            <Swiper
               className={css.cards_swiper_instance}
               onInit={swiper.setSwiperCore}
               onSlideChange={swiper.updater}
               spaceBetween={16}
               slidesPerView="auto"
               grabCursor
            >
               {pricings.map((item, index) => (
                  <SwiperSlide className={css.cards_swiper_item} key={item.id}>
                     <PricingGroup data={item.data} index={index} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};
