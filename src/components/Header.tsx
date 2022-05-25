import React, { FC } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

export const Header: FC = () => {
  return (
    <>
      <Hero />
      <Navbar />
    </>
  );
};
