"use client";

import React from "react";

import { fileToServerPath } from "../lib/fileToServerPath";

import { ImageType } from "../types";

interface Props {
   data: ImageType;
   className?: string;
}

export function ImageApi(props: Props) {
   const { data, className } = props;

   const urls = React.useMemo(() => fileToServerPath(data), [data]);

   return (
      <picture className={className}>
         {urls.webp && <source srcSet={urls.webp} type="image/webp" />}
         <img className={className} src={urls.main} alt={data.alt ?? undefined} />
      </picture>
   );
}
