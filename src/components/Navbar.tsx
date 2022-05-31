import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ShadowBox } from "./ShadowBox";

const Nav = styled(ShadowBox)`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--primary);
  padding: 1rem 0;
`;

export const Navbar: FC = () => {
  return (
    <Nav zlevel={4}>
      <Link to="/">Kezdőlap</Link>
    </Nav>
  );
};
