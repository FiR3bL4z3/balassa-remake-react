import React, { FC } from "react";
import styled from "@emotion/styled";
import { ShadowBox } from "./ShadowBox";
import { NavLink } from "./NavLink";

const Nav = styled(ShadowBox)`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--primary);
  padding: 1rem 0;
  padding: 10px 0 0 0;
`;

const NavLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  margin: 0 10px;
`;

const Bar = styled.div`
  background-color: white;
  height: 10px;
  width: 100%;
`;

export const Navbar: FC = () => {
  return (
    <Nav zlevel={4}>
      <NavLinkContainer>
        <NavLink to="/">Kezdőlap</NavLink>
        <NavLink to="/">Kezdőlap</NavLink>
        <NavLink to="/">Kezdőlap</NavLink>
        <NavLink to="/">Kezdőlap</NavLink>
      </NavLinkContainer>
      <Bar />
    </Nav>
  );
};
