"use client";

import React from "react";
import { CSSTransition } from "react-transition-group";

import clsx from "clsx";

import { useAiTools } from "features/Post";
import { PostsFilter } from "features/Post/model/usePosts";

import { H6 } from "shared/ui/ui-kit/Text";

import css from "./Filter.module.scss";

interface Prop {
   className?: string;
   filter: PostsFilter;
   onChange(filter: PostsFilter): void;
}

function splitToColumns<T>(array: T[], columns: number, itemsPerColumn: number): T[][] {
   if (columns <= 0 || itemsPerColumn <= 0) {
      throw new Error("columns и itemsPerColumn должны быть больше 0");
   }

   const result: T[][] = Array.from({ length: columns }, () => []);

   let index = 0;

   for (let col = 0; col < columns; col++) {
      for (let i = 0; i < itemsPerColumn && index < array.length; i++) {
         result[col].push(array[index++]);
      }
   }

   let col = 0;
   while (index < array.length) {
      result[col].push(array[index++]);
      col = (col + 1) % columns;
   }

   return result;
}

const SvgFilter = () => (
   <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 11">
      <mask id="a" fill="#fff">
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.915 1H12v1H7.915a1.5 1.5 0 0 1-2.83 0H0V1h5.085a1.5 1.5 0 0 1 2.83 0Zm2 9H12V9H9.915a1.5 1.5 0 0 0-2.83 0H0v1h7.085a1.5 1.5 0 0 0 2.83 0ZM12 6H4.915a1.5 1.5 0 0 1-2.83 0H0V5h2.085a1.5 1.5 0 0 1 2.83 0H12v1Z"
         ></path>
      </mask>
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M7.915 1H12v1H7.915a1.5 1.5 0 0 1-2.83 0H0V1h5.085a1.5 1.5 0 0 1 2.83 0Zm2 9H12V9H9.915a1.5 1.5 0 0 0-2.83 0H0v1h7.085a1.5 1.5 0 0 0 2.83 0ZM12 6H4.915a1.5 1.5 0 0 1-2.83 0H0V5h2.085a1.5 1.5 0 0 1 2.83 0H12v1Z"
         fill="#0D0D0D"
      ></path>
      <path
         d="M12 1h1V0h-1v1ZM7.915 1l-.943.333.235.667h.708V1ZM12 2v1h1V2h-1ZM7.915 2V1h-.708l-.235.667.943.333Zm-2.83 0 .943-.333L5.793 1h-.708v1ZM0 2h-1v1h1V2Zm0-1V0h-1v1h1Zm5.085 0v1h.708l.235-.667L5.085 1ZM12 10v1h1v-1h-1Zm-2.085 0V9h-.708l-.235.667.943.333ZM12 9h1V8h-1v1ZM9.915 9l-.943.333.235.667h.708V9Zm-2.83 0v1h.708l.235-.667L7.085 9ZM0 9V8h-1v1h1Zm0 1h-1v1h1v-1Zm7.085 0 .943-.333L7.793 9h-.708v1Zm-2.17-4V5h-.708l-.235.667.943.333ZM12 6v1h1V6h-1ZM2.085 6l.943-.333L2.793 5h-.708v1ZM0 6h-1v1h1V6Zm0-1V4h-1v1h1Zm2.085 0v1h.708l.235-.667L2.085 5Zm2.83 0-.943.333.235.667h.708V5ZM12 5h1V4h-1v1Zm0-5H7.915v2H12V0Zm1 2V1h-2v1h2ZM7.915 3H12V1H7.915v2ZM6.5 4a2.5 2.5 0 0 0 2.357-1.667l-1.885-.666A.5.5 0 0 1 6.5 2v2ZM4.143 2.333A2.5 2.5 0 0 0 6.5 4V2a.5.5 0 0 1-.472-.333l-1.885.666ZM0 3h5.085V1H0v2Zm-1-2v1h2V1h-2Zm6.085-1H0v2h5.085V0ZM6.5-1A2.5 2.5 0 0 0 4.143.667l1.885.666A.5.5 0 0 1 6.5 1v-2ZM8.857.667A2.5 2.5 0 0 0 6.5-1v2a.5.5 0 0 1 .472.333L8.857.667ZM12 9H9.915v2H12V9Zm-1 0v1h2V9h-2Zm-1.085 1H12V8H9.915v2ZM8.5 9a.5.5 0 0 1 .472.333l1.886-.666A2.5 2.5 0 0 0 8.5 7v2Zm-.472.333A.5.5 0 0 1 8.5 9V7a2.5 2.5 0 0 0-2.357 1.667l1.885.666ZM0 10h7.085V8H0v2Zm1 0V9h-2v1h2Zm6.085-1H0v2h7.085V9ZM8.5 10a.5.5 0 0 1-.472-.333l-1.885.666A2.5 2.5 0 0 0 8.5 12v-2Zm.472-.333A.5.5 0 0 1 8.5 10v2a2.5 2.5 0 0 0 2.357-1.667l-1.885-.666ZM4.915 7H12V5H4.915v2ZM3.5 8a2.5 2.5 0 0 0 2.357-1.667l-1.885-.666A.5.5 0 0 1 3.5 6v2ZM1.143 6.333A2.5 2.5 0 0 0 3.5 8V6a.5.5 0 0 1-.472-.333l-1.885.666ZM0 7h2.085V5H0v2Zm-1-2v1h2V5h-2Zm3.085-1H0v2h2.085V4ZM3.5 3a2.5 2.5 0 0 0-2.357 1.667l1.885.666A.5.5 0 0 1 3.5 5V3Zm2.357 1.667A2.5 2.5 0 0 0 3.5 3v2a.5.5 0 0 1 .472.333l1.885-.666ZM12 4H4.915v2H12V4Zm1 2V5h-2v1h2Z"
         mask="url(#a)"
      ></path>
   </svg>
);

