"use client";

import React from "react";

import clsx from "clsx";

import { H2, H4 } from "shared/ui/ui-kit/Text";

import css from "./Questions.module.scss";

interface Prop {
   className?: string;
}

const questions = [
   {
      title: "What currency will I be billed for my membership?",
      answer: <H4>The currency for your membership billing will be in USD.</H4>,
   },
   {
      title: "Can I pay month-to-month for my membership?",
      answer: (
         <H4>
            Currently, we do not offer month-to-month payment options for our membership programme.
            Our membership plans are structured differently, to provide the most value and benefits
            to our members on an annual or quarterly basis.
         </H4>
      ),
   },
   {
      title: "Do you offer a free trial period?",
      answer: (
         <H4>
            We don&apos;t have a free trial period available right now, but we offer a variety of
            membership tiers that come with a range of benefits and features.
         </H4>
      ),
   },
   {
      title: "What is your refund policy for memberships, and can I cancel my membership anytime to receive a refund?",
      answer: (
         <>
            <H4>
               Unfortunately, we do not offer refunds for memberships. If you wish to cancel your
               membership, you can do so at any time. However, we do not want you to miss out on any
               benefits! You can still access all the perks of your membership until the end of your
               billing cycle period.
            </H4>
            <br />
            <H4>
               So, if you signed up for a yearly membership on 5 May 2023, you will be able to
               continue enjoying your membership until 5 May 2024.
            </H4>
            <br />
            <H4>To cancel your membership, simply follow the steps below:</H4>

            <ol>
               <li>
                  <H4>
                     Sign in and click on your avatar icon located at the top right of the page
                  </H4>
               </li>
               <li>
                  <H4>
                     Select <em>Membership</em> from the dropdown menu
                  </H4>
               </li>
               <li>
                  <H4>
                     Click on <em>Manage Membership</em> and then click <em>Manage</em> under{" "}
                     <em>Manage Billing</em>
                  </H4>
               </li>

               <li>
                  <H4>You will be redirected to the Stripe page</H4>
               </li>

               <li>
                  <H4>
                     Click on <em>Cancel Plan</em>
                  </H4>
               </li>
            </ol>
         </>
      ),
   },
   {
      title: "Can I upgrade or downgrade the membership tier during my current billing cycle?",
      answer: (
         <H4>
            Absolutely, you have the flexibility to upgrade or downgrade your membership tier
            whenever you want. Switching to a different tier will result in immediate changes to
            your benefits, which may include losing access to certain features or gaining access to
            new ones, depending on the tier you choose. Please review the benefits of the new tier
            carefully before confirming your change.
         </H4>
      ),
   },
   {
      title: "What happens if I don't cancel my membership before the end of my billing cycle?",
      answer: (
         <H4>
            If you don&apos;t cancel your membership before the end of your billing cycle, you will
            be charged for the next billing period.
         </H4>
      ),
   },
   {
      title: "How does Design Everywhere process my payment?",
      answer: (
         <H4>
            We handle the billing via Stripe, a secured payment processor. You can complete your
            transaction using major credit cards, including Visa, Mastercard, American Express, and
            China UnionPay.
         </H4>
      ),
   },
   {
      title: "What if I have more questions?",
      answer: (
         <H4>
            Shoot us an email at{" "}
            <a href="mailto:info@designeverywhere.co">info@designeverywhere.co</a> and we will get
            back to you as soon as possible.
         </H4>
      ),
   },
];

export const Questions: React.FC<Prop> = ({ className }) => {
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
            {questions.map((item, index) => {
               const isActive = activeIndex === index;

               return (
                  <div
                     key={item.title}
                     className={clsx(css.question, {
                        [css.active]: isActive,
                     })}
                  >
                     <button
                        className={clsx(css.p1, css.question_title)}
                        type="button"
                        onClick={() => toggleQuestion(index)}
                     >
                        <H4>{item.title}</H4>

                        <span className={css.icon}>
                           <span className={css.line} />
                           <span className={css.line} />
                        </span>
                     </button>

                     <div className={css.question_body}>
                        <div className={clsx({ [css.active_body]: isActive }, css.question_answer)}>
                           {item.answer}
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};
