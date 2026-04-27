"use client";

import React from "react";

import clsx from "clsx";

import { useHome } from "features/Home";

import { fileToServerPath } from "shared/api/lib/fileToServerPath";
import { ImageApi } from "shared/api/ui/ImageApi";
import { H1, H3, H4, H5 } from "shared/ui/ui-kit/Text";

import css from "./Hero.module.scss";

interface Prop {
   clasName?: string;
}

export const Hero: React.FC<Prop> = ({ clasName }) => {
   const home = useHome();

   const post = home.main.post;

   return (
      <section className={clsx(css.hero_section, clasName)}>
         <div className={css.left_side}>
            <div className={css.left_side_thumbnail}>
               {post.preview.mimeType.startsWith("image") && (
                  <ImageApi className={css.thumbnail_media} data={post.preview} />
               )}
               {post.preview.mimeType.startsWith("video") && (
                  <video
                     className={css.thumbnail_media}
                     src={fileToServerPath(post.preview).optimized}
                     autoPlay
                     playsInline
                     muted
                     loop
                  />
               )}

               <div className={css.library_header_thumbnail_title}>
                  <div className={css.number}>
                     <span className={css.square_unicode}>■</span>
                     <p>{post.aiTool?.name}</p>
                  </div>

                  <div>
                     <a href="/work/in-the-park">
                        <H4>{post.title}</H4>
                     </a>

                     <a href="/profile/bontemps">
                        <H5>{post.sectionType ?? <>&nbsp;</>}</H5>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className={css.right_side}>
            <div className={css.library_header_inner_top}>
               <H3>{home.main.slogan}</H3>
               <div className={css.library_instagram}>
                  <a target="_blank">
                     <span>Discover more on our Instagram ↗</span>
                  </a>
               </div>
            </div>

            <H1>{home.main.title}</H1>
         </div>
      </section>
   );
};
