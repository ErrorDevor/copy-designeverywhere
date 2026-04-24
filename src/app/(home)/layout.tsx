import React from "react";

import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
