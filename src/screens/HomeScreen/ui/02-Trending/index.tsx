"use client";

import React from "react";

import clsx from "clsx";

import Image from "shared/ui/base/Image";
import { H4, P } from "shared/ui/ui-kit/Text";

import css from "./Trending.module.scss";

interface Prop {
   clasName?: string;
}

export const Trending: React.FC<Prop> = ({ clasName }) => {
   return (
      <section className={clsx(css.trending, clasName)}>
         <div className={css.trending_title}>
            <H4>● Trending</H4>
         </div>

         <div className={css.trending_works}>
            <div className={css.related_thumbnail}>
               <div className={css.related_thumbnail_image}>
                  <Image.Default src="https://www.datocms-assets.com/79148/1759738526-designeverywhere_library_oneburger_3.webp?auto=format%2Ccompress&q=75" />
               </div>

               <div className={css.related_thumbnail_title}>
                  <div className={css.number}>
                     <span className={css.square_unicode}>■</span>WK-162
                  </div>

                  <div className={css.title_wrap}>
                     <H4>One Burger</H4>
                     <a href="/profile/the-new-company">The New Company</a>
                  </div>
               </div>
            </div>
            <div className={css.related_thumbnail}>
               <div className={css.related_thumbnail_image}>
                  <Image.Default src="https://www.datocms-assets.com/79148/1713329268-designeverywhere_library_vuum_1.webp?auto=format%2Ccompress&q=75" />
               </div>
               <div className={css.related_thumbnail_title}>
                  <div className={css.number}>
                     <span className={css.square_unicode}>■</span>WK-135
                  </div>

                  <div className={css.title_wrap}>
                     <H4>VUUM</H4>
                     <a href="/profile/some-days">SOME DAYS</a>
                  </div>
               </div>
            </div>
            <div className={css.related_thumbnail}>
               <div className={css.related_thumbnail_image}>
                  <Image.Default src="https://www.datocms-assets.com/79148/1714988619-designeverywhere_library_pidan_1-1.webp?auto=format%2Ccompress&q=75" />
               </div>
               <div className={css.related_thumbnail_title}>
                  <div className={css.number}>
                     <span className={css.square_unicode}>■</span>WK-139
                  </div>

                  <div className={css.title_wrap}>
                     <H4>pidan</H4>
                     <a href="/profile/a-black-cover-design">A Black Cover Design</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
