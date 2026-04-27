"use client";

import React from "react";

import clsx from "clsx";

import css from "./CopyPrompt.module.scss";
import { copyInput } from "shared/lib/copyInput";

interface Prop {
   className?: string;
   prompt?: string;
   children?: React.ReactNode;
}

export const CopyPrompt: React.FC<Prop> = ({ className, prompt, children }) => {
   const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
   const [isCopied, setCopied] = React.useState(false);

   const handleCopy = () => {
      if (isCopied || !prompt) return;

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
         <span className={css.link_button_icon}>{isCopied ? "Copied" : "Copy Prompt"}</span>
      </button>
   );
};
