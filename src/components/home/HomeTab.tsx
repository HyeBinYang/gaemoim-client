import colors from "@/src/style/color";
import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../common/Dropdown";
import Toggle from "../common/Toggle";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 30px;
`;

const Left = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  li {
    font-size: 20px;
    font-weight: 600;
    color: ${colors.grey[500]};
    cursor: pointer;

    &:hover {
      color: ${colors.grey[900]};
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const HomeTab = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <Left>
        <li>전체</li>
        <li>프로젝트</li>
        <li>스터디</li>
      </Left>

      <Right>
        <Dropdown />
        <Toggle
          left
          color="primary"
          size="small"
          checked={toggle}
          onClick={e => {
            setToggle(!toggle);
          }}
        >
          <h3>모집 중</h3>
        </Toggle>
      </Right>
    </Wrapper>
  );
};

export default HomeTab;
