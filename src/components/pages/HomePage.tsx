import styled from "@emotion/styled";
import React, { FC } from "react";

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const FilterBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(189, 64, 64, 0.8);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: whitesmoke;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  filter: grayscale(100%);
`;

export const HomePage: FC = () => {
  return (
    <>
      <ImageContainer>
        <Img
          src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/11/square-format-01.jpg?resize=600%2C600&ssl=1"
          alt="hello"
        />
        <FilterBox>asdsad</FilterBox>
      </ImageContainer>
      <span>Home</span>
    </>
  );
};
