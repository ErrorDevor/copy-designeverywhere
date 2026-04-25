"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

import clsx from "clsx";
import qs from "qs";

import { Filter } from "features/Filter";
import { PostItem } from "features/Post";
import { usePosts } from "features/Post/model/usePosts";

import css from "./Library.module.scss";

interface Prop {
   clasName?: string;
}

export const Library: React.FC<Prop> = ({ clasName }) => {
   const libRef = React.useRef<HTMLDivElement>(null);

   const searchParams = useSearchParams();
   const [filter, setFilter] = React.useState({
      page: Number(searchParams.get("page") || 1),
      aiTools: searchParams.get("aiTools")?.split(",") || [],
   });

   const postData = usePosts(filter);

   const totalPages = postData.data?.totalPages || 1;

   const goToPage = (page: number) => {
      if (page < 1 || page > totalPages) return;
      setFilter((prev) => ({ ...prev, page }));

      if (libRef.current) {
         libRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
         });
      }
   };

   const handleNext = () => {
      goToPage(filter.page + 1);
   };

   const handlePrev = () => {
      goToPage(filter.page - 1);
   };

   const getPagination = () => {
      const current = filter.page;

      if (totalPages <= 7) {
         return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      if (current <= 4) {
         return [1, 2, 3, 4, 5, "...", totalPages];
      }

      if (current >= totalPages - 3) {
         return [
            1,
            "...",
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
         ];
      }

      return [1, "...", current - 1, current, current + 1, "...", totalPages];
   };

   React.useEffect(() => {
      const queryString = qs.stringify({
         page: filter.page > 1 ? filter.page : undefined,
         aiTools: filter.aiTools.length > 0 ? filter.aiTools.join(",") : undefined,
      });

      // window.history.replaceState({}, "", queryString ? `/?${queryString}` : "/");
   }, [filter]);

   return (
      <section className={css.library_section}>
         <Filter filter={filter} onChange={setFilter} />
         <div className={clsx(css.library, clasName)} ref={libRef}>
            <div className={css.library_list}>
               {(postData.data?.docs || []).map((post) => (
                  <PostItem data={post} key={post.id} />
               ))}
            </div>

            <div className={css.pagination}>
               {filter.page > 1 && (
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
                                 filter.page === item && css.active
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
                  disabled={filter.page >= totalPages}
               >
                  next
               </button>
            </div>
         </div>
      </section>
   );
};
