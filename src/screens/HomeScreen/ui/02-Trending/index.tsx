"use client";

import React from "react";

import clsx from "clsx";

import { useHome } from "features/Home";

import { fileToServerPath } from "shared/api/lib/fileToServerPath";
import { ImageApi } from "shared/api/ui/ImageApi";
import { H4, P } from "shared/ui/ui-kit/Text";

import css from "./Trending.module.scss";

interface Prop {
   clasName?: string;
}

export const Trending: React.FC<Prop> = ({ clasName }) => {
   const home = useHome();

   return (
      <section className={clsx(css.trending, clasName)}>
         <div className={css.trending_title}>
            <H4>● Trending</H4>
         </div>

         <div className={css.trending_works}>
            {home.trending.post.slice(0, 3).map((item) => (
               <div className={css.related_thumbnail} key={item.id}>
                  <div className={css.related_thumbnail_image}>
                     {item.preview.mimeType.startsWith("image") && (
                        <ImageApi className={css.thumbnail_media} data={item.preview} />
                     )}
                     {item.preview.mimeType.startsWith("video") && (
                        <video
                           className={css.thumbnail_media}
                           src={fileToServerPath(item.preview).optimized}
                           autoPlay
                           playsInline
                           muted
                           loop
                        />
                     )}
                  </div>

                  <div className={css.related_thumbnail_title}>
                     <div className={css.number}>
                        <span className={css.square_unicode}>■</span>
                        {item.aiTool?.name}
                     </div>

                     <div className={css.title_wrap}>
                        <H4>{item.title}</H4>
                        <a href="/profile/the-new-company">{item.sectionType}</a>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};
