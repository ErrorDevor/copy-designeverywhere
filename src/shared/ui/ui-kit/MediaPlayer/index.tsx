"use client";

import React from "react";

import clsx from "clsx";

import { fileToServerPath } from "shared/api/lib/fileToServerPath";
import { FileType } from "shared/api/types";
import { ImageApi } from "shared/api/ui/ImageApi";

import { LoaderIcon } from "../LoaderIcon";
import { useVideoLoader } from "./useVideoLoader";

import css from "./MediaPlayer.module.scss";

interface Props {
   data: FileType;
   className?: string;
}

const mobileHelper = (fn: VoidFunction) => {
   if (window.innerWidth < 1024) {
      fn();
   }
};

export function MediaPlayer(props: Props) {
   const { data, className } = props;
   const [visible, setVisible] = React.useState(false);
   const [started, setStarted] = React.useState(false);
   const [play, setPlay] = React.useState(false);
   const rootRef = React.useRef<HTMLDivElement>(null);

   const paddingBottom = React.useMemo(() => {
      return (data.height / data.width) * 100 + "%";
   }, [data]);

   const contentType = React.useMemo(() => {
      return data.mimeType.split("/")[0] as "image" | "video";
   }, [data]);

   const videoLoader = useVideoLoader(
      contentType === "video" ? fileToServerPath(data).main : undefined
   );

   const handleEnter = () => {
      if (window.innerWidth > 1024 || contentType !== "video") {
         return;
      }
      setPlay(true);
   };

   const handleLeave = () => {
      if (window.innerWidth > 1024 || contentType !== "video") {
         return;
      }
      setPlay(false);
      setStarted(false);
   };

   React.useEffect(() => {
      const el = rootRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setVisible(true);
               videoLoader.load();

               mobileHelper(() => setPlay(true));
            } else {
               mobileHelper(() => {
                  setPlay(false);
                  setStarted(false);
               });
            }
         },
         {
            threshold: 0.25,
            rootMargin: "300px",
         }
      );

      observer.observe(el);

      return () => observer.disconnect();
   }, []);

   return (
      <div
         className={clsx(css.media, className)}
         onMouseEnter={handleEnter}
         onMouseLeave={handleLeave}
         ref={rootRef}
      >
         <div className={css.media_aspect} style={{ paddingBottom }}>
            {visible && (
               <div className={css.media_block}>
                  {contentType === "image" && (
                     <ImageApi className={css.media_content} data={data} />
                  )}
                  {contentType === "video" && (
                     <>
                        {play && videoLoader.loaded && (
                           <video
                              src={fileToServerPath(data).main}
                              className={css.media_content}
                              onTimeUpdate={(e) => {
                                 if (e.currentTarget.currentTime > 0.01 && !started) {
                                    setStarted(true);
                                 }
                              }}
                              loop
                              autoPlay
                              playsInline
                              muted
                              preload="metadata"
                           />
                        )}

                        <img
                           className={clsx(css.media_preview, play && started && css.hidden)}
                           src={fileToServerPath({ filename: data.thumbnail?.name || "" }).main}
                           alt=""
                        />
                     </>
                  )}
                  {play && !videoLoader.loaded && (
                     <div className={css.media_loader_container}>
                        <LoaderIcon className={css.media_loader} />
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
}
