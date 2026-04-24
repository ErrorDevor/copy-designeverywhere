import React, { JSX } from "react";

import clsx from "clsx";

import css from "./Text.module.scss";

type BaseProps<T extends keyof JSX.IntrinsicElements> =
  React.ComponentPropsWithoutRef<T>;

function createTypography<T extends keyof JSX.IntrinsicElements>(
  tag: T,
  baseClass: string
) {
  return React.forwardRef<HTMLElement, BaseProps<T>>(
    ({ className, ...props }, ref) =>
      React.createElement(tag, {
        ref,
        className: clsx(baseClass, className),
        ...props,
      })
  );
}

export const H1 = createTypography("h1", css.h1);
export const H2 = createTypography("h2", css.h2);
export const H3 = createTypography("h3", css.h3);
export const H4 = createTypography("h4", css.h4);
export const H5 = createTypography("h5", css.h5);
export const H6 = createTypography("h6", css.h6);
export const P = createTypography("p", css.p);
