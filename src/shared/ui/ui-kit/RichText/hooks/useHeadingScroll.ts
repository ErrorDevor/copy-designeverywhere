"use client";

import React from "react";

import { getHeadingsAndIds } from "../utils/getHeadingsAndIds";
import { scrollTop } from "../utils/scrollTop";
import { SerializedEditorState } from "lexical";

export function useHeadingScroll(content: SerializedEditorState) {
   const [activeId, setActiveId] = React.useState<string | null>(null);
   const disabled = React.useRef(false);

   const headings = React.useMemo(() => {
      return getHeadingsAndIds(content);
   }, [content]);

   const scrollToId = (id: string) => {
      if (disabled.current) return;
      const element = document.getElementById(id);

      console.log(id);

      if (!element) return;
      disabled.current = true;
      setActiveId(id);

      window.history.replaceState({}, "", `${window.location.pathname}#${id}`);

      const top = element.getBoundingClientRect().top + window.pageYOffset - 120;
      scrollTop(top, {
         duration: 0.7,
         onComplete() {
            disabled.current = false;
         },
      });
   };

   const scroll = () => {
      if (disabled.current) return;

      const elements: Array<{
         element: HTMLElement;
         id: string;
      }> = [];
      headings.forEach((i) => {
         const element = document.getElementById(i.id);
         if (element)
            elements.push({
               element,
               id: i.id,
            });
      });
      const currentScroll = window.pageYOffset;
      const pointOfStart = currentScroll + 120;
      let activeId = headings[0]?.id ?? null;
      for (const { element, id } of elements) {
         const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
         if (elementTop <= pointOfStart) {
            activeId = id;
         }
      }
      setActiveId(activeId);
   };

   React.useEffect(() => {
      scroll();
   }, []);

   React.useEffect(() => {
      window.addEventListener("scroll", scroll);
      return () => window.removeEventListener("scroll", scroll);
   });

   return {
      scrollToId,
      headings,
      activeId,
   };
}
