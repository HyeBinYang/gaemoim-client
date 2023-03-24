import { Comment } from "@/src/types/post";
import React from "react";
import styled from "styled-components";
import PostCommentInput from "./PostCommentInput";
import PostCommentItem from "./PostCommentItem";

const Wrapper = styled.div``;

const Title = styled.h3`
  margin: 120px 0 22px;
  font-size: 24px;
  font-weight: 700;
`;

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <Wrapper>
      <Title>댓글 {comments.length}</Title>
      <PostCommentInput />
      {comments.map(comment => (
        <PostCommentItem {...comment} />
      ))}
    </Wrapper>
  );
};

export default CommentList;
