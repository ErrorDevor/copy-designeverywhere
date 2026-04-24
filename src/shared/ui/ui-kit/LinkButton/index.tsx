"use client";

import React from "react";

import { useRouter } from "next/navigation";

import clsx from "clsx";

import css from "./LinkButton.module.scss";

interface Prop {
   className?: string;
   href?: string;
}

export const LinkButton: React.FC<Prop> = ({ className, href }) => {
   const router = useRouter();
   return (
      <button
         className={clsx(css.link_button, className)}
         onClick={() => {
            if (href) router.push(href);
         }}
      >
         <div className={css.link_button_icon}>
            <svg
               width="12"
               height="12"
               viewBox="0 0 12 12"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0588 5.36213L8.76563 7.65527L7.9171 6.80675L10.2102 4.5136C10.9127 3.81115 10.9127 2.67225 10.2102 1.9698C9.50779 1.26735 8.36889 1.26735 7.66644 1.9698L5.37329 4.26294L4.52476 3.41441L6.81791 1.12127C7.98899 -0.0498116 9.88769 -0.0498121 11.0588 1.12127C12.2299 2.29235 12.2299 4.19105 11.0588 5.36213ZM8.93655 3.97068L3.96826 8.93897L3.11973 8.09044L8.08802 3.12215L8.93655 3.97068ZM3.41309 4.52441L1.11994 6.81756C-0.0511393 7.98864 -0.0511385 9.88734 1.11994 11.0584C2.29102 12.2295 4.18972 12.2295 5.3608 11.0584L7.65395 8.76527L6.80542 7.91675L4.51228 10.2099C3.80982 10.9123 2.67092 10.9123 1.96847 10.2099C1.26602 9.50744 1.26602 8.36854 1.96847 7.66609L4.26161 5.37294L3.41309 4.52441Z"
               ></path>
            </svg>
         </div>
      </button>
   );
};
