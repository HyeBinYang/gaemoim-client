import React from "react";
import styled from "styled-components";

interface TextProps extends React.HTMLProps<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.div``;

const Text = ({ as = "p", children }: TextProps) => {
  return <Wrapper as={as}>{children}</Wrapper>;
};

export default Text;
