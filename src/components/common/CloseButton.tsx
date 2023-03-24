import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
`;

interface CloseButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <AiOutlineClose size={30} />
    </Wrapper>
  );
};

export default CloseButton;
