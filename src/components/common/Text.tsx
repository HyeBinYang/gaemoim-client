import React from "react";
import styled from "styled-components";

interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Wrapper = styled.div``;

export default function Text({ as = "p", children }: TextProps) {
  return <Wrapper as={as}>{children}</Wrapper>;
}
