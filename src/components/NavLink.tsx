import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavLinkContainer = styled(Link)`
  display: block;
  padding: 10px;
  background-color: white;
`;

export const NavLink: FC<{ to: string; children: ReactNode }> = ({
  to,
  children,
}) => {
  return <NavLinkContainer to={to}>{children}</NavLinkContainer>;
};
