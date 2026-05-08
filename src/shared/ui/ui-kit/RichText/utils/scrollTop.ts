import gsap from "gsap";

type Options = Partial<gsap.TweenVars>;

export function scrollTop(y = 0, options: Options = {}) {
  gsap.to(window, {
    ...Object.assign(
      {
        duration: 1.2,
        ease: "power2.inOut",
      },
      options
    ),
    scrollTo: { y },
  });
}
