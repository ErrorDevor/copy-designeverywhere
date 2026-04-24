"use client";

import React from "react";

import { useRouter, useSearchParams } from "next/navigation";

import clsx from "clsx";

import { articleLibrary } from "shared/config/articleConfig";
import Image from "shared/ui/base/Image";
import { NextLink } from "shared/ui/base/NextLink";
import { Button } from "shared/ui/ui-kit/Button";
import { LinkButton } from "shared/ui/ui-kit/LinkButton";
import { H4, H5, P } from "shared/ui/ui-kit/Text";

import css from "./Library.module.scss";

interface Prop {
   clasName?: string;
}

const ITEMS_PER_PAGE = 16;

export const Library: React.FC<Prop> = ({ clasName }) => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const currentPage = Number(searchParams.get("page") || 1);

   const totalPages = Math.ceil(articleLibrary.length / ITEMS_PER_PAGE);

   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const currentItems = articleLibrary.slice(startIndex, startIndex + ITEMS_PER_PAGE);

   const goToPage = (page: number) => {
      if (page < 1 || page > totalPages) return;

      router.push(`/?page=${page}`);
   };

   const handleNext = () => {
      goToPage(currentPage + 1);
   };

   const handlePrev = () => {
      goToPage(currentPage - 1);
   };

   const getPagination = () => {
      if (totalPages <= 5) {
         return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      return [1, 2, 3, 4, "...", totalPages];
   };

   return (
      <section className={clsx(css.library, clasName)}>
         {currentItems.map((item, index) => (
            <article className={clsx(css.thumbnail, css.thumbnail_grid)} key={index}>
               <NextLink className={css.thumbnail_image} href={item.src}>
                  {item.type !== "image" ? (
                     <video
                        src={item.src}
                        className={css.thumbnail_video}
                        loop
                        autoPlay
                        playsInline
                        muted
                        preload="metadata"
                     />
                  ) : (
                     <Image.Default src={item.src} />
                  )}

                  <LinkButton href={item.src} />
               </NextLink>

               <div className={css.thumbnail_title}>
                  <NextLink href={item.href} className={css.thumbnail_number}>
                     <span className={css.square_unicode}>■</span>
                     <p>WK-{160 + startIndex + index}</p>
                  </NextLink>

                  <div className={css.thumbnail_title_wrap}>
                     <NextLink href={item.href}>
                        <H4>{item.title}</H4>
                     </NextLink>

                     <NextLink href={item.profileHref}>
                        <H5>{item.profile}</H5>
                     </NextLink>
                  </div>
               </div>

               <div className={css.thumbnail_tags}>
                  <ul className={css.thumbnail_tags_wrapper}>
                     <Button variant="light" className={css.location_button}>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10">
                           <path d="M4 0C1.79 0 0 1.746 0 3.9c0 2.406 2.333 4.855 3.435 5.88a.834.834 0 0 0 1.13 0C5.668 8.755 8 6.306 8 3.9 8.002 1.747 6.21 0 4 0Zm0 5.493c-.857 0-1.555-.68-1.555-1.517 0-.837.698-1.517 1.556-1.517.858 0 1.555.68 1.555 1.517 0 .837-.697 1.517-1.555 1.517Z"></path>
                        </svg>
                        {item.location}
                     </Button>

                     {item.tags.map((tag, id) => (
                        <li key={id} className={css.thumbnail_tags_item}>
                           <P>{tag.name}</P>
                        </li>
                     ))}

                     <Button variant="light" className={css.more_button}>
                        ...
                     </Button>
                  </ul>
               </div>
            </article>
         ))}

         <div className={css.pagination}>
            {currentPage > 1 && (
               <button className={css.prev_button} type="button" onClick={handlePrev}>
                  prev
               </button>
            )}
            <div className={css.pagination_pages}>
               <div className={css.pagination_pages_inner}>
                  {getPagination().map((item, index) => {
                     if (item === "...") {
                        return (
                           <span key={`dots-${index}`} className={css.dots}>
                              ...
                           </span>
                        );
                     }

                     return (
                        <button
                           key={item}
                           type="button"
                           className={clsx(
                              css.pagination_pages_inner_circle,
                              currentPage === item && css.active
                           )}
                           onClick={() => goToPage(item as number)}
                        >
                           {item}
                        </button>
                     );
                  })}
               </div>
            </div>

            <button
               className={css.next_button}
               type="button"
               onClick={handleNext}
               disabled={currentPage >= totalPages}
            >
               next
            </button>
         </div>
      </section>
   );
};
