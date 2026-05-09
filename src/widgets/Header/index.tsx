"use client";

import React from "react";

import clsx from "clsx";

import { UserDropdown, useAuth, usePromptsLeft } from "features/Auth";

import { NextLink } from "shared/ui/base/NextLink";
import { Button } from "shared/ui/ui-kit/Button";

import css from "./Header.module.scss";

export const Header: React.FC = () => {
   const { data } = useAuth();
   const promptsLeft = usePromptsLeft();

   return (
      <header className={css.header}>
         <nav className={css.header_inner}>
            <Button variant="light" className={css.menu_button} href="/" as="a">
               <span>→&nbsp;</span>
               Library
            </Button>
            <Button variant="light" className={css.menu_button} href="/backgrounds" as="a">
               <span>→&nbsp;</span>
               Backgrounds
            </Button>
         </nav>

         <NextLink className={css.header_logo} href="/">
            <img src="/images/lafys.svg" />
         </NextLink>

         <div className={css.header_left}>
            <p
               className={css.promptsLeft}
               style={{ opacity: typeof promptsLeft.data?.promptsLeft !== "undefined" ? 1 : 0 }}
            >
               Prompts Left: {promptsLeft.data?.promptsLeft}
            </p>
            <button className={css.burger_button}>i</button>
            <div className={css.header_left_inner}>
               {!data && (
                  <Button variant="light" className={css.login_button} href="/login" as="a">
                     Log In
                  </Button>
               )}
               <Button variant="black" className={css.join_button} href="/pricing" as="a">
                  Join Club
               </Button>
               {data && <UserDropdown />}
            </div>
         </div>
      </header>
   );
};
