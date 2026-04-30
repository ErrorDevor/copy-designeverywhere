"use client";

import React, { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";
import { useField } from "formik";

import css from "./Input.module.scss";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
   label: string;
   name: string;
   helperText?: string;
}

export const Input: React.FC<InputProps> = (props) => {
   const { helperText, label, ...inputProps } = props;

   const [field, meta] = useField({ name: props.name });

   const isError = !!meta.error && meta.touched;

   return (
      <div className={clsx(css.input, isError && css.error)}>
         <div className={css.input_container}>
            <div className={css.input_field}>
               <label className={css.input_label} htmlFor={field.name}>
                  {label}
               </label>
               <input
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  id={field.name}
                  className={clsx(css.input_input, inputProps.className)}
                  {...inputProps}
               />
            </div>
         </div>
         {isError && <p className={css.input_error}>{meta.error}</p>}
      </div>
   );
};
