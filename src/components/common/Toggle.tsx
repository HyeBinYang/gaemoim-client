import React from "react";
import styled, { css } from "styled-components";

type ToggleColor = "primary";
type ToggleSize = "large" | "medium" | "small";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Trigger = styled.label<{
  color: ToggleColor;
  size: ToggleSize;
  checked: boolean;
}>`
  display: block;
  border: none;
  position: relative;
  cursor: pointer;

  .toggle__button {
    display: inline-block;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    transition: all 0.2s linear;
  }

  ${({ color, checked }) => {
    switch (color) {
      case "primary": {
        return css`
          background-color: ${checked ? "skyblue" : "lightgray"};

          & > .toggle__button {
            background-color: #fff;
          }
        `;
      }
    }
  }};

  ${({ size, checked }) => {
    switch (size) {
      case "large": {
        return css`
          width: 100px;
          height: 50px;
          border-radius: 30px;
          transform: translate();

          & > .toggle__button {
            width: 40px;
            height: 40px;
            left: ${checked ? "60px" : 0};
            transform: ${checked ? "translate(-8px, -50%)" : "translate(8px, -50%)"};
          }
        `;
      }
      case "medium": {
        return css`
          width: 80px;
          height: 40px;
          border-radius: 30px;
          transform: translate();

          & > .toggle__button {
            width: 33px;
            height: 33px;
            left: ${checked ? "47px" : 0};
            transform: ${checked ? "translate(-6px, -50%)" : "translate(6px, -50%)"};
          }
        `;
      }
      case "small": {
        return css`
          width: 60px;
          height: 30px;
          border-radius: 30px;
          transform: translate();

          & > .toggle__button {
            width: 25px;
            height: 25px;
            left: ${checked ? "35px" : 0};
            transform: ${checked ? "translate(-4px, -50%)" : "translate(4px, -50%)"};
          }
        `;
      }
    }
  }};
`;

interface ToggleProps extends Omit<React.HTMLProps<HTMLDivElement>, "size" | "checked"> {
  left?: boolean;
  right?: boolean;
  color: ToggleColor;
  size: ToggleSize;
  checked: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ left, right, children, color, size, checked, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {left && <div>{children}</div>}
      <input id="toggle" type="checkbox" hidden checked={checked} />
      <Trigger color={color} size={size} checked={checked} htmlFor="toggle" onClick={e => e.stopPropagation()}>
        <span className="toggle__button"></span>
      </Trigger>
      {right && <div>{children}</div>}
    </Wrapper>
  );
};

export default Toggle;
