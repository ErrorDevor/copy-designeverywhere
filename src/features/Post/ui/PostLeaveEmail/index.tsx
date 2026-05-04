"use client";

import React from "react";

import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { postApi } from "features/Post/api/postApi";

import { Button } from "shared/ui/ui-kit/Button";
import { Input } from "shared/ui/ui-kit/Input";
import { Modal } from "shared/ui/ui-kit/Modal";

import css from "./PostLeaveEmail.module.scss";

interface Props {
   active: boolean;
   onClose: VoidFunction;
   postId: string;
}

const PostEmail = ({ postId, onClose }: Omit<Props, "active">) => {
   const formik = useFormik({
      initialValues: {
         email: "",
      },
      validationSchema: yup.object({
         email: yup.string().trim().required("Email is required"),
      }),
      async onSubmit(values, { setSubmitting, setFieldError }) {
         try {
            const response = await postApi.leaveEmail({
               email: values.email,
               postId,
            });

            onClose();
         } finally {
            setSubmitting(false);
         }
      },
   });
   return (
      <div className={css.modal}>
         <p className={css.modal_title}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path d="M162.773 86.827c-4.506-10.886.665-23.364 11.552-27.871 10.886-4.506 23.364.665 27.871 11.552 4.494 10.857-.637 23.303-11.476 27.839a22.825 22.825 0 0 1-8.32 1.493 21.335 21.335 0 0 1-19.627-13.013zm-42.666 54.826a21.333 21.333 0 0 0 14.933-6.4c8.356-8.306 8.396-21.814.09-30.17s-21.814-8.396-30.17-.09-8.396 21.814-.09 30.17l.09.09a21.331 21.331 0 0 0 15.36 6.4zM70.4 202.24a21.333 21.333 0 0 0 8.107 1.493 21.335 21.335 0 0 0 19.84-13.013c4.506-10.886-.665-23.364-11.552-27.871-10.886-4.506-23.364.665-27.871 11.552-4.494 10.856.637 23.303 11.476 27.839zM42.667 256c0 117.821 95.513 213.333 213.333 213.333S469.333 373.821 469.333 256 373.821 42.667 256 42.667c-11.682.293-21.047 10.038-20.912 21.584.133 11.36 9.42 20.796 20.912 21.083 94.257 0 170.667 76.41 170.667 170.667S350.257 426.667 256 426.667 85.333 350.257 85.333 256c-.129-11.615-9.72-21.099-21.334-21.099-11.614.001-21.204 9.485-21.332 21.099zm196.906 13.653 55.04 65.493a21.334 21.334 0 0 0 16.213 7.467 21.327 21.327 0 0 0 13.653-4.907c9.07-7.52 10.327-20.969 2.807-30.039l-.034-.041-49.92-59.307v-98.987c0-11.782-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333V256a20.414 20.414 0 0 0 1.174 7.214 20.42 20.42 0 0 0 3.733 6.439z" />
            </svg>
            The prompt is still in progress
         </p>
         <p className={css.modal_text}>
            Enter your email and we’ll send you the finished prompt as soon as it’s ready.
         </p>

         <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className={css.form}>
               <Input name="email" label="Email*" placeholder="Enter email" />
               <Button
                  className={css.form_submitBtn}
                  disabled={formik.isSubmitting}
                  variant="black"
                  type="submit"
               >
                  Get the prompt first
               </Button>
            </form>
         </FormikProvider>
      </div>
   );
};

export const PostLeaveEmail: React.FC<Props> = (props) => {
   const { active, onClose, postId } = props;

   return (
      <Modal active={active} onClose={onClose}>
         <PostEmail postId={postId} onClose={onClose} />
      </Modal>
   );
};
