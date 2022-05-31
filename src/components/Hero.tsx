import styled from "@emotion/styled";
import React, { FC } from "react";

const HeroContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Hero: FC = () => {
  return <HeroContainer>balassa vagyok</HeroContainer>;
};
