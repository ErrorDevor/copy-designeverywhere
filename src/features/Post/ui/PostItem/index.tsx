import React from "react";

import { Post } from "../../api/posts.types";
import clsx from "clsx";

import { fileToServerPath } from "shared/api/lib/fileToServerPath";
import { ImageApi } from "shared/api/ui/ImageApi";
import { NextLink } from "shared/ui/base/NextLink";
import { Button } from "shared/ui/ui-kit/Button";
import { LinkButton } from "shared/ui/ui-kit/LinkButton";
import { H4, H5, P } from "shared/ui/ui-kit/Text";

import css from "./PostItem.module.scss";
import { CopyPrompt } from "shared/ui/ui-kit/CopyPrompt";

interface Props {
   data: Post;
}

export const PostItem: React.FC<Props> = (props) => {
   const { data } = props;
   const [showAllTags, setShowAllTags] = React.useState(false);

   const contentType = React.useMemo(() => {
      return data.preview.mimeType.split("/")[0] as "image" | "video";
   }, [data.preview]);

   return (
      <article className={clsx(css.thumbnail, css.thumbnail_grid)}>
         <div className={css.thumbnail_image}>
            {contentType === "image" && (
               <ImageApi className={css.thumbnail_picture} data={data.preview} />
            )}
            {contentType === "video" && (
               <video
                  src={fileToServerPath(data.preview).main}
                  className={css.thumbnail_video}
                  loop
                  autoPlay
                  playsInline
                  muted
                  preload="metadata"
               />
            )}

            <CopyPrompt prompt={data.prompt}>
               Copy Prompt
            </CopyPrompt>
         </div>

         <div className={css.thumbnail_title}>
            <NextLink className={css.thumbnail_number}>
               <span className={css.square_unicode}>■</span>
               <p>{data.aiTool?.name}</p>
            </NextLink>

            <div className={css.thumbnail_title_wrap}>
               <NextLink>
                  <H4>{data.title}</H4>
               </NextLink>

               <NextLink>
                  <H5>{data.sectionType || <>&nbsp;</>}</H5>
               </NextLink>
            </div>
         </div>

         <div className={css.thumbnail_tags}>
            <ul className={css.thumbnail_tags_wrapper}>
               {/* <Button variant="light" className={css.location_button}>
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10">
                     <path d="M4 0C1.79 0 0 1.746 0 3.9c0 2.406 2.333 4.855 3.435 5.88a.834.834 0 0 0 1.13 0C5.668 8.755 8 6.306 8 3.9 8.002 1.747 6.21 0 4 0Zm0 5.493c-.857 0-1.555-.68-1.555-1.517 0-.837.698-1.517 1.556-1.517.858 0 1.555.68 1.555 1.517 0 .837-.697 1.517-1.555 1.517Z"></path>
                  </svg>
                  {item.location}
               </Button> */}

               {data.tags.slice(0, showAllTags ? 999 : 4).map((tag) => (
                  <li key={tag.id} className={css.thumbnail_tags_item}>
                     <P>{tag.value}</P>
                  </li>
               ))}

               {!showAllTags && data.tags.length > 4 && (
                  <button
                     className={css.more_button}
                     onClick={() => setShowAllTags(true)}
                  >
                     ...
                  </button>
               )}
            </ul>
         </div>
      </article>
   );
};
