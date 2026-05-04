"use client";

import React from "react";

import clsx from "clsx";

import { copyInput } from "shared/lib/copyInput";

import css from "./CopyPrompt.module.scss";

interface Prop {
   className?: string;
   prompt?: string;
   children?: React.ReactNode;
   onSave?: VoidFunction
}

export const CopyPrompt: React.FC<Prop> = ({ className, prompt, onSave }) => {
   const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
   const [isCopied, setCopied] = React.useState(false);

   const handleCopy = () => {
      if (isCopied || !prompt || onSave) {
         onSave?.();
         return;
      }

      copyInput(prompt);

      setCopied(true);

      timeoutRef.current = setTimeout(() => {
         setCopied(false);
         clearTimeout(timeoutRef.current!);
         timeoutRef.current = null;
      }, 2500);
   };

   React.useEffect(() => {
      return () => {
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }
      };
   }, []);

   return (
      <button className={clsx(css.link_button, className)} onClick={handleCopy}>
         <span className={css.link_button_icon}>
            {isCopied ? (
               "✔ Copied"
            ) : (
               <>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="none"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                     <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>{" "}
                  Copy Prompt
               </>
            )}
         </span>
      </button>
   );
};
