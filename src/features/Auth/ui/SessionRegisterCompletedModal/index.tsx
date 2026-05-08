"use client";

import React from "react";

import { Button } from "shared/ui/ui-kit/Button";
import { Modal } from "shared/ui/ui-kit/Modal";

import css from "./SessionRegisterCompletedModal.module.scss";

interface Props {
   active: boolean;
   onClose: VoidFunction;
}

export const SessionRegisterCompletedModal: React.FC<Props> = (props) => {
   const { active, onClose } = props;

   return (
      <Modal active={active} onClose={onClose}>
         <div className={css.modal}>
            <p className={css.modal_title}>
               <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2034_9176)">
                     <path
                        d="M256 0C114.497 0 0 114.507 0 256C0 397.503 114.507 512 256 512C397.503 512 512 397.493 512 256C512 114.497 397.493 0 256 0ZM256 472C136.607 472 40 375.385 40 256C40 136.607 136.615 40 256 40C375.393 40 472 136.615 472 256C472 375.393 375.385 472 256 472Z"
                        fill="black"
                     />
                     <path
                        d="M256 128.877C244.954 128.877 236 137.831 236 148.877V277.67C236 288.716 244.954 297.67 256 297.67C267.046 297.67 276 288.716 276 277.67V148.877C276 137.831 267.046 128.877 256 128.877Z"
                        fill="black"
                     />
                     <path
                        d="M256 376.16C270.912 376.16 283 364.072 283 349.16C283 334.248 270.912 322.16 256 322.16C241.088 322.16 229 334.248 229 349.16C229 364.072 241.088 376.16 256 376.16Z"
                        fill="black"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_2034_9176">
                        <rect width="512" height="512" fill="white" />
                     </clipPath>
                  </defs>
               </svg>
               This Link Has Expired
            </p>
            <p className={css.modal_text}>
               This activation link has already been used.
               <br />
               Sign in to continue with your existing account.
            </p>
            <Button className={css.modal_btn} variant="black" href="/login" as="a">
               Login&nbsp;&nbsp;→
            </Button>
         </div>
      </Modal>
   );
};
