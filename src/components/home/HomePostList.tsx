import React from "react";
import styled from "styled-components";
import HomePostCard from "./HomePostCard";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  width: 1260px;
  margin: 0 auto;
  padding: 20px 30px 40px;

  @media screen and (max-width: 1280px) {
    width: 960px;
  }

  @media screen and (max-width: 1000px) {
    width: 660px;
  }

  @media screen and (max-width: 720px) {
    width: calc(100% - 60px);
  }
`;

const HomePostList = () => {
  return (
    <Wrapper>
      <HomePostCard />
      <HomePostCard />
      <HomePostCard />
      <HomePostCard />
      <HomePostCard />
      <HomePostCard />
    </Wrapper>
  );
};

export default HomePostList;
