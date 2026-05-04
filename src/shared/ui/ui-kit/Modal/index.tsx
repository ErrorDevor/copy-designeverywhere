"use client";

import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import clsx from "clsx";

import css from "./Modal.module.scss";

interface Props {
  active: boolean;
  children: React.ReactNode;
  onClose(): void;
  className?: string;
  timeout?: number;
  transition?: string | CSSTransitionClassNames;
  mountSelector?: string;
}

export const Modal: React.FC<Props> = (props) => {
  const {
    active,
    onClose,
    children,
    className,
    timeout = 350,
    transition = css,
    mountSelector,
  } = props;

  const nodeRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (ev.currentTarget === ev.target) {
      onClose();
    }
  };

  const element = (
    <CSSTransition
      classNames={transition}
      in={active}
      timeout={timeout}
      nodeRef={nodeRef}
      unmountOnExit
      mountOnEnter
    >
      <div className={clsx(css.background, className)} onClick={handleClick} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );

  if (!mounted) {
    return null;
  }

  const mountNode = mountSelector ? document.querySelector(mountSelector) : document.body;

  if (!mountNode) {
    return null;
  }

  return createPortal(element, mountNode);
};
