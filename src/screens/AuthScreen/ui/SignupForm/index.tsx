"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { SessionRegisterCompletedModal, setAccessToken, useAuth } from "features/Auth";
import { authApi } from "features/Auth/api/authApi";
import { useAuthPaymentSession } from "features/Auth/model/useAuthPaymentSession";
import { usePlanBySubscriptionId } from "features/Pricing";

import { Button } from "shared/ui/ui-kit/Button";
import { Input } from "shared/ui/ui-kit/Input";

import css from "./SignupForm.module.scss";

export const SignupForm: React.FC = () => {
   const paymentSession = useAuthPaymentSession();
   const plan = usePlanBySubscriptionId(paymentSession?.subscriptionId);
   const router = useRouter();
   const [registered, setRegistered] = React.useState(false);
   const [activeModal, setActiveModal] = React.useState(false);

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
               sessionId: paymentSession?.sessionId,
            });

            if (response.token && response.user) {
               auth.softLogin(response.user);
               setAccessToken(response.token);
               if (!paymentSession) {
                  router.push("/");
               } else {
                  setRegistered(true);
               }
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

   React.useEffect(() => {
      if (paymentSession?.activated) {
         const timeout = setTimeout(() => {
            setActiveModal(true);
         }, 250);

         return () => clearTimeout(timeout);
      }
   }, []);

   if (registered) {
      return (
         <div className={`${css.payment} ${css.registerCompleted}`}>
            <svg
               className={css.payment_icon}
               viewBox="0 0 512 512"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g clipPath="url(#clip0_2028_9171)">
                  <path
                     d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
                     fill="#39B54A"
                  />
                  <path
                     d="M214.8 365.2L114 265.6L150.4 228.4L214.8 292L361.6 146.8L398 183.6L214.8 365.2Z"
                     fill="white"
                  />
               </g>
               <defs>
                  <clipPath id="clip0_2028_9171">
                     <rect width="512" height="512" fill="white" />
                  </clipPath>
               </defs>
            </svg>
            <p className={css.payment_title}>Thank You for Your Purchase!</p>
            <p className={css.payment_text}>
               Your {plan?.planType} {plan?.mode === "payment" ? "lifetime" : "monthly"} plan is
               active and all paid prompt are now unlocked
            </p>
            <Button className={css.payment_button} variant="black" href="/" as="a">
               Explore Prompts →
            </Button>
         </div>
      );
   }

   return (
      <FormikProvider value={formik}>
         {paymentSession && (
            <div className={css.payment}>
               <svg
                  className={css.payment_icon}
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g clipPath="url(#clip0_2028_9171)">
                     <path
                        d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
                        fill="#39B54A"
                     />
                     <path
                        d="M214.8 365.2L114 265.6L150.4 228.4L214.8 292L361.6 146.8L398 183.6L214.8 365.2Z"
                        fill="white"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_2028_9171">
                        <rect width="512" height="512" fill="white" />
                     </clipPath>
                  </defs>
               </svg>
               <p className={css.payment_title}>Payment successful</p>
               <p className={css.payment_text}>Please create an account to activate your access</p>
            </div>
         )}
         <form onSubmit={formik.handleSubmit} className={css.form}>
            <Input
               name="email"
               label="Email*"
               placeholder="Enter email"
               disabled={paymentSession?.activated}
            />
            <Input
               name="password"
               label="Password*"
               placeholder="Enter password"
               type="password"
               disabled={paymentSession?.activated}
            />
            <Input
               name="confirmPassword"
               label="Confirm password*"
               placeholder="Confirm password"
               type="password"
               disabled={paymentSession?.activated}
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
         {paymentSession && (
            <SessionRegisterCompletedModal active={activeModal} onClose={() => null} />
         )}
      </FormikProvider>
   );
};
