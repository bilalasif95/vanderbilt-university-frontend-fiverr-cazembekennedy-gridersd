import React, { ReactNode } from "react";
import Navigation from "../components/shared/Navigation";
import Footer from "../components/shared/Footer";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
