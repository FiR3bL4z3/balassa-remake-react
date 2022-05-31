import React, { FC } from "react";
import { Post } from "./Post";
import type { PostData } from "../types";
import styled from "@emotion/styled";

const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 10px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const PostList: FC = () => {
  //should be fetched

  const posts: PostData[] = [
    {
      title: "Post title 1",
      author: "Aothur Kasdasd",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo alias quia officia aut culpa voluptatem quis. Harum vero accusantium odit officia aut culpa voluptatem quis. Harum vero accusantium odit perspiciatis iure, a fugiat nobis vitae eveniet rerum omnis distinctio?",
      cover: "https://via.placeholder.com/300x100",
    },
    {
      title: "Very very very very long post title",
      author: "Aothur Kasdasd Asd",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo alias quia officia aut culpa voluptatem quis. Harum vero accusantium odit officia aut culpa voluptatem quis. Harum vero accusantium odit perspiciatis iure, a fugiat nobis vitae eveniet rerum omnis distinctio?",
      cover: "https://via.placeholder.com/300x100",
    },
  ];
  return (
    <PostListContainer>
      {posts.map((post, index) => (
        <Post postData={post} key={index} />
      ))}
    </PostListContainer>
  );
};
