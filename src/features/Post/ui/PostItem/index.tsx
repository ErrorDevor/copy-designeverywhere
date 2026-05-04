import React from "react";

import { Post } from "../../api/posts.types";
import clsx from "clsx";

import { fileToServerPath } from "shared/api/lib/fileToServerPath";
import { ImageApi } from "shared/api/ui/ImageApi";
import { NextLink } from "shared/ui/base/NextLink";
import { Button } from "shared/ui/ui-kit/Button";
import { CopyPrompt } from "shared/ui/ui-kit/CopyPrompt";
import { LinkButton } from "shared/ui/ui-kit/LinkButton";
import { H4, H5, P } from "shared/ui/ui-kit/Text";

import css from "./PostItem.module.scss";

interface Props {
   data: Post;
   onSaveEmail?(postId: string): void;
}

export const PostItem: React.FC<Props> = (props) => {
   const { data, onSaveEmail } = props;
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

            <div className={css.thumbnail_controls}>
               {(data.plan === "free" || data.plan === "coming-soon") && (
                  <CopyPrompt
                     prompt={data.prompt}
                     onSave={
                        data.plan === "coming-soon" ? onSaveEmail?.bind(null, data.id) : undefined
                     }
                  >
                     Copy Prompt
                  </CopyPrompt>
               )}
               {data.plan === "premium" && (
                  <a href="/pricing" className={css.thumbnail_premium}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                     </svg>
                     Premium
                  </a>
               )}
               {data.plan === "coming-soon" && <p className={css.comingSoon}>Coming Soon</p>}
            </div>
         </div>

         {data.createdBy && (
            <div className={css.created}>
               <div className={css.created_avatar}>
                  {data.createdBy.avatar && (
                     <ImageApi className={css.created_avatar_img} data={data.createdBy.avatar} />
                  )}
               </div>
               <p className={css.created_name}>{data.createdBy.name}</p>
            </div>
         )}

         <div className={css.thumbnail_title}>
            <NextLink className={css.thumbnail_number}>
               <p>
                  {(data.aiTool || []).map((item) => (
                     <span key={item.name}>{item.name}</span>
                  ))}
               </p>
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
               {data.tagsList.slice(0, showAllTags ? 999 : 4).map((tag) => (
                  <li key={tag.id} className={css.thumbnail_tags_item}>
                     <P>{tag.value}</P>
                  </li>
               ))}

               {!showAllTags && data.tagsList.length > 4 && (
                  <button className={css.more_button} onClick={() => setShowAllTags(true)}>
                     ...
                  </button>
               )}
            </ul>
         </div>
      </article>
   );
};
