"use client";

import React from "react";
import clsx from "clsx";
import { NextLink } from "shared/ui/base/NextLink";
import css from "./Header.module.scss";
import { Button } from "shared/ui/ui-kit/Button";
import { H4 } from "shared/ui/ui-kit/Text";

export const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <nav className={css.header_inner}>
        <Button variant="light" className={css.menu_button}>
          <div className={css.circle} />
          Library
        </Button>
        <Button variant="light" className={css.menu_button}>
          <div className={css.circle} />
          Backgrounds
        </Button>
      </nav>

      <NextLink className={css.header_logo} href="/">
        <img src="/images/lafys.svg" />
      </NextLink>

      <div className={css.header_left}>
        <button className={css.burger_button}>i</button>
        <div className={css.header_left_inner}>
          <Button variant="black" className={css.join_button}>
            Join
          </Button>
        </div>
      </div>
    </header>
  );
};
