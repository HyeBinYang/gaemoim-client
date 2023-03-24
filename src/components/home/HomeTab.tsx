import { setTab, toggleOnlyRecruiting } from "@/src/store/home";
import { useAppSelector } from "@/src/store/hooks";
import colors from "@/src/style/color";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
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
  gap: 25px;

  li {
    font-size: 24px;
    font-weight: 600;
    color: ${colors.grey[500]};
    cursor: pointer;

    &:hover {
      color: ${colors.grey[900]};
    }

    &.active {
      color: ${colors.grey[900]};
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .toggle__title {
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
  }
`;

const HomeTab = () => {
  const { tab, onlyRecruiting } = useAppSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Left>
        <li className={tab === "all" ? "active" : ""} onClick={() => dispatch(setTab("all"))}>
          전체
        </li>
        <li className={tab === "project" ? "active" : ""} onClick={() => dispatch(setTab("project"))}>
          프로젝트
        </li>
        <li className={tab === "study" ? "active" : ""} onClick={() => dispatch(setTab("study"))}>
          스터디
        </li>
      </Left>

      <Right>
        <Toggle
          left
          color="primary"
          size="small"
          checked={onlyRecruiting}
          onClick={() => dispatch(toggleOnlyRecruiting())}
        >
          <h3 className="toggle__title">모집 중</h3>
        </Toggle>
      </Right>
    </Wrapper>
  );
};

export default HomeTab;
