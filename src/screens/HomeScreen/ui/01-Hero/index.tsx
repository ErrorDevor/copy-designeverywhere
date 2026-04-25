"use client";

import React from "react";

import clsx from "clsx";

import Image from "shared/ui/base/Image";
import { H1, H3, H4, H5 } from "shared/ui/ui-kit/Text";

import css from "./Hero.module.scss";

interface Prop {
   clasName?: string;
}

export const Hero: React.FC<Prop> = ({ clasName }) => {
   return (
      <section className={clsx(css.hero_section, clasName)}>
         <div className={css.left_side}>
            <div className={css.left_side_thumbnail}>
               <Image.Default src="/images/1741014067-designeverywhere_library_inthepark_1.avif" />

               <div className={css.library_header_thumbnail_title}>
                  <div className={css.number}>
                     <span className={css.square_unicode}>■</span>
                     <p>WK-148</p>
                  </div>

                  <div>
                     <a href="/work/in-the-park">
                        <H4>In The Park</H4>
                     </a>

                     <a href="/profile/bontemps">
                        <H5>BonTemps©</H5>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className={css.right_side}>
            <div className={css.library_header_inner_top}>
               <H3>
                  An ever-growing collection of carefully curated works from the Design Everywhere
                  Library.
               </H3>
               <div className={css.library_instagram}>
                  <a target="_blank" href="https://www.instagram.com/designeverywhere_">
                     <span>Discover more on our Instagram ↗</span>
                  </a>
               </div>
            </div>

            <H1>LIBRARY</H1>
         </div>
      </section>
   );
};
