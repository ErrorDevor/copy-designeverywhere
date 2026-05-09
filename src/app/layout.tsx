import "shared/styles/index.scss";
import "shared/styles/index.scss";

import { Metadata } from "next";
import localFont from "next/font/local";

import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

import { AuthProvider } from "features/Auth/providers/AuthProvider";
import { FetchSubscriptionPlan } from "features/Pricing";

//abc-diatype-mono-regular.otf
//ABC-Diatype.woff2

const abcdiatype = localFont({
   src: [{ path: "../shared/assets/fonts/ABC-Diatype/ABCDiatype-Regular.woff2", style: "normal" }],
   variable: "--font-abcdiatype",
   display: "swap",
});

const monumentMono = localFont({
   src: [
      {
         path: "../shared/assets/fonts/ABC-Diatype/ABCMonumentGroteskMono.woff2",
         style: "normal",
         weight: "400",
      },
   ],
   variable: "--font-monument-mono",
   display: "swap",
});

export const metadata: Metadata = {
   title: "Lafys - Premium Website Prompts",
   description: "Lafys - Premium Website Prompts",
   icons: {
      icon: "/favicon.svg",
      apple: "/favicon.svg",
   },
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={`${abcdiatype.variable} ${monumentMono.variable}`}>
         {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId="G-LF80ZYNHJL" />}
         <body>
            <ReactQueryProvider>
               <AuthProvider>
                  {children}
                  <FetchSubscriptionPlan />
               </AuthProvider>
            </ReactQueryProvider>
         </body>
      </html>
   );
}
