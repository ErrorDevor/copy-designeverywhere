"use client";

import React from "react";
import Image from "shared/ui/base/Image";
import clsx from "clsx";
import { H2 } from "shared/ui/ui-kit/Text";
import css from "./Marquee.module.scss";

interface Prop {
  className?: string;
}

const marqueeItems = [
  {
    type: "text",
    value: "BECOME A MEMBER",
  },
  {
    type: "image",
    src: "/images/2dac58.webp",
    alt: "Design Everywhere",
  },
  {
    type: "text",
    value: "BECOME A MEMBER",
  },
  {
    type: "image",
    src: "/images/abaac4.webp",
    alt: "Design Everywhere",
  },
] as const;

export const Marquee: React.FC<Prop> = ({ className }) => {
  return (
    <section className={clsx(css.marquee, className)}>
      <div className={css.inner_ticker}>
        {[0, 1].map((setIndex) => (
          <div className={css.ticker_set} key={setIndex}>
            {marqueeItems.map((item, index) => {
              if (item.type === "text") {
                return (
                  <H2 className={css.marquee_text} key={`${setIndex}-${index}`}>
                    {item.value}
                  </H2>
                );
              }

              return (
                <div
                  className={css.marquee_image}
                  key={`${setIndex}-${index}`}
                >
                  <Image.Default
                    src={item.src}
                    width={600}
                    height={600}
                    alt={item.alt}
                    sizes="(max-width: 340px) 65px, (max-width: 640px) 60px, (max-width: 768px) 72px, (max-width: 1024px) 64px, (max-width: 1280px) 80px, (max-width: 1536px) 97px, 109px"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};