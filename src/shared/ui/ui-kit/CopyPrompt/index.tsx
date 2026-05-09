"use client";

import React from "react";

import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";

import { postApi } from "features/Post/api/postApi";
import { GetPrompt } from "features/Post/api/posts.types";

import { fileToServerPath } from "shared/api/lib/fileToServerPath";
import { copyInput } from "shared/lib/copyInput";
import { downloadFile } from "shared/lib/downloadFile";

import { LoaderIcon } from "../LoaderIcon";

import css from "./CopyPrompt.module.scss";

interface Prop {
   className?: string;
   postId: string;
   active?: boolean;
   onCopied?: VoidFunction;
   onCopyDisabled?: VoidFunction;
}

export const CopyPrompt: React.FC<Prop> = ({ className, postId, onCopied, onCopyDisabled, active }) => {
   const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
   const [isCopied, setCopied] = React.useState(false);
   const [isFetching, setFetching] = React.useState(false);

   const [prompt, setPrompt] = React.useState<GetPrompt | null>(null);

   const fetchPrompt = async () => {
      try {
         setFetching(true);
         const prompt = await postApi.getPromptByPostId(postId);
         return prompt;
      } catch (e) {
         return null;
      } finally {
         setFetching(false);
      }
   };

   const handleCopy = async () => {
      if (isFetching || isCopied || !active) {
         if(!active) {
            onCopyDisabled?.();
         }
         return;
      }

      const data = !prompt ? await fetchPrompt() : prompt;

      if (data && data.prompt) {
         copyInput(data.prompt);
         if (data.file) {
            downloadFile(fileToServerPath(data.file).main);
         }
         onCopied?.();
         setCopied(true);
         setPrompt(data);

         timeoutRef.current = setTimeout(() => {
            setCopied(false);
            clearTimeout(timeoutRef.current!);
            timeoutRef.current = null;
         }, 2500);
      }
   };

   React.useEffect(() => {
      return () => {
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }
      };
   }, []);

   return (
      <button
         className={clsx(css.link_button, className)}
         disabled={prompt?.prompt.trim() === ""}
         onClick={handleCopy}
      >
         {isFetching ? (
            <span className={css.link_button_icon}>
               <LoaderIcon className={css.loader} /> Copying...
            </span>
         ) : (
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
         )}
      </button>
   );
};
