import React, { FC } from "react";
import styled from "@emotion/styled";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(189, 64, 64, 0.8);
  padding: 1rem 0;
`;

export const Navbar: FC = () => {
  return <Nav>hello nav</Nav>;
};
