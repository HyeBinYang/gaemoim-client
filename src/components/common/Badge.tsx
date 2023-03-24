import colors from "@/src/style/color";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type BadgeColor = "blue";
type BadgeSize = "medium";

const Wrapper = styled.span<{
  color: BadgeColor;
  size: BadgeSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ color }) =>
    color === "blue" &&
    css`
      background-color: ${colors.lightblue[50]};
      color: ${colors.blue[400]};
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      font-size: 13px;
      font-weight: 600;
      border-radius: 30px;
      padding: 4px 10px;
    `}
`;

interface BadgeProps {
  children: ReactNode;
  color: BadgeColor;
  size: BadgeSize;
}

const Badge: React.FC<BadgeProps> = ({ children, color, size }) => {
  return (
    <Wrapper color={color} size={size}>
      {children}
    </Wrapper>
  );
};

export default Badge;
