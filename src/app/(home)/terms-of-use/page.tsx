"use client";

import React from "react";

import css from "./TermsOfUse.module.scss";

const Page: React.FC = () => {
   React.useEffect(() => {
      const anchors = Array.from(document.querySelectorAll(`.${css.anchor}`)) as HTMLElement[];
      const headings = Array.from(document.querySelectorAll(`.other-title.p3`)) as HTMLElement[];

      const content = anchors.map((anchor, id) => ({
         anchor,
         heading: headings[id],
      }));

      content.forEach(({ anchor, heading }) => {
         anchor.onclick = () =>
            heading.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
      });

      const scroll = () => {
         const currentScroll = window.pageYOffset;
         const pointOfStart = currentScroll + 120;

         let active: {
            anchor: HTMLElement;
            heading: HTMLElement;
         } | null = content[0];

         for (const { anchor, heading } of content) {
            const elementTop = heading.getBoundingClientRect().top + window.pageYOffset;
            if (elementTop <= pointOfStart) {
               active = { anchor, heading };
            }
         }

         content.forEach((i) => {
            if (i.anchor === active?.anchor) {
               i.anchor.classList.add("active");
               const parentEl = i.anchor.parentElement;
               if (parentEl) {
                  parentEl.scrollTo({
                     left: i.anchor.offsetLeft,
                     behavior: "smooth",
                  });
               }
            } else {
               i.anchor.classList.remove("active");
            }
         });
      };

      scroll();

      window.addEventListener("scroll", scroll);

      return () => window.removeEventListener("scroll", scroll);
   }, []);

   return (
      <div className={css.root}>
         <div className={css.head}>
            <h2 className={css.head_title}>Terms of Use</h2>
            <p className={css.head_lastUpdated}>Last updated: 30 January 2023</p>
         </div>

         <div className={css.content}>
            <div className={css.content_sidebar}>
               <p className={css.anchor} data-idx="0">
                  1. Agreement to Terms
               </p>
               <p className={css.anchor} data-data-idx="1">
                  2. Intellectual Property Rights
               </p>
               <p className={css.anchor} data-idx="2">
                  3. User Representations
               </p>
               <p className={css.anchor} data-idx="3">
                  4. Prohibited Activities
               </p>
               <p className={css.anchor} data-idx="4">
                  5. Copyright Infringements
               </p>
               <p className={css.anchor} data-idx="5">
                  6. User Generated Contributions
               </p>
               <p className={css.anchor} data-idx="6">
                  7. Contribution Licence
               </p>
               <p className={css.anchor} data-idx="7">
                  8. Submissions
               </p>
               <p className={css.anchor} data-idx="8">
                  9. Third-party Website and Content
               </p>
               <p className={css.anchor} data-idx="9">
                  10. Site Management
               </p>
               <p className={css.anchor} data-idx="10">
                  11. Privacy Policy
               </p>
               <p className={css.anchor} data-idx="11">
                  12. Term and Termination
               </p>
               <p className={css.anchor} data-idx="12">
                  13. Modifications and Interruptions
               </p>
               <p className={css.anchor} data-idx="13">
                  14. Governing Law
               </p>
               <p className={css.anchor} data-idx="14">
                  15. Dispute Resolution
               </p>
               <p className={css.anchor} data-idx="15">
                  16. Corrections
               </p>
               <p className={css.anchor} data-idx="16">
                  17. Disclaimer
               </p>
               <p className={css.anchor} data-idx="17">
                  18. Limitations of Liability
               </p>
               <p className={css.anchor} data-idx="18">
                  19. Indemnification
               </p>
               <p className={css.anchor} data-idx="19">
                  20. User Data
               </p>
               <p className={css.anchor} data-idx="20">
                  21. Miscellaneous
               </p>
               <p className={css.anchor} data-idx="21">
                  22. Contact Us
               </p>
            </div>

            <div className={css.content_content} id="content">
               <div className="single-other-content  single-other-content-0">
                  <span className="other-title p3">1. Agreement to Terms</span>{" "}
                  <span className="other-description p3">
                     <p>
                        These Terms of Use constitute a legally binding agreement made between you,
                        whether personally or on behalf of an entity (“you”) and LAFYS
                        ("Company," “we," “us," or “our”), concerning your access to and use of the
                        https://lafys.com website as well as any other media form,
                        media channel, mobile website or mobile application related, linked, or
                        otherwise connected thereto (collectively, the “Site”). We are registered in
                        Singapore. You agree that by accessing the Site, you have read, understood,
                        and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE
                        WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING
                        THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                     </p>
                     <p />
                     <p>
                        Supplemental terms and conditions or documents that may be posted on the
                        Site from time to time are hereby expressly incorporated herein by
                        reference. We reserve the right, in our sole discretion, to make changes or
                        modifications to these Terms of Use from time to time. We will alert you
                        about any changes by updating the “Last updated” date of these Terms of Use,
                        and you waive any right to receive specific notice of each such change.
                        Please ensure that you check the applicable Terms every time you use our
                        Site so that you understand which Terms apply. You will be subject to, and
                        will be deemed to have been made aware of and to have accepted, the changes
                        in any revised Terms of Use by your continued use of the Site after the date
                        such revised Terms of Use are posted.
                     </p>
                     <p />
                     <p>
                        The information provided on the Site is not intended for distribution to or
                        use by any person or entity in any jurisdiction or country where such
                        distribution or use would be contrary to law or regulation or which would
                        subject us to any registration requirement within such jurisdiction or
                        country. Accordingly, those persons who choose to access the Site from other
                        locations do so on their own initiative and are solely responsible for
                        compliance with local laws, if and to the extent local laws are applicable.
                     </p>
                     <p />
                     <p>
                        The Site is intended for users who are at least 13 years of age. All users
                        who are minors in the jurisdiction in which they reside (generally under the
                        age of 18) must have the permission of, and be directly supervised by, their
                        parent or guardian to use the Site. If you are a minor, you must have your
                        parent or guardian read and agree to these Terms of Use prior to you using
                        the Site.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-1">
                  <span className="other-title p3">2. Intellectual Property Rights</span>{" "}
                  <span className="other-description p3">
                     <p>
                        Unless otherwise indicated, the Site is our proprietary property and all
                        source code, databases, functionality, software, website designs, audio,
                        video, text, photographs, and graphics on the Site (collectively, the
                        “Content”) and the trademarks, service marks, and logos contained therein
                        (the “Marks”) are owned or controlled by us or licensed to us, and are
                        protected by copyright and trademark laws and various other intellectual
                        property rights, international copyright laws, and international
                        conventions. The Content and the Marks are provided on the Site “AS IS” for
                        your information and personal use only. Except as expressly provided in
                        these Terms of Use, no part of the Site and no Content or Marks may be
                        copied, reproduced, aggregated, republished, uploaded, posted, publicly
                        displayed, encoded, translated, transmitted, distributed, sold, licensed, or
                        otherwise exploited for any commercial purpose whatsoever, without our
                        express prior written permission.
                     </p>
                     <p />
                     <p>
                        Provided that you are eligible to use the Site, you are granted a limited
                        licence to access and use the Site and to download or print a copy of any
                        portion of the Content to which you have properly gained access solely for
                        your personal, non-commercial use. We reserve all rights not expressly
                        granted to you in and to the Site, the Content and the Marks.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-2">
                  <span className="other-title p3">3. User Representations</span>{" "}
                  <span className="other-description p3">
                     <p>
                        By using the Site, you represent and warrant that: (1) you have the legal
                        capacity and you agree to comply with these Terms of Use; (2) you are not
                        under the age of 13; (3) you are not a minor in the jurisdiction in which
                        you reside, or if a minor, you have received parental permission to use the
                        Site; (4) you will not access the Site through automated or non-human means,
                        whether through a bot, script, or otherwise; (5) you will not use the Site
                        for any illegal or unauthorised purpose; and (6) your use of the Site will
                        not violate any applicable law or regulation.
                     </p>
                     <p />
                     <p>
                        If you provide any information that is untrue, inaccurate, not current, or
                        incomplete, we have the right to suspend or terminate your account and
                        refuse any and all current or future use of the Site (or any portion
                        thereof).
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-3">
                  <span className="other-title p3">4. Prohibited Activities</span>{" "}
                  <span className="other-description p3">
                     <p>
                        You may not access or use the Site for any purpose other than that for which
                        we make the Site available. The Site may not be used in connection with any
                        commercial endeavours except those that are specifically endorsed or
                        approved by us.
                     </p>
                     <p />
                     <p>As a user of the Site, you agree not to:</p>
                     <ul>
                        <li>
                           Systematically retrieve data or other content from the Site to create or
                           compile, directly or indirectly, a collection, compilation, database, or
                           directory without written permission from us.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Circumvent, disable, or otherwise interfere with security-related
                              features of the Site, including features that prevent or restrict the
                              use or copying of any Content or enforce limitations on the use of the
                              Site and/or the Content contained therein.
                           </span>
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
                              Site.
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Use any information obtained from the Site in order to harass, abuse,
                              or harm another person.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Make improper use of our support services or submit false reports of
                              abuse or misconduct.
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Use the Site in a manner inconsistent with any applicable laws or
                              regulations.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Engage in unauthorised framing of or linking to the Site.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Upload or transmit (or attempt to upload or to transmit) viruses,
                              Trojan horses, or other material, including excessive use of capital
                              letters and spamming (continuous posting of repetitive text), that
                              interferes with any party’s uninterrupted use and enjoyment of the
                              Site or modifies, impairs, disrupts, alters, or interferes with the
                              use, features, functions, operation, or maintenance of the Site.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Engage in any automated use of the system, such as using scripts to
                              send comments or messages, or using any data mining, robots, or
                              similar data gathering and extraction tools.
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Delete the copyright or other proprietary rights notice from any
                              Content.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Attempt to impersonate another user or person or use the username of
                              another user.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Upload or transmit (or attempt to upload or to transmit) any material
                              that acts as a passive or active information collection or
                              transmission mechanism, including without limitation, clear graphics
                              interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other
                              similar devices (sometimes referred to as “spyware” or “passive
                              collection mechanisms” or “pcms”).{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Interfere with, disrupt, or create an undue burden on the Site or the
                              networks or services connected to the Site.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Harass, annoy, intimidate, or threaten any of our employees or agents
                              engaged in providing any portion of the Site to you.
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Attempt to bypass any measures of the Site designed to prevent or
                              restrict access to the Site, or any portion of the Site.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Copy or adapt the Site’s software, including but not limited to Flash,
                              PHP, HTML, JavaScript, or other code. Except as permitted by
                              applicable law, decipher, decompile, disassemble, or reverse engineer
                              any of the software comprising or in any way making up a part of the
                              Site.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Except as may be the result of the standard search engine or Internet
                              browser usage, use, launch, develop, or distribute any automated
                              system, including without limitation, any spider, robot, cheat
                              utility, scraper, or offline reader that accesses the Site, or using
                              or launching any unauthorised script or other software.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Make any unauthorised use of the Site, including collecting usernames
                              and/or email addresses of users by electronic or other means for the
                              purpose of sending unsolicited emails, or creating user accounts by
                              automated means or under false pretences.{" "}
                           </span>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           />
                        </li>
                     </ul>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        />
                     </p>
                     <ul>
                        <li>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              Use the Site as part of any effort to compete with us or otherwise use
                              the Site and/or the Content for any revenue-generating endeavour or
                              commercial enterprise.
                           </span>
                        </li>
                     </ul>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-4">
                  <span className="other-title p3">5. Copyright Infringements</span>{" "}
                  <span className="other-description p3">
                     We respect the intellectual property rights of others. If you believe that any
                     material available on or through the Site infringes upon any copyright you own
                     or control, please immediately notify us using the contact information provided
                     below (a “Notification”). A copy of your Notification will be sent to the
                     person who posted or stored the material addressed in the Notification. Please
                     be advised that pursuant to applicable law you may be held liable for damages
                     if you make material misrepresentations in a Notification. Thus, if you are not
                     sure that material located on or linked to by the Site infringes your
                     copyright, you should consider first contacting an attorney.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-5">
                  <span className="other-title p3">6. User Generated Contributions</span>{" "}
                  <span className="other-description p3">
                     <p>
                        The Site does not offer users to submit or post content. We may provide you
                        with the opportunity to create, submit, post, display, transmit, perform,
                        publish, distribute, or broadcast content and materials to us or on the
                        Site, including but not limited to text, writings, video, audio,
                        photographs, graphics, comments, suggestions, or personal information or
                        other material (collectively, "Contributions"). Contributions may be
                        viewable by other users of the Site and through third-party websites. As
                        such, any Contributions you transmit may be treated in accordance with the
                        Site Privacy Policy. When you create or make available any Contributions,
                        you thereby represent and warrant that:
                     </p>
                     <ul>
                        <li>
                           The creation, distribution, transmission, public display, or performance,
                           and the accessing, downloading, or copying of your Contributions do not
                           and will not infringe the proprietary rights, including but not limited
                           to the copyright, patent, trademark, trade secret, or moral rights of any
                           third party.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           You are the creator and owner of or have the necessary licences, rights,
                           consents, releases, and permissions to use and to authorise us, the Site,
                           and other users of the Site to use your Contributions in any manner
                           contemplated by the Site and these Terms of Use.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           You have the written consent, release, and/or permission of each and
                           every identifiable individual person in your Contributions to use the
                           name or likeness of each and every such identifiable individual person to
                           enable inclusion and use of your Contributions in any manner contemplated
                           by the Site and these Terms of Use.
                        </li>
                     </ul>
                     <ul>
                        <li>Your Contributions are not false, inaccurate, or misleading.</li>
                     </ul>
                     <ul>
                        <li>
                           Your Contributions are not unsolicited or unauthorised advertising,
                           promotional materials, pyramid schemes, chain letters, spam, mass
                           mailings, or other forms of solicitation.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           Your Contributions are not obscene, lewd, lascivious, filthy, violent,
                           harassing, libellous, slanderous, or otherwise objectionable (as
                           determined by us).
                        </li>
                     </ul>
                     <ul>
                        <li>
                           Your Contributions do not ridicule, mock, disparage, intimidate, or abuse
                           anyone. Your Contributions are not used to harass or threaten (in the
                           legal sense of those terms) any other person or to promote violence
                           against a specific person or class of people.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           Your Contributions do not violate any applicable law, regulation, or
                           rule.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           Your Contributions do not violate the privacy or publicity rights of any
                           third party.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           Your Contributions do not violate any applicable law concerning child
                           pornography, or otherwise intended to protect the health or well-being of
                           minors.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           Your Contributions do not include any offensive comments that are
                           connected to race, national origin, gender, sexual preference, or
                           physical handicap.
                        </li>
                     </ul>
                     <ul>
                        <li>
                           Your Contributions do not otherwise violate or link to material that
                           infringes, any provision of these Terms of Use, or any applicable law or
                           regulation.
                        </li>
                     </ul>
                     <p />
                     <p>
                        Any use of the Site in violation of the foregoing violates these Terms of
                        Use and may result in, among other things, termination or suspension of your
                        rights to use the Site.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-6">
                  <span className="other-title p3">7. Contribution Licence</span>{" "}
                  <span className="other-description p3">
                     <p>
                        You agree that we may access, store, process, and use any information and
                        personal data following the terms of the Privacy Policy.
                     </p>
                     <p />
                     <p>
                        By submitting suggestions or other feedback regarding the Site, you agree
                        that we can use and share such feedback for any purpose without compensation
                        to you.
                     </p>
                     <p />
                     <p>
                        We do not assert any ownership over your Contributions. You retain full
                        ownership of all of your Contributions and any intellectual property rights
                        or other proprietary rights associated with your Contributions. We are not
                        liable for any statements or representations in your Contributions provided
                        by you in any area on the Site. You are solely responsible for your
                        Contributions to the Site and you expressly agree to exonerate us from any
                        and all responsibility and to refrain from any legal action against us
                        regarding your Contributions.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-7">
                  <span className="other-title p3">8. Submissions</span>{" "}
                  <span className="other-description p3">
                     You acknowledge and agree that any questions, comments, suggestions, ideas,
                     feedback, or other information regarding the Site ("Submissions") provided by
                     you to us are non-confidential. You hereby warrant that any such Submissions
                     are original with you or that you have the right to submit such Submissions.
                     You retain full ownership of all of your Submissions and any intellectual
                     property rights or other proprietary rights associated with your Submissions.
                     You agree there shall be no recourse against us for any alleged or actual
                     infringement or misappropriation of any proprietary right in your Submissions.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-8">
                  <span className="other-title p3">9. Third-party Website and Content</span>{" "}
                  <span className="other-description p3">
                     The Site may contain (or you may be sent via the Site) links to other websites
                     ("Third-Party Websites") as well as articles, photographs, text, graphics,
                     pictures, designs, music, sound, video, information, applications, software,
                     and other content or items belonging to or originating from third parties
                     ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are
                     not investigated, monitored, or checked for accuracy, appropriateness, or
                     completeness by us, and we are not responsible for any Third-Party Websites
                     accessed through the Site or any Third-Party Content posted on, available
                     through, or installed from the Site, including the content, accuracy,
                     offensiveness, opinions, reliability, privacy practices, or other policies of
                     or contained in the Third-Party Websites or the Third-Party Content. Inclusion
                     of, linking to, or permitting the use or installation of any Third-Party
                     Websites or any Third-Party Content does not imply approval or endorsement
                     thereof by us. If you decide to leave the Site and access the Third-Party
                     Websites or to use or install any Third-Party Content, you do so at your own
                     risk, and you should be aware these Terms of Use no longer govern. You should
                     review the applicable terms and policies, including privacy and data gathering
                     practices, of any website to which you navigate from the Site or relating to
                     any applications you use or install from the Site. Any purchases you make
                     through Third-Party Websites will be through other websites and from other
                     companies, and we take no responsibility whatsoever in relation to such
                     purchases which are exclusively between you and the applicable third party. You
                     agree and acknowledge that we do not endorse the products or services offered
                     on Third-Party Websites and you shall hold us harmless from any harm caused by
                     your purchase of such products or services. Additionally, you shall hold us
                     harmless from any losses sustained by you or harm caused to you relating to or
                     resulting in any way from any Third-Party Content or any contact with
                     Third-Party Websites.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-9">
                  <span className="other-title p3">10. Site Management</span>{" "}
                  <span className="other-description p3">
                     We reserve the right, but not the obligation, to: (1) monitor the Site for
                     violations of these Terms of Use; (2) take appropriate legal action against
                     anyone who, in our sole discretion, violates the law or these Terms of Use,
                     including without limitation, reporting such user to law enforcement
                     authorities; (3) in our sole discretion and without limitation, refuse,
                     restrict access to, limit the availability of, or disable (to the extent
                     technologically feasible) any of your Contributions or any portion thereof; (4)
                     in our sole discretion and without limitation, notice, or liability, to remove
                     from the Site or otherwise disable all files and content that are excessive in
                     size or are in any way burdensome to our systems; and (5) otherwise manage the
                     Site in a manner designed to protect our rights and property and to facilitate
                     the proper functioning of the Site.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-10">
                  <span className="other-title p3">11. Privacy Policy</span>{" "}
                  <span className="other-description p3">
                     <p>
                        We care about data privacy and security. Please review our Privacy Policy{" "}
                        <a href="https://lafys.com/privacy">here</a>. By
                        using the Site, you agree to be bound by our Privacy Policy, which is
                        incorporated into these Terms of Use. Please be advised the Site is hosted
                        in Singapore. If you access the Site from any other region of the world with
                        laws or other requirements governing personal data collection, use, or
                        disclosure that differ from applicable laws in Singapore, then through your
                        continued use of the Site, you are transferring your data to Singapore, and
                        you agree to have your data transferred to and processed in Singapore.
                        Further, we do not knowingly accept, request, or solicit information from
                        children or knowingly market to children. Therefore, in accordance with the
                        U.S. Children’s Online Privacy Protection Act, if we receive actual
                        knowledge that anyone under the age of 13 has provided personal information
                        to us without the requisite and verifiable parental consent, we will delete
                        that information from the Site as quickly as is reasonably practical.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-11">
                  <span className="other-title p3">12. Term and Termination</span>{" "}
                  <span className="other-description p3">
                     <p>
                        These Terms of Use shall remain in full force and effect while you use the
                        Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE
                        THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY
                        ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO
                        ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
                        BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS
                        OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
                        PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION THAT YOU
                        POSTED AT ANY TIME, WITHOUT WARNING, AT OUR SOLE DISCRETION.
                     </p>
                     <p />
                     <p>
                        If we terminate or suspend your account for any reason, you are prohibited
                        from registering and creating a new account under your name, a fake or
                        borrowed name, or the name of any third party, even if you may be acting on
                        behalf of the third party. In addition to terminating or suspending your
                        account, we reserve the right to take appropriate legal action, including
                        without limitation pursuing civil, criminal, and injunctive redress.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-12">
                  <span className="other-title p3">13. Modifications and Interruptions</span>{" "}
                  <span className="other-description p3">
                     <p>
                        We reserve the right to change, modify, or remove the contents of the Site
                        at any time or for any reason at our sole discretion without notice.
                        However, we have no obligation to update any information on our Site. We
                        also reserve the right to modify or discontinue all or part of the Site
                        without notice at any time. We will not be liable to you or any third party
                        for any modification, price change, suspension, or discontinuance of the
                        Site.
                     </p>
                     <p />
                     <p>
                        We cannot guarantee the Site will be available at all times. We may
                        experience hardware, software, or other problems or need to perform
                        maintenance related to the Site, resulting in interruptions, delays, or
                        errors. We reserve the right to change, revise, update, suspend,
                        discontinue, or otherwise modify the Site at any time or for any reason
                        without notice to you. You agree that we have no liability whatsoever for
                        any loss, damage, or inconvenience caused by your inability to access or use
                        the Site during any downtime or discontinuance of the Site. Nothing in these
                        Terms of Use will be construed to obligate us to maintain and support the
                        Site or to supply any corrections, updates, or releases in connection
                        therewith.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-13">
                  <span className="other-title p3">14. Governing Law</span>{" "}
                  <span className="other-description p3">
                     These Terms shall be governed by and defined following the laws of Singapore.
                     LAFYS and yourself irrevocably consent that the courts of Singapore
                     shall have exclusive jurisdiction to resolve any dispute which may arise in
                     connection with these terms.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-14">
                  <span className="other-title p3">15. Dispute Resolution</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>Informal Negotiations</strong>
                     </p>
                     <p>
                        To expedite resolution and control the cost of any dispute, controversy, or
                        claim related to these Terms of Use (each "Dispute" and collectively, the
                        “Disputes”) brought by either you or us (individually, a “Party” and
                        collectively, the “Parties”), the Parties agree to first attempt to
                        negotiate any Dispute (except those Disputes expressly provided below)
                        informally for at least thirty (30) days before initiating the arbitration.
                        Such informal negotiations commence upon written notice from one Party to
                        the other Party.
                     </p>
                     <p />
                     <p>
                        <strong>Binding Arbitration </strong>
                     </p>
                     <p>
                        Any dispute arising out of or in connection with this contract, including
                        any question regarding its existence, validity, or termination, shall be
                        referred to and finally resolved by the courts of Singapore, which, as a
                        result of referring to it, is considered as the part of this clause. The
                        number of arbitrators shall be three (3). The seat, or legal place, of
                        arbitration, shall be Singapore. The language of the proceedings shall be
                        English. The governing law of the contract shall be the substantive law of
                        Singapore.
                     </p>
                     <p />
                     <p>
                        <strong>Restrictions</strong>
                     </p>
                     <p>
                        The Parties<strong> </strong>agree that any arbitration shall be limited to
                        the Dispute between the Parties individually. To the full extent permitted
                        by law, (a) no arbitration shall be joined with any other proceeding; (b)
                        there is no right or authority for any Dispute to be arbitrated on a
                        class-action basis or to utilise class-action procedures; and (c) there is
                        no right or authority for any Dispute to be brought in a purported
                        representative capacity on behalf of the general public or any other
                        persons.
                     </p>
                     <p />
                     <p>
                        <strong>Exceptions to Informal Negotiations and Arbitration</strong>
                     </p>
                     <p>
                        The Parties agree that the following Disputes are not subject to the above
                        provisions concerning informal negotiations and binding arbitration: (a) any
                        Disputes seeking to enforce or protect, or concerning the validity of, any
                        of the intellectual property rights of a Party; (b) any Dispute related to,
                        or arising from, allegations of theft, piracy, invasion of privacy, or
                        unauthorised use; and (c) any claim for injunctive relief. If this provision
                        is found to be illegal or unenforceable, then neither Party will elect to
                        arbitrate any Dispute falling within that portion of this provision found to
                        be illegal or unenforceable and such Dispute shall be decided by a court of
                        competent jurisdiction within the courts listed for jurisdiction above, and
                        the Parties agree to submit to the personal jurisdiction of that court.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-15">
                  <span className="other-title p3">16. Corrections</span>{" "}
                  <span className="other-description p3">
                     There may be information on the Site that contains typographical errors,
                     inaccuracies, or omissions, including descriptions, pricing, availability, and
                     various other information. We reserve the right to correct any errors,
                     inaccuracies, or omissions and to change or update the information on the Site
                     at any time, without prior notice.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-16">
                  <span className="other-title p3">17. Disclaimer</span>{" "}
                  <span className="other-description p3">
                     THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR
                     USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST
                     EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN
                     CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION,
                     THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                     AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
                     ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES
                     LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
                     (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
                     INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS
                     TO AND USE OF THE SITE, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE
                     SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
                     STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
                     THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
                     TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
                     OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
                     INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
                     OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE,
                     OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
                     THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
                     APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
                     PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
                     YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE
                     OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD
                     USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-17">
                  <span className="other-title p3">18. Limitations of Liability</span>{" "}
                  <span className="other-description p3">
                     IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR
                     ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL,
                     SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF
                     DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN
                     ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE
                     CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND
                     REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE
                     LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR S$100.00 SGD. CERTAIN US
                     STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
                     WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS
                     APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY
                     TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-18">
                  <span className="other-title p3">19. Indemnification</span>{" "}
                  <span className="other-description p3">
                     You agree to defend, indemnify, and hold us harmless, including our
                     subsidiaries, affiliates, and all of our respective officers, agents, partners,
                     and employees, from and against any loss, damage, liability, claim, or demand,
                     including reasonable attorneys’ fees and expenses, made by any third party due
                     to or arising out of: (1) use of the Site; (2) breach of these Terms of Use;
                     (3) any breach of your representations and warranties set forth in these Terms
                     of Use; (4) your violation of the rights of a third party, including but not
                     limited to intellectual property rights; or (5) any overt harmful act toward
                     any other user of the Site with whom you connected via the Site.
                     Notwithstanding the foregoing, we reserve the right, at your expense, to assume
                     the exclusive defence and control of any matter for which you are required to
                     indemnify us, and you agree to cooperate, at your expense, with our defence of
                     such claims. We will use reasonable efforts to notify you of any such claim,
                     action, or proceeding which is subject to this indemnification upon becoming
                     aware of it.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-19">
                  <span className="other-title p3">20. User Data</span>{" "}
                  <span className="other-description p3">
                     We will maintain certain data that you transmit to the Site for the purpose of
                     managing the performance of the Site, as well as data relating to your use of
                     the Site. Although we perform regular routine backups of data, you are solely
                     responsible for all data that you transmit or that relates to any activity you
                     have undertaken using the Site. You agree that we shall have no liability to
                     you for any loss or corruption of any such data, and you hereby waive any right
                     of action against us arising from any such loss or corruption of such data.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-20">
                  <span className="other-title p3">21. Miscellaneous</span>{" "}
                  <span className="other-description p3">
                     These Terms of Use and any policies or operating rules posted by us on the Site
                     or in respect to the Site constitute the entire agreement and understanding
                     between you and us. Our failure to exercise or enforce any right or provision
                     of these Terms of Use shall not operate as a waiver of such right or provision.
                     These Terms of Use operate to the fullest extent permissible by law. We may
                     assign any or all of our rights and obligations to others at any time. We shall
                     not be responsible or liable for any loss, damage, delay, or failure to act
                     caused by any cause beyond our reasonable control. If any provision or part of
                     a provision of these Terms of Use is determined to be unlawful, void, or
                     unenforceable, that provision or part of the provision is deemed severable from
                     these Terms of Use and does not affect the validity and enforceability of any
                     remaining provisions. There is no joint venture, partnership, employment or
                     agency relationship created between you and us as a result of these Terms of
                     Use or use of the Site. You agree that these Terms of Use will not be construed
                     against us by virtue of having drafted them. You hereby waive any and all
                     defences you may have based on the electronic form of these Terms of Use and
                     the lack of signing by the parties hereto to execute these Terms of Use.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-21">
                  <span className="other-title p3">22. Contact Us</span>{" "}
                  <span className="other-description p3">
                     <p>
                        In order to resolve a complaint regarding the Site or to receive further
                        information regarding the use of the Site, please mail us at:{" "}
                        <a href="mailto:info@lafys.com">
                           <span className="tagnamecolor">
                              <span className="tagcolor">info@lafys.com</span>
                           </span>
                        </a>
                        .
                     </p>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
