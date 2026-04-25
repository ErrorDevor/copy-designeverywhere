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
          Index
        </Button>
        <Button variant="light" className={css.menu_button}>
          <div className={css.circle} />
          Categories
        </Button>
      </nav>

      <NextLink className={css.header_logo} href="/">
        <H4>DESIGN EVERYWHERE</H4>
      </NextLink>

      <div className={css.header_left}>
        <button className={css.burger_button}>i</button>
        <Button variant="light" className={css.search_button}>
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.222" cy="6.222" r="5.722"></circle>
            <path d="m10.135 10.313 5.333 5.333"></path>
          </svg>
        </Button>
        <div className={css.header_left_inner}>
          <Button variant="light" className={css.login_button}>
            Log In
          </Button>
          <Button variant="black" className={css.join_button}>
            Join
          </Button>
        </div>
      </div>
    </header>
  );
};
