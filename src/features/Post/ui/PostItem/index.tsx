import React from "react";

import { useRouter } from "next/navigation";

import { Post } from "../../api/posts.types";
import clsx from "clsx";

import { ImageApi } from "shared/api/ui/ImageApi";
import { NextLink } from "shared/ui/base/NextLink";
import { CopyPrompt } from "shared/ui/ui-kit/CopyPrompt";
import { MediaPlayer } from "shared/ui/ui-kit/MediaPlayer";
import { PremiumButton } from "shared/ui/ui-kit/PremiumButton";
import { H4, H5, P } from "shared/ui/ui-kit/Text";

import css from "./PostItem.module.scss";

interface Props {
   data: Post;
   isPromptAccess?: boolean;
   isAuthenticated?: boolean;
   isAvailableCopy?: boolean;
   onSaveEmail?(postId: string): void;
   onCopiedPrompt?: VoidFunction;
   onOpenLimitModal?: VoidFunction;
}

export const PostItem: React.FC<Props> = (props) => {
   const { data, isPromptAccess, isAuthenticated, onCopiedPrompt, isAvailableCopy, onOpenLimitModal } = props;
   const [showAllTags, setShowAllTags] = React.useState(false);
   const router = useRouter();

   const isLockedPrompt = React.useMemo(() => {
      if ((data.plan === "premium" && !isPromptAccess) || data.plan === "coming-soon") {
         return true;
      }

      return false;
   }, [isPromptAccess, data]);

   const handleCopyDisabled = () => {
      if (!isAuthenticated) {
         router.push("/signup");
      } else {
         onOpenLimitModal?.();
      }
   };

   return (
      <article className={clsx(css.thumbnail, css.thumbnail_grid)}>
         <div className={css.thumbnail_image}>
            <MediaPlayer data={data.preview} />

            <div className={css.thumbnail_controls}>
               {!isLockedPrompt && (
                  <CopyPrompt
                     postId={data.id}
                     onCopied={onCopiedPrompt}
                     active={isAvailableCopy}
                     onCopyDisabled={handleCopyDisabled}
                  />
               )}
               {data.plan === "premium" && (
                  <PremiumButton href={isLockedPrompt ? "/pricing" : undefined} />
               )}
               {data.plan === "coming-soon" && (
                  <>
                     {isAuthenticated ? (
                        <p className={css.comingSoon}>Coming Soon</p>
                     ) : (
                        <PremiumButton href="/pricing" />
                     )}
                  </>
               )}
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
               {(data.tagsList || []).slice(0, showAllTags ? 999 : 4).map((tag) => (
                  <li key={tag.id} className={css.thumbnail_tags_item}>
                     <P>{tag.value}</P>
                  </li>
               ))}

               {!showAllTags && (data.tagsList?.length || 0) > 4 && (
                  <button className={css.more_button} onClick={() => setShowAllTags(true)}>
                     ...
                  </button>
               )}
            </ul>
         </div>
      </article>
   );
};
