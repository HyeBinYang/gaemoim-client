import colors from "@/src/style/color";
import { Comment } from "@/src/types/post";
import { format } from "date-fns";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;

  p {
    font-size: 18px;
  }

  .title__nickname {
    font-weight: 700;
  }

  .title__created {
    color: ${colors.grey[600]};
  }
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.3em;
`;

const PostCommentItem: React.FC<Comment> = ({ ...props }) => {
  return (
    <Wrapper>
      <Title>
        <p className="title__nickname">{props.author.nickName}</p>
        <p className="title__created">{format(new Date(props.createdAt), "yyyy.MM.dd hh:mm a")}</p>
      </Title>
      <Content>{props.content}</Content>
    </Wrapper>
  );
};

export default PostCommentItem;
