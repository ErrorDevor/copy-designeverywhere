"use client";

import React from "react";

import css from "./Privacy.module.scss";

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
            <h2 className={css.head_title}>Privacy Policy</h2>
            <p className={css.head_lastUpdated}>Last updated: 30 January 2023</p>
         </div>

         <div className={css.content}>
            <div className={css.content_sidebar}>
               <p className={css.anchor} data-idx="0">
                  1. Introduction
               </p>
               <p className={css.anchor} data-data-idx="1">
                  2. Summary of Key Points
               </p>
               <p className={css.anchor} data-idx="2">
                  3. Information We Collect
               </p>
               <p className={css.anchor} data-idx="3">
                  4. How Do We Process Your Information?
               </p>
               <p className={css.anchor} data-idx="4">
                  5. Data Compliance
               </p>
               <p className={css.anchor} data-idx="5">
                  6. Sharing
               </p>
               <p className={css.anchor} data-idx="6">
                  7. International Transfers
               </p>
               <p className={css.anchor} data-idx="7">
                  8. Data Retention
               </p>
               <p className={css.anchor} data-idx="8">
                  9. Information Safety
               </p>
               <p className={css.anchor} data-idx="9">
                  10. Minors Information
               </p>
               <p className={css.anchor} data-idx="10">
                  11. Privacy Rights
               </p>
               <p className={css.anchor} data-idx="11">
                  12. Do-not-track Features
               </p>
               <p className={css.anchor} data-idx="12">
                  13. Notice Updates
               </p>
               <p className={css.anchor} data-idx="13">
                  14. Cookie Policy
               </p>
               <p className={css.anchor} data-idx="14">
                  15. Contact Us
               </p>
               <p className={css.anchor} data-idx="15">
                  16. Request Access
               </p>
            </div>

            <div className={css.content_content} id="content">
               <div className="single-other-content  single-other-content-0">
                  <span className="other-title p3">1. Introduction</span>{" "}
                  <span className="other-description p3">
                     <p>
                        This privacy policy for LAFYS ('Company', 'we', 'us', or 'our'),
                        describes how and why we might collect, store, use, and/or share ('process')
                        your information when you use our services ('Services'), such as when you:
                     </p>
                     <ul>
                        <li>
                           Visit our website at https://www.lafys.com, or any website of
                           ours that links to this privacy policy
                        </li>
                        <li>
                           Engage with us in other related ways, including any sales, marketing, or
                           events
                        </li>
                     </ul>
                     <p>
                        <strong>Questions or concerns?</strong> Reading this privacy policy will
                        help you understand your privacy rights and choices. If you do not agree
                        with our policies and practices, please do not use our Services. If you
                        still have any questions or concerns, please contact us at{" "}
                        <a href="mailto:info@lafys.com?">info@lafys.com</a>.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-1">
                  <span className="other-title p3">2. Summary of Key Points</span>{" "}
                  <span className="other-description p3">
                     <p>This summary provides key points from our privacy policy.</p>
                     <ul>
                        <li>
                           <strong style={{ letterSpacing: 0 }}>
                              What personal information do we process?{" "}
                           </strong>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              When you visit, use, or navigate our Services, we may process personal
                              information depending on how you interact with LAFYS and
                              the Services, the choices you make, and the products and features you
                              use. See '<em>3.&nbsp;Information We Collect</em>'.
                           </span>
                        </li>
                        <li>
                           <strong style={{ letterSpacing: 0 }}>
                              Do we process any sensitive personal information?{" "}
                           </strong>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              We do not process sensitive personal information.
                           </span>
                        </li>
                        <li>
                           <strong>Do we receive any information from third parties? </strong>We do
                           not receive any information from third parties.
                        </li>
                        <li>
                           <strong>How do we process your information? </strong>We process your
                           information to provide, improve, and administer our Services, communicate
                           with you, for security and fraud prevention, and to comply with the law.
                           We may also process your information for other purposes with your
                           consent. We process your information only when we have a valid legal
                           reason to do so. See '<em>4. How Do We Process Your Information?</em>'.
                        </li>
                        <li>
                           <strong>
                              In what situations and with which types of parties do we share
                              personal information?{" "}
                           </strong>
                           We may share information in specific situations and with specific
                           categories of third parties. See '<em>6. Sharing</em>'.
                        </li>
                        <li>
                           <strong>How do we keep your information safe? </strong>We have
                           organisational and technical processes and procedures in place to protect
                           your personal information. However, no electronic transmission over the
                           internet or information storage technology can be guaranteed to be 100%
                           secure, so we cannot promise or guarantee that hackers, cybercriminals,
                           or other unauthorised third parties will not be able to defeat our
                           security and improperly collect, access, steal, or modify your
                           information. See '
                           <span>
                              <em>9. Information Safety</em>'.
                           </span>
                        </li>
                        <li>
                           <strong>What are your rights? </strong>Depending on where you are located
                           geographically, the applicable privacy law may mean you have certain
                           rights regarding your personal information.&nbsp;See '
                           <em>11. Privacy Rights</em>
                           <span>'.</span>
                        </li>
                        <li>
                           <strong>How do you exercise your rights? </strong>The easiest way to
                           exercise your rights is by contacting us. We will consider and act upon
                           any request in accordance with applicable data protection laws.
                        </li>
                     </ul>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-2">
                  <span className="other-title p3">3. Information We Collect</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>Personal information you disclose to us</strong>
                     </p>
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>We collect personal information that you provide to us. </em>
                     </p>
                     <p>
                        We collect personal information that you voluntarily provide to us when you
                        express an interest in obtaining information about us or our products and
                        Services, when you participate in activities on the Services, or otherwise
                        when you contact us.
                     </p>
                     <p>
                        <strong>Personal Information Provided by You.</strong> The personal
                        information that we collect depends on the context of your interactions with
                        us and the Services, the choices you make, and the products and features you
                        use. The personal information we collect may include the following:
                     </p>
                     <ul>
                        <li>email addresses</li>
                     </ul>
                     <p>
                        <strong />
                     </p>
                     <p>
                        <strong>Sensitive Information.</strong> We do not process sensitive
                        information.
                     </p>
                     <p>
                        All personal information that you provide to us must be true, complete, and
                        accurate, and you must notify us of any changes to such personal
                        information.
                     </p>
                     <p>
                        <strong>Information automatically collected </strong>
                     </p>
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           Some information — such as your Internet Protocol (IP) address and/or
                           browser and device characteristics — is collected automatically when you
                           visit our Services.{" "}
                        </em>
                     </p>
                     <p>
                        We automatically collect certain information when you visit, use, or
                        navigate the Services. This information does not reveal your specific
                        identity (like your name or contact information) but may include device and
                        usage information, such as your IP address, browser and device
                        characteristics, operating system, language preferences, referring URLs,
                        device name, country, location, information about how and when you use our
                        Services, and other technical information. This information is primarily
                        needed to maintain the security and operation of our Services, and for our
                        internal analytics and reporting purposes.
                     </p>
                     <p>
                        Like many businesses, we also collect information through cookies and
                        similar technologies.
                     </p>
                     <p>The information we collect includes:</p>
                     <ul>
                        <li>
                           <em>Log and Usage Data.</em> Log and usage data are service-related,
                           diagnostic, usage, and performance information our servers automatically
                           collect when you access or use our Services and which we record in log
                           files. Depending on how you interact with us, this log data may include
                           your IP address, device information, browser type, and settings and
                           information about your activity in the Services (such as the date/time
                           stamps associated with your usage, pages and files viewed, searches, and
                           other actions you take such as which features you use), device event
                           information (such as system activity, error reports (sometimes called
                           'crash dumps'), and hardware settings).
                        </li>
                        <li>
                           <em>Device Data.</em> We collect device data such as information about
                           your computer, phone, tablet, or other device you use to access the
                           Services. Depending on the device used, this device data may include
                           information such as your IP address (or proxy server), device and
                           application identification numbers, location, browser type, hardware
                           model, Internet service provider and/or mobile carrier, operating system,
                           and system configuration information.
                        </li>
                        <li>
                           <em>Location Data.</em> We collect location data such as information
                           about your device's location, which can be either precise or imprecise.
                           How much information we collect depends on the type and settings of the
                           device you use to access the Services. For example, we may use GPS and
                           other technologies to collect geolocation data that tells us your current
                           location (based on your IP address). You can opt out of allowing us to
                           collect this information either by refusing access to the information or
                           by disabling your Location setting on your device. However, if you choose
                           to opt out, you may not be able to use certain aspects of the Services.
                        </li>
                     </ul>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-3">
                  <span className="other-title p3">4. How Do We Process Your Information?</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           We process your information to provide, improve, and administer our
                           Services, communicate with you, for security and fraud prevention, and to
                           comply with the law. We may also process your information for other
                           purposes with your consent.{" "}
                        </em>
                     </p>
                     <p>
                        <strong>
                           We process your personal information for a variety of reasons, depending
                           on how you interact with our Services, including:{" "}
                        </strong>
                     </p>
                     <ul>
                        <li>
                           <strong>To respond to user enquiries/offer support to users. </strong>
                           We may process your information to respond to your inquiries and solve
                           any potential issues you might have with the requested service.
                        </li>
                        <li>
                           <strong>To request feedback.</strong> We may process your information
                           when necessary to request feedback and to contact you about your use of
                           our Services.
                        </li>
                        <li>
                           <strong style={{ letterSpacing: 0 }}>
                              To send you marketing and promotional communications.
                           </strong>
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              {" "}
                              We may process the personal information you send to us for our
                              marketing purposes if this is in accordance with your marketing
                              preferences. You can opt out of our marketing emails at any time. For
                              more information, see '11.&nbsp;<em>Privacy Rights</em>').{" "}
                           </span>
                        </li>
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
                              <strong>To deliver targeted advertising to you.</strong> We may
                              process your information to develop and display personalised content
                              and advertising tailored to your interests, location, and more.{" "}
                           </span>
                        </li>
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
                              <strong>To protect our Services.</strong> We may process your
                              information as part of our efforts to keep our Services safe and
                              secure, including fraud monitoring and prevention.{" "}
                           </span>
                        </li>
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
                              <strong>To identify usage trends.</strong> We may process information
                              about how you use our Services to better understand how they are being
                              used so we can improve them.{" "}
                           </span>
                        </li>
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
                              <strong>
                                 To determine the effectiveness of our marketing and promotional
                                 campaigns.
                              </strong>{" "}
                              We may process your information to better understand how to provide
                              marketing and promotional campaigns that are most relevant to
                              you.{" "}
                           </span>
                        </li>
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
                              <strong>To save or protect an individual's vital interest.</strong> We
                              may process your information when necessary to save or protect an
                              individual’s vital interest, such as to prevent harm.
                           </span>
                        </li>
                     </ul>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-4">
                  <span className="other-title p3">5. Data Compliance</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           We only process your personal information when we believe it is necessary
                           and we have a valid legal reason (i.e. legal basis) to do so under
                           applicable law, like with your consent, to comply with laws, to provide
                           you with services to enter into or fulfil our contractual obligations, to
                           protect your rights, or to fulfil our legitimate business interests.{" "}
                        </em>
                     </p>
                     <p>
                        <strong>
                           If you are located in the EU or UK, this section applies to you.{" "}
                        </strong>
                     </p>
                     <p>
                        The General Data Protection Regulation (GDPR) and UK GDPR require us to
                        explain the valid legal bases we rely on in order to process your personal
                        information. As such, we may rely on the following legal bases to process
                        your personal information:
                     </p>
                     <ul>
                        <li>
                           <strong>Consent.</strong> We may process your information if you have
                           given us permission (i.e. consent) to use your personal information for a
                           specific purpose. You can withdraw your consent at any time.{" "}
                           <span
                              style={{
                                 fontFamily: "inherit",
                                 fontSize: "inherit",
                                 fontStyle: "inherit",
                                 fontVariantCaps: "inherit",
                                 letterSpacing: 0,
                              }}
                           >
                              See '11.&nbsp;<em>Privacy Rights</em>'.
                           </span>
                        </li>
                        <li>
                           <strong>Performance of a Contract.</strong> We may process your personal
                           information when we believe it is necessary to fulfil our contractual
                           obligations to you, including providing our Services or at your request
                           prior to entering into a contract with you.
                        </li>
                        <li>
                           <strong>Legitimate Interests.</strong> We may process your information
                           when we believe it is reasonably necessary to achieve our legitimate
                           business interests and those interests do not outweigh your interests and
                           fundamental rights and freedoms. For example, we may process your
                           personal information for some of the purposes described in order to:
                           <ul>
                              <li>
                                 Send users information about special offers and discounts on our
                                 products and services
                              </li>
                              <li>
                                 Develop and display personalised and relevant advertising content
                                 for our users
                              </li>
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
                                    Analyse how our Services are used so we can improve them to
                                    engage and retain users
                                 </span>
                              </li>
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
                                    {" "}
                                    Support our marketing activities{" "}
                                 </span>
                              </li>
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
                                    Diagnose problems and/or prevent fraudulent activities
                                 </span>
                              </li>
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
                                    Understand how our users use our products and services so we can
                                    improve user experience{" "}
                                 </span>
                              </li>
                           </ul>
                        </li>
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
                              <strong>Legal Obligations.</strong> We may process your information
                              where we believe it is necessary for compliance with our legal
                              obligations, such as to cooperate with a law enforcement body or
                              regulatory agency, exercise or defend our legal rights, or disclose
                              your information as evidence in litigation in which we are
                              involved.{" "}
                           </span>
                        </li>
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
                              <strong>Vital Interests.</strong> We may process your information
                              where we believe it is necessary to protect your vital interests or
                              the vital interests of a third party, such as in situations involving
                              potential threats to the safety of any person.
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
                        >
                           <strong>
                              If you are located in Canada, this section applies to you.
                           </strong>
                        </span>
                     </p>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        >
                           We may process your information if you have given us specific permission
                           (i.e. express consent) to use your personal information for a specific
                           purpose, or in situations where your permission can be inferred (i.e.
                           implied consent). You can withdraw your consent at any time. See '
                           <em>11.&nbsp;Privacy Rights</em>'.
                        </span>
                     </p>
                     <p>
                        <span
                           style={{
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              fontStyle: "inherit",
                              fontVariantCaps: "inherit",
                              letterSpacing: 0,
                           }}
                        >
                           In some exceptional cases, we may be legally permitted under applicable
                           law to process your information without your consent, including, for
                           example:{" "}
                        </span>
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
                              If collection is clearly in the interests of an individual and consent
                              cannot be obtained in a timely way
                           </span>
                        </li>
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
                              For investigations and fraud detection and prevention
                           </span>
                        </li>
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
                              For business transactions provided certain conditions are met
                           </span>
                        </li>
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
                              If it is contained in a witness statement and the collection is
                              necessary to assess, process, or settle an insurance claim
                           </span>
                        </li>
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
                              For identifying injured, ill, or deceased persons and communicating
                              with next of kin If we have reasonable grounds to believe an
                              individual has been, is, or maybe the victim of financial abuse
                           </span>
                        </li>
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
                              If it is reasonable to expect collection and use with consent would
                              compromise the availability or the accuracy of the information and the
                              collection is reasonable for purposes related to investigating a
                              breach of an agreement or a contravention of the laws of Canada or a
                              province
                           </span>
                        </li>
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
                              If disclosure is required to comply with a subpoena, warrant, court
                              order, or rules of the court relating to the production of records
                           </span>
                        </li>
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
                              If it was produced by an individual in the course of their employment,
                              business, or profession and the collection is consistent with the
                              purposes for which the information was produced
                           </span>
                        </li>
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
                              If the collection is solely for journalistic, artistic, or literary
                              purposes
                           </span>
                        </li>
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
                              If the information is publicly available and is specified by the
                              regulations
                           </span>
                        </li>
                     </ul>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-5">
                  <span className="other-title p3">6. Sharing</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           We may share information in specific situations described in this section
                           and/or with the following categories of third parties.
                        </em>
                     </p>
                     <p>
                        <strong>
                           Vendors, Consultants, and Other Third-Party Service Providers.
                        </strong>{" "}
                        We may share your data with third-party vendors, service providers,
                        contractors, or agents ('third parties') who perform services for us or on
                        our behalf and require access to such information to do that work. We have
                        contracts in place with our third parties, which are designed to help
                        safeguard your personal information. This means that they cannot do anything
                        with your personal information unless we have instructed them to do it. They
                        will also not share your personal information with any organisation apart
                        from us. They also commit to protect the data they hold on our behalf and to
                        retain it for the period we instruct. The categories of third parties we may
                        share personal information with are as follows:
                     </p>
                     <ul>
                        <li>Data Analytics Services</li>
                        <li>Sales &amp; Marketing Tools</li>
                     </ul>
                     <p />
                     <p>
                        We also may need to share your personal information in the following
                        situations:
                     </p>
                     <ul>
                        <li>
                           <strong>Business Partners.</strong> We may share your information with
                           our business partners to offer you certain products, services, or
                           promotions.
                        </li>
                     </ul>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-6">
                  <span className="other-title p3">7. International Transfers</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           We may transfer, store, and process your information in countries other
                           than your own.{" "}
                        </em>
                     </p>
                     <p>
                        Our servers are located in Singapore. If you are accessing our Services from
                        outside Singapore, please be aware that your information may be transferred
                        to, stored, and processed by us in our facilities and by those third parties
                        with whom we may share your personal information (see '<em>6. Sharing</em>'
                        above), in the United States, and other countries.
                     </p>
                     <p>
                        If you are a resident of the European Economic Area (EEA) or the United
                        Kingdom (UK), then these countries may not necessarily have data protection
                        laws or other similar laws as comprehensive as those in your country.
                        However, we will take all necessary measures to protect your personal
                        information in accordance with this privacy policy and applicable law.
                     </p>
                     <p>
                        <strong>European Commission's Standard Contractual Clauses: </strong>
                     </p>
                     <p>
                        We have implemented measures to protect your personal information, including
                        by using the European Commission's Standard Contractual Clauses for
                        transfers of personal information between our group companies and between us
                        and our third-party providers. These clauses require all recipients to
                        protect all personal information that they process originating from the EEA
                        or UK in accordance with European data protection laws and regulations. Our
                        Standard Contractual Clauses can be provided upon request. We have
                        implemented similar appropriate safeguards with our third-party service
                        providers and partners and further details can be provided upon request.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-7">
                  <span className="other-title p3">8. Data Retention</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           We keep your information for as long as necessary to fulfil the purposes
                           outlined in this privacy policy unless otherwise required by law.
                        </em>
                     </p>
                     <p>
                        We will only keep your personal information for as long as it is necessary
                        for the purposes set out in this privacy policy unless a longer retention
                        period is required or permitted by law (such as tax, accounting, or other
                        legal requirements).
                     </p>
                     <p>
                        When we have no ongoing legitimate business need to process your personal
                        information, we will either delete or anonymise such information, or, if
                        this is not possible (for example, because your personal information has
                        been stored in backup archives), then we will securely store your personal
                        information and isolate it from any further processing until deletion is
                        possible.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-8">
                  <span className="other-title p3">9. Information Safety</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           We aim to protect your personal information through a system of
                           organisational and technical security measures.{" "}
                        </em>
                     </p>
                     <p>
                        We have implemented appropriate and reasonable technical and organisational
                        security measures designed to protect the security of any personal
                        information we process. However, despite our safeguards and efforts to
                        secure your information, no electronic transmission over the Internet or
                        information storage technology can be guaranteed to be 100% secure, so we
                        cannot promise or guarantee that hackers, cybercriminals, or other
                        unauthorised third parties will not be able to defeat our security and
                        improperly collect, access, steal, or modify your information. Although we
                        will do our best to protect your personal information, the transmission of
                        personal information to and from our Services is at your own risk. You
                        should only access the Services within a secure environment.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-9">
                  <span className="other-title p3">10. Minors Information</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           We do not knowingly collect data from or market to children under 13
                           years of age.{" "}
                        </em>
                     </p>
                     <p>
                        We do not knowingly solicit data from or market to children under 13 years
                        of age. By using the Services, you represent that you are at least 13 or
                        that you are the parent or guardian of such a minor and consent to such
                        minor dependent’s use of the Services. If we learn that personal information
                        from users less than 13 years of age has been collected, we will deactivate
                        the account and take reasonable measures to promptly delete such data from
                        our records. If you become aware of any data we may have collected from
                        children under the age of 13, please contact us at{" "}
                        <a href="mailto:info@lafys.com?">info@lafys.com</a>.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-10">
                  <span className="other-title p3">11. Privacy Rights</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           In some regions, such as the European Economic Area (EEA), United Kingdom
                           (UK), and Canada, you have rights that allow you greater access to and
                           control over your personal information. You may review, change, or
                           terminate your account at any time.{" "}
                        </em>
                     </p>
                     <p>
                        In some regions (like the EEA, UK, and Canada), you have certain rights
                        under applicable data protection laws. These may include the right (i) to
                        request access and obtain a copy of your personal information, (ii) to
                        request rectification or erasure; (iii) to restrict the processing of your
                        personal information; and (iv) if applicable, to data portability. In
                        certain circumstances, you may also have the right to object to the
                        processing of your personal information. You can make such a request by
                        contacting us using the contact details provided in the section '
                        <em>15. Contact Us</em>' below.
                     </p>
                     <p>
                        We will consider and act upon any request in accordance with applicable data
                        protection laws.
                     </p>
                     <p>
                        If you are located in the EEA or UK and you believe we are unlawfully
                        processing your personal information, you also have the right to complain to
                        your local data protection supervisory authority. You can find their contact
                        details{" "}
                        <a
                           href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                           target="_blank"
                           rel="noopener"
                        >
                           here
                        </a>
                        .
                     </p>
                     <p>
                        If you are located in Switzerland, the contact details for the data
                        protection authorities are available{" "}
                        <a
                           href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                           target="_blank"
                           rel="noopener"
                        >
                           here
                        </a>
                        .
                     </p>
                     <p>
                        <strong>Withdrawing your consent:</strong> If we are relying on your consent
                        to process your personal information, which may be express and/or implied
                        consent depending on the applicable law, you have the right to withdraw your
                        consent at any time. You can withdraw your consent at any time by contacting
                        us using the contact details provided in the section '
                        <em>15. Contact Us</em>' below.
                     </p>
                     <p>
                        However, please note that this will not affect the lawfulness of the
                        processing before its withdrawal nor, when applicable law allows, will it
                        affect the processing of your personal information conducted in reliance on
                        lawful processing grounds other than consent.
                     </p>
                     <p>
                        <strong>Opting out of marketing and promotional communications:</strong> You
                        can unsubscribe from our marketing and promotional communications at any
                        time by clicking on the unsubscribe link in the emails that we send, or by
                        contacting us using the details provided in the section '
                        <em>15. Contact Us</em>' below. You will then be removed from the marketing
                        lists. However, we may still communicate with you — for example, to send you
                        service-related messages that are necessary for the administration and use
                        of your account, to respond to service requests, or for other non-marketing
                        purposes.
                     </p>
                     <p>
                        <strong>Cookies and similar technologies:</strong> Most Web browsers are set
                        to accept cookies by default. If you prefer, you can usually choose to set
                        your browser to remove cookies and reject cookies. If you choose to remove
                        cookies or reject cookies, this could affect certain features or services of
                        our Services.
                     </p>
                     <p>
                        If you have questions or comments about your privacy rights, you may email
                        us at{" "}
                        <a href="mailto:info@lafys.com?">info@lafys.com</a>.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-11">
                  <span className="other-title p3">12. Do-not-track Features</span>{" "}
                  <span className="other-description p3">
                     Most web browsers and some mobile operating systems and mobile applications
                     include a Do-Not-Track ('DNT') feature or setting you can activate to signal
                     your privacy preference not to have data about your online browsing activities
                     monitored and collected. At this stage, no uniform technology standard for
                     recognising and implementing DNT signals has been finalised. As such, we do not
                     currently respond to DNT browser signals or any other mechanism that
                     automatically communicates your choice not to be tracked online. If a standard
                     for online tracking is adopted that we must follow in the future, we will
                     inform you about that practice in a revised version of this privacy policy.
                  </span>
               </div>
               <div className="single-other-content  single-other-content-12">
                  <span className="other-title p3">13. Notice Updates</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>In Short:</strong>{" "}
                        <em>
                           Yes, we will update this notice as necessary to stay compliant with
                           relevant laws.{" "}
                        </em>
                     </p>
                     <p>
                        We may update this privacy policy from time to time. The updated version
                        will be indicated by an updated 'Revised' date and the updated version will
                        be effective as soon as it is accessible. If we make material changes to
                        this privacy policy, we may notify you either by prominently posting a
                        notice of such changes or by directly sending you a notification. We
                        encourage you to review this privacy policy frequently to be informed of how
                        we are protecting your information.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-13">
                  <span className="other-title p3">14. Cookie Policy</span>{" "}
                  <span className="other-description p3">
                     <p>
                        <strong>What are cookies?</strong>
                     </p>
                     <p>
                        Cookies are small data files that are placed on your computer or mobile
                        device when you visit a website. Cookies are widely used by website owners
                        in order to make their websites work or to work more efficiently, as well as
                        to provide reporting information.
                     </p>
                     <p>
                        Cookies set by the website owner (in this case, LAFYS) are
                        called "first-party cookies." Cookies set by parties other than the website
                        owner are called "third-party cookies." Third-party cookies enable
                        third-party features or functionality to be provided on or through the
                        website (e.g., advertising, interactive content, and analytics). The parties
                        that set these third party cookies can recognise your computer both when it
                        visits the website in question and also when it visits certain other
                        websites.
                     </p>
                     <p>
                        <strong>How can I control cookies on my browser?</strong>
                     </p>
                     <p>
                        As the means by which you can refuse cookies through your web browser
                        controls vary from browser to browser, you should visit your browser's help
                        menu for more information. The following is information about how to manage
                        cookies on the most popular browsers:
                     </p>
                     <ul>
                        <li>
                           <a
                              href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies"
                              target="_blank"
                              rel="noopener"
                           >
                              Chrome
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
                              target="_blank"
                              rel="noopener"
                           >
                              Safari
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                              target="_blank"
                              rel="noopener"
                           >
                              <span>Microsoft Edge</span>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
                              target="_blank"
                              rel="noopener"
                           >
                              Firefox
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://help.opera.com/en/latest/web-preferences/"
                              target="_blank"
                              rel="noopener"
                           >
                              Opera{" "}
                           </a>
                        </li>
                     </ul>
                     <p>
                        In addition, most advertising networks offer you a way to opt out of
                        targeted advertising. If you would like to find out more information, please
                        visit:
                     </p>
                     <ul>
                        <li>
                           <a href="https://optout.aboutads.info" target="_blank" rel="noopener">
                              Digital Advertising Alliance{" "}
                           </a>
                        </li>
                        <li>
                           <a href="https://youradchoices.ca" target="_blank" rel="noopener">
                              Digital Advertising Alliance of Canada{" "}
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.youronlinechoices.com"
                              target="_blank"
                              rel="noopener"
                           >
                              European Interactive Digital Advertising Alliance{" "}
                           </a>
                        </li>
                     </ul>
                     <p>
                        <strong>Cookies, web beacons, and similar technologies </strong>
                     </p>
                     <p>
                        Cookies are not the only way to recognise or track visitors to a website. We
                        may use other, similar technologies from time to time, like web beacons
                        (sometimes called "tracking pixels" or "clear gifs"). These are tiny
                        graphics files that contain a unique identifier that enables us to recognise
                        when someone has visited our Website or opened an email including them. This
                        allows us, for example, to monitor the traffic patterns of users from one
                        page within a website to another, to deliver or communicate with cookies, to
                        understand whether you have come to the website from an online advertisement
                        displayed on a third-party website, to improve site performance, and to
                        measure the success of email marketing campaigns. In many instances, these
                        technologies are reliant on cookies to function properly, and so declining
                        cookies will impair their functioning.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-14">
                  <span className="other-title p3">15. Contact Us</span>{" "}
                  <span className="other-description p3">
                     <p>
                        If you have questions or comments about this notice, you may email us at{" "}
                        <a href="mailto:info@lafys.com?">info@lafys.com</a>.
                     </p>
                  </span>
               </div>
               <div className="single-other-content  single-other-content-15">
                  <span className="other-title p3">16. Request Access</span>{" "}
                  <span className="other-description p3">
                     <p>
                        Based on the applicable laws of your country, you may have the right to
                        request access to the personal information we collect from you, change that
                        information, or delete it. To request to review, update, or delete your
                        personal information, please email us at:{" "}
                        <a href="mailto:info@lafys.com?">info@lafys.com</a>.
                     </p>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
