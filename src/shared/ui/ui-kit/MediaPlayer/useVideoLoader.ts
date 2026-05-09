"use client";

import * as React from "react";

type Status = "idle" | "loading" | "loaded" | "error";

export function useVideoLoader(src?: string) {
   const [status, setStatus] = React.useState<Status>("idle");

   const load = React.useCallback(() => {
      if (!src) return;

      if (status === "loading" || status === "loaded") {
         return;
      }

      setStatus("loading");

      const video = document.createElement("video");

      video.preload = "metadata";
      video.src = src;

      const onLoaded = () => {
         setStatus("loaded");
      };

      const onError = () => {
         setStatus("error");
      };

      video.addEventListener("loadedmetadata", onLoaded, { once: true });

      video.addEventListener("error", onError, { once: true });

      video.load();
   }, [src, status]);

   return {
      load,
      status,
      loaded: status === "loaded",
   };
}
