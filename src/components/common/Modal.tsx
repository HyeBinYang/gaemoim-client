import React from "react";
import { useAppSelector } from "@/src/store/hooks";
import { createPortal } from "react-dom";
import styled from "styled-components";

const BackDrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Modal = () => {
  const { children } = useAppSelector(state => state.modalReducer);

  return createPortal(
    <>
      <BackDrop />
      <ModalContainer>{children}</ModalContainer>
    </>,
    document.getElementById("modal") as HTMLElement,
  );
};

export default Modal;
