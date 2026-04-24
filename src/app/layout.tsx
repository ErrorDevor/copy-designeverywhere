import "shared/styles/index.scss";
import "shared/styles/index.scss";

import { Metadata } from "next";
import localFont from "next/font/local";

import { ReactQueryProvider } from "./providers/ReactQueryProvider";

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
   title: "Copy designeverywhere",
   description: "Copy designeverywhere",
   icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={`${abcdiatype.variable} ${monumentMono.variable}`}>
         <body>
            <ReactQueryProvider>{children}</ReactQueryProvider>
         </body>
      </html>
   );
}
