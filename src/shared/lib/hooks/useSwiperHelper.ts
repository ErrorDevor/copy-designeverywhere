"use client";

import React from "react";

import SwiperCore from "swiper";

export function useSwiperHelper() {
  const [swiperCore, setSwiperCore] = React.useState<SwiperCore | null>(null);
  const [updateCount, update] = React.useState(0);

  const updater = () => update((prev) => prev + 1);

  const isBeginning = React.useMemo(
    () => swiperCore?.isBeginning || false,
    [swiperCore, updateCount]
  );

  const isEnd = React.useMemo(
    () => swiperCore?.isEnd || false,
    [swiperCore, updateCount]
  );

  const slidePrev = () => {
    updater();
    swiperCore?.slidePrev();
  };

  const slideNext = () => {
    updater();
    swiperCore?.slideNext();
  };

  return {
    swiperCore,
    setSwiperCore,
    updater,
    isBeginning,
    isEnd,
    slidePrev,
    slideNext,
  };
}
