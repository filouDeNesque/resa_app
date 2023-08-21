import React from "react";
import { type ReactNode } from "react";
import Navbar from "../Navbar";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';


type props = {
  children: ReactNode;
};

const Layout = ({ children, ...rest }: props) => {
  return (
    <>
      <Head>
        <title>Stable Mate</title>
        <meta name="description" content="Bloc ton créneau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar {...rest} />
      <Analytics />

      {/* TODO: Remplacer  */}
      <div className="container mx-auto ">{children}</div>
    </>
  );
};
export default Layout;
