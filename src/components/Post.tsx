import React, { FC } from "react";
import type { PostData } from "../types";
import styled from "@emotion/styled";
import { ShadowBox } from "./ShadowBox";

const PostTitle = styled.h4`
  margin: 0;
  padding: 0;
`;

const PostAuthor = styled.h5`
  margin: 0;
  padding: 0;
`;

const PostContent = styled.p``;

const PostContainer = styled(ShadowBox)`
  background-color: var(--secondary);
  width: 100%;
  padding: 8px;
`;

const PostHeader = styled.div``;

const Cover = styled.img`
  width: 100%;
`;

export const Post: FC<{ postData: PostData }> = ({ postData }) => {
  return (
    <PostContainer zlevel={1}>
      <PostHeader>
        <PostTitle>{postData.title}</PostTitle>
        <PostAuthor>{postData.author}</PostAuthor>
      </PostHeader>
      <Cover src={postData.cover} alt="The posts cover photo" />
      <PostContent>{postData.content}</PostContent>
    </PostContainer>
  );
};
