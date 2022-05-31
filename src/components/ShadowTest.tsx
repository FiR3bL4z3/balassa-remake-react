import React, { FC } from "react";
import styled from "@emotion/styled";

const ShadowContainer = styled.div<{ zlevel: number }>`
  width: 200px;
  height: 200px;
  background-color: whitesmoke;
  box-shadow: ${(props) => props.zlevel * 2}px ${(props) => props.zlevel * 4}px
    ${(props) => props.zlevel * 4}px
    hsl(0deg 0% 0% / ${(props) => (5 - props.zlevel) * 0.0625 + 0.25});
`;

export const ShadowTest: FC<{
  children?: React.ReactNode;
  zlevel: number;
}> = ({ zlevel, children }) => {
  return <ShadowContainer zlevel={zlevel}>{children}</ShadowContainer>;
};
