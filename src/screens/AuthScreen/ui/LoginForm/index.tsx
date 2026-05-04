"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { setAccessToken, useAuth } from "features/Auth";
import { authApi } from "features/Auth/api/authApi";

import { Button } from "shared/ui/ui-kit/Button";
import { Input } from "shared/ui/ui-kit/Input";

import css from "./LoginForm.module.scss";

export const LoginForm: React.FC = () => {
   const router = useRouter();
   const auth = useAuth();

   const [error, setError] = React.useState<string | null>(null);

   const formik = useFormik({
      initialValues: {
         login: "",
         password: "",
      },
      validationSchema: yup.object({
         login: yup.string().trim().required("Email is required"),
         password: yup.string().required("Password is required"),
      }),
      async onSubmit(values, { setSubmitting, setFieldError }) {
         try {
            const response = await authApi.login({
               email: values.login,
               password: values.password,
            });

            if (response.token && response.user) {
               auth.softLogin(response.user);
               setAccessToken(response.token);
               router.push("/");
            }
         } catch (error: any) {
            setError("Invalid email or password");
         } finally {
            setSubmitting(false);
         }
      },
   });

   return (
      <FormikProvider value={formik}>
         <form onSubmit={formik.handleSubmit} className={css.form}>
            <Input name="login" label="Email*" placeholder="Enter email" />
            <Input name="password" label="Password*" placeholder="Enter password" type="password" />
            {error && <p className={css.error}>{error}</p>}
            <Button
               className={css.form_submitBtn}
               disabled={formik.isSubmitting}
               variant="black"
               type="submit"
            >
               Login
            </Button>
            <p className={css.form_notMember}>Not a member yet?</p>
            <a className={css.form_joinBtn} href="/signup">
               Join →
            </a>
            <p className={css.form_terms}>
               By continuing, you acknowledge that you have read and agree to Design
               Everywhere&apos;s{" "}
               <a href="/terms-of-use" target="_blank">
                  Terms of Use
               </a>{" "}
               and{" "}
               <a href="/privacy" target="_blank">
                  Privacy Policy
               </a>
               .
            </p>
         </form>
      </FormikProvider>
   );
};
