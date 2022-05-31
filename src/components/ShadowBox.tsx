import styled from "@emotion/styled";

export const ShadowBox = styled.div<{ zlevel: 1 | 2 | 3 | 4 }>`
  box-shadow: ${(props) => props.zlevel * 2}px ${(props) => props.zlevel * 4}px
    ${(props) => props.zlevel * 4}px
    hsl(0deg 0% 0% / ${(props) => (5 - props.zlevel) * 0.0625 + 0.25});
`;
