import colors from "@/src/style/color";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 100px;

  button {
    width: 100px;
    height: 40px;
    margin-left: auto;
    border-radius: 18px;
    border: none;
    background-color: ${colors.blue[400]};
    color: #fff;
    font-size: 18px;
    letter-spacing: 0.2em;

    &:hover {
      background-color: ${colors.blue[500]};
    }
  }
`;

const Textarea = styled.textarea`
  height: 120px;
  padding: 20px;
  font-size: 16px;
  appearance: none;
  outline: none;
  border: 2px solid ${colors.grey[300]};
  border-radius: 16px;
  resize: none;
`;

const PostCommentInput = () => {
  return (
    <Wrapper>
      <Textarea placeholder="댓글 입력"></Textarea>
      <button>등록</button>
    </Wrapper>
  );
};

export default PostCommentInput;
