import React from "react";

import clsx from "clsx";

import css from "./PremiumButton.module.scss";

interface Props {
   href?: string;
   className?: string;
}

export const PremiumButton: React.FC<Props> = (props) => {
   return (
      <a href={props.href} className={clsx(css.premium, props.className)}>
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
   );
};
