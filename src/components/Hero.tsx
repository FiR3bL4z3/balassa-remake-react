import styled from "@emotion/styled";
import React, { FC } from "react";

const HeroContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: turquoise;
`;

export const Hero: FC = () => {
  return <HeroContainer />;
};
