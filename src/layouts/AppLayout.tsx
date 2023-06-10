/* eslint-disable camelcase */
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <div className="mx-auto overflow-hidden">
        {/* <CallToAction/> */}
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
