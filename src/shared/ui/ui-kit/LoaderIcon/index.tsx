import React from "react";

import clsx from "clsx";

import css from "./LoaderIcon.module.scss";

interface Props {
   className?: string;
}

export const LoaderIcon: React.FC<Props> = (props) => {
   return <span className={clsx(css.loader, props.className)} />;
};
