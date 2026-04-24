"use client";

import React from "react";

import clsx from "clsx";

import { Button } from "shared/ui/ui-kit/Button";
import { H2, H4, P } from "shared/ui/ui-kit/Text";

import css from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const now = new Date();

const formatted = now.toLocaleString("en-GB", {
   weekday: "long",
   day: "2-digit",
   month: "long",
   year: "numeric",
   hour: "numeric",
   minute: "2-digit",
   hour12: true,
});

   return (
      <footer className={css.footer}>
         <div className={css.footer_top}>
            <div className={css.footer_newsletter}>
               <H2>Newsletter</H2>

               <form className={css.newsletter}>
                  <H4>Subscribe to our newsletter for occasional updates 🛸</H4>

                  <input type="email" placeholder="Enter email" className={css.newsletter_input} />

                  <div className={css.newsletter_bottom}>
                     <P>
                        By registering, you agree to the Terms of Use and acknowledge that you have
                        read our Privacy Policy.
                     </P>

                     <Button variant="light" className={css.more_button}>
                        Sign up
                        <span>→</span>
                     </Button>
                  </div>
               </form>
            </div>

            <div className={clsx(css.footer_links, css.p4)}>
               <div className={css.footer_links_wrap}>
                  <a href="/about">About</a>
                  <a href="/categories">Categories</a>
                  <a href="/contact">Contact</a>
                  <a href="/submissions">Submissions</a>
                  <a href="/thankyou">THANK YOU</a>
                  <a href="/club">Join The Club</a>
               </div>

               <div className={css.footer_social_links}>
                  <a href="https://facebook.com/dsgnevrywhr/" target="_blank" aria-label="Facebook">
                     <svg viewBox="0 0 6 12">
                        <path d="M3.914 12V6.74h1.613l.304-2.17H3.914V3.162c0-.59.264-1.179 1.124-1.179h.872V.143S5.117 0 4.363 0C2.79 0 1.76 1.035 1.76 2.917V4.57H0v2.17h1.759v5.246h2.155V12Z" />
                     </svg>
                  </a>

                  <a
                     href="https://www.instagram.com/designeverywhere_"
                     target="_blank"
                     aria-label="Instagram"
                  >
                     <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                        <path
                           d="M5.858 1.042h2.4c.564 0 .846.139 1.058.209.282.138.494.208.706.416.211.209.353.417.423.695.07.208.141.486.212 1.042v4.724c0 .556-.141.834-.212 1.042-.141.278-.212.487-.423.695-.212.209-.424.348-.706.417-.212.07-.494.139-1.059.208H3.458c-.564 0-.847-.139-1.058-.208-.283-.139-.494-.208-.706-.417-.212-.208-.353-.417-.424-.695-.07-.208-.14-.486-.211-1.042V3.404c0-.556.14-.833.211-1.042.142-.278.212-.486.424-.695.212-.208.423-.347.706-.416.211-.07.494-.14 1.058-.209h2.4Zm0-1.042h-2.4a3.59 3.59 0 0 0-1.411.278A3.086 3.086 0 0 0 .988.973c-.353.347-.494.625-.706 1.042-.14.347-.211.764-.282 1.39V8.127c0 .626.141 1.042.282 1.39.141.347.353.694.706 1.042.353.347.635.486 1.059.695.353.139.776.208 1.411.277h4.8c.635 0 1.058-.138 1.41-.277a3.085 3.085 0 0 0 1.06-.695c.352-.348.494-.625.705-1.042.141-.348.212-.764.283-1.39V3.404a3.44 3.44 0 0 0-.283-1.39 3.029 3.029 0 0 0-.706-1.041C10.375.625 10.092.486 9.67.278 9.316.138 8.893.069 8.257 0h-2.4Z"
                           fill="#fff"
                        ></path>
                        <path d="M5.858 2.779c-1.694 0-3.035 1.32-3.035 2.987 0 1.668 1.341 2.988 3.035 2.988 1.694 0 3.035-1.32 3.035-2.988 0-1.667-1.341-2.987-3.035-2.987Zm0 4.932c-1.059 0-1.976-.833-1.976-1.945 0-1.042.847-1.945 1.976-1.945 1.058 0 1.976.834 1.976 1.945 0 1.042-.918 1.946-1.976 1.946ZM8.963 3.404a.7.7 0 0 0 .706-.695.7.7 0 0 0-.706-.694.7.7 0 0 0-.706.694.7.7 0 0 0 .706.695Z"></path>
                     </svg>
                  </a>

                  <a
                     href="https://www.pinterest.com/design_everywhere/"
                     target="_blank"
                     aria-label="Pinterest"
                  >
                     <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12">
                        <path d="M6.252 0C2.813 0 0 2.77 0 6.154c0 2.538 1.563 4.692 3.75 5.615 0-.461 0-.923.08-1.384C3.984 9.846 4.61 7 4.61 7s-.234-.385-.234-1c0-.923.547-1.615 1.172-1.615.547 0 .86.384.86.923 0 .538-.39 1.384-.547 2.154-.156.615.312 1.153 1.016 1.153 1.172 0 1.953-1.461 1.953-3.307 0-1.385-.937-2.385-2.578-2.385-1.876 0-3.048 1.385-3.048 2.923 0 .539.156.923.39 1.23.079.155.157.155.079.309 0 .077-.078.384-.157.461-.078.154-.156.23-.312.154-.86-.385-1.25-1.308-1.25-2.385 0-1.769 1.484-3.846 4.454-3.846 2.422 0 3.985 1.693 3.985 3.539 0 2.384-1.328 4.23-3.36 4.23-.703 0-1.328-.384-1.563-.769 0 0-.39 1.385-.469 1.692a6.77 6.77 0 0 1-.625 1.308c.547.154 1.172.231 1.797.231 3.439 0 6.252-2.77 6.252-6.154C12.503 2.77 9.69 0 6.252 0Z"></path>
                     </svg>
                  </a>

                  <a
                     href="https://www.youtube.com/@designeverywhere"
                     target="_blank"
                     aria-label="Youtube"
                  >
                     <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 11">
                        <path d="M14.333 1.538A1.806 1.806 0 0 0 13.047.27C11.944 0 7.26 0 7.26 0S2.665 0 1.47.271A1.806 1.806 0 0 0 .184 1.538C0 2.713 0 5.065 0 5.065s0 2.351.276 3.527a1.806 1.806 0 0 0 1.286 1.266c1.103.272 5.788.272 5.788.272s4.595 0 5.789-.272a1.806 1.806 0 0 0 1.286-1.266c.276-1.176.276-3.527.276-3.527s0-2.352-.368-3.527ZM5.88 7.236V2.894l3.86 2.17-3.86 2.172Z"></path>
                     </svg>
                  </a>

                  <a href="https://twitter.com/dsgnevrywhr" target="_blank" aria-label="Twitter">
                     <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11">
                        <path d="M12.09 1.187c-.454.237-.907.316-1.436.395A2.224 2.224 0 0 0 11.712.158c-.453.317-.982.475-1.587.633C9.672.316 8.992 0 8.312 0 6.725 0 5.516 1.582 5.894 3.165 3.854 3.085 2.04 2.057.756.475c-.68 1.187-.303 2.69.755 3.481-.378 0-.755-.158-1.133-.316 0 1.186.831 2.294 1.964 2.61-.377.08-.755.159-1.133.08.302 1.028 1.209 1.82 2.342 1.82-.906.712-2.266 1.107-3.551.949 1.133.712 2.418 1.187 3.778 1.187 4.61 0 7.178-4.035 7.027-7.754a3.578 3.578 0 0 0 1.285-1.345Z"></path>
                     </svg>
                  </a>
               </div>
            </div>
         </div>

         <div className={css.footer_bottom}>
            <div className={css.footer_bottom_start}>
               <a href="/">
                  <P className={css.p4}>© 2026 DESIGN EVERYWHERE</P>
               </a>

               <div className={css.footer_bottom_other}>
                  <a href="/other/terms-of-use">
                     <P>Terms of Use</P>
                  </a>
                  <a href="/other/privacy-policy">
                     <P>Privacy Policy</P>
                  </a>
               </div>
            </div>

            <time className={clsx(css.footer_clock, css.subtitle2)}>
               <p>{formatted}</p>
            </time>

            <Button className={css.external_button} variant="light">
               <P>Site Credits</P>
               <span>↗</span>
            </Button>
         </div>
      </footer>
   );
};
