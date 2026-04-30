"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { setAccessToken, useAuth } from "features/Auth";
import { authApi } from "features/Auth/api/authApi";

import { Button } from "shared/ui/ui-kit/Button";
import { Input } from "shared/ui/ui-kit/Input";

import css from "./SignupForm.module.scss";

export const SignupForm: React.FC = () => {
   const router = useRouter();

   const [error, setError] = React.useState<string | null>(null);
   const auth = useAuth();

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
         confirmPassword: "",
      },
      validateOnBlur: true,
      validationSchema: yup.object({
         email: yup.string().trim().required("Email is required").email("Invalid email address"),
         password: yup.string().required("Password is required"),
         confirmPassword: yup
            .string()
            .required("Confirm password is required")
            .oneOf([yup.ref("password")], "Passwords must match"),
      }),
      async onSubmit(values, { setSubmitting }) {
         try {
            const response = await authApi.signup({
               email: values.email,
               password: values.password,
            });

            if (response.token && response.user) {
               auth.softLogin(response.user);
               setAccessToken(response.token);
               router.push("/");
            }
         } catch (error: any) {
            const errs = error?.response?.data?.errors?.[0];

            if (errs?.message.includes("email")) {
               setError("Email already exist");
            } else {
               setError("Something went wrong");
            }
         } finally {
            setSubmitting(false);
         }
      },
   });

   return (
      <FormikProvider value={formik}>
         <form onSubmit={formik.handleSubmit} className={css.form}>
            <Input name="email" label="Email*" placeholder="Enter email" />
            <Input name="password" label="Password*" placeholder="Enter password" type="password" />
            <Input
               name="confirmPassword"
               label="Confirm password*"
               placeholder="Confirm password"
               type="password"
            />
            {error && <p className={css.error}>{error}</p>}
            <Button
               className={css.form_submitBtn}
               disabled={formik.isSubmitting}
               variant="black"
               type="submit"
            >
               Sign Up
            </Button>
            <p className={css.form_notMember}>Have an account?</p>
            <a className={css.form_joinBtn} href="/login">
               Login →
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
