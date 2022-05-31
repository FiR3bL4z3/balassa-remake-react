import React, { FC } from "react";
import type { PostData } from "../types";
import styled from "@emotion/styled";
import { ShadowBox } from "./ShadowBox";

const PostTitle = styled.h4``;

const PostAuthor = styled.h5``;

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
      <Cover src={postData.cover} alt="" />
      <PostContent>{postData.content}</PostContent>
    </PostContainer>
  );
};
