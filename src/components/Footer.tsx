import React, { FC } from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  background-color: var(--background);
  padding: 16px;
  font-size: 1.1rem;
  text-align: center;
`;

export const Footer: FC = () => {
  return <FooterContainer>Copyright © 2022 FiR3bL4z3</FooterContainer>;
};