export const Filter: React.FC<Prop> = ({ filter, onChange }) => {
   const [activeFilter, setActiveFilter] = React.useState(false);
   const filterRef = React.useRef<HTMLDivElement>(null);

   const [localFilter, setLocalFilter] = React.useState(filter);

   const aiTools = useAiTools();

   const tools = aiTools.data?.docs || [];

   const columns = React.useMemo(() => {
      return splitToColumns(tools, 5, 5);
   }, [tools]);

   const handleClear = () => {
      onChange({ ...filter, aiTools: [], page: 1 });
      setActiveFilter(false);
   };

   const handleApply = () => {
      onChange({ ...localFilter, page: 1 });
      setActiveFilter(false);
   };

   const toggleItem = (array: string[], value: string) => {
      if (array.includes(value)) {
         return array.filter((i) => value !== i);
      }
      return [...array, value];
   };

   React.useEffect(() => {
      if (activeFilter && filterRef.current) {
         setLocalFilter(filter);

         filterRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });

         const stopScroll = (e: WheelEvent) => e.preventDefault();

         window.addEventListener("wheel", stopScroll, { passive: false });

         return () => window.removeEventListener("wheel", stopScroll, { passive: false } as any);
      }
   }, [activeFilter]);

   const isSame = React.useMemo(
      () => JSON.stringify(localFilter) === JSON.stringify(filter),
      [filter, localFilter]
   );

   return (
      <>
         <div className={css.filter_btn} onClick={() => setActiveFilter(!activeFilter)}>
            <SvgFilter />
            <H6>Filters</H6>
         </div>

         <CSSTransition
            timeout={400}
            in={activeFilter}
            classNames={css}
            nodeRef={filterRef}
            unmountOnExit
            mountOnEnter
         >
            <div className={css.filter_modal} ref={filterRef}>
               <div className={css.filter_modal_window}>
                  <div className={css.filter_modal_head}>
                     <div className={css.filter_btn} onClick={() => setActiveFilter(!activeFilter)}>
                        <SvgFilter />
                        <H6>Filters</H6>
                     </div>
                  </div>

                  <div className={css.filter_modal_content}>
                     <div className={css.filter_modal_list}>
                        <div className={clsx(css.filter_modal_list_tab, css.active)}>
                           <span>Ai Tool</span> <sup>1</sup>
                        </div>
                     </div>

                     <div className={css.filter_modal_data}>
                        {columns.map((col, id) => (
                           <div className={css.filter_modal_data_column} key={id}>
                              {col.map((item) => (
                                 <button
                                    className={clsx(
                                       css.filter_modal_data_item,
                                       localFilter.aiTools.includes(item.name) && css.active
                                    )}
                                    onClick={() =>
                                       setLocalFilter({
                                          ...localFilter,
                                          aiTools: toggleItem(localFilter.aiTools, item.name),
                                       })
                                    }
                                    key={item.id}
                                 >
                                    {item.name}
                                 </button>
                              ))}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className={css.filter_modal_controls}>
                     <button className={css.filter_modal_controls_clearBtn} onClick={handleClear}>
                        Clear
                     </button>
                     <button
                        className={css.filter_modal_controls_applyBtn}
                        onClick={handleApply}
                        disabled={isSame}
                     >
                        Apply
                     </button>
                  </div>
               </div>
            </div>
         </CSSTransition>
      </>
   );
};
