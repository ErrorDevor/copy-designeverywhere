"use client";

import React from "react";

import clsx from "clsx";

import { usePricingPage } from "features/Pricing";

import { RichText } from "shared/ui/ui-kit/RichText";
import { H2, H4 } from "shared/ui/ui-kit/Text";

import css from "./Questions.module.scss";

interface Prop {
   className?: string;
}

export const Questions: React.FC<Prop> = ({ className }) => {
   const { faqs } = usePricingPage();
   const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

   const toggleQuestion = (index: number) => {
      setActiveIndex((current) => (current === index ? null : index));
   };

   return (
      <section className={clsx(css.questions, className)}>
         <div className={css.faq_header}>
            <H2>Questions?</H2>
            <H4 className={css.p1}>We&apos;ve got answers.</H4>
         </div>

         <div className={css.faq_contents}>
            {faqs.map((item, index) => {
               const isActive = activeIndex === index;

               return (
                  <div
                     key={item.id}
                     className={clsx(css.question, {
                        [css.active]: isActive,
                     })}
                  >
                     <button
                        className={clsx(css.p1, css.question_title)}
                        type="button"
                        onClick={() => toggleQuestion(index)}
                     >
                        <H4>{item.question}</H4>

                        <span className={css.icon}>
                           <span className={css.line} />
                           <span className={css.line} />
                        </span>
                     </button>

                     <div className={css.question_body}>
                        <div className={clsx({ [css.active_body]: isActive }, css.question_answer)}>
                           <RichText data={item.answer} />
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};
