import colors from "@/src/style/color";
import React from "react";
import styled from "styled-components";
import Badge from "../common/Badge";
import { CiRead } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid ${colors.grey[300]};
  border-radius: 12px;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #fff;
  cursor: pointer;
  transition: transform 0.15s linear;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1000px) {
    width: 320px;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  .top__left {
    display: flex;
    gap: 8px;
  }
`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 18px;
  flex: 1;
`;

const CreatedAt = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.grey[500]};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .footer__left {
    display: flex;
    gap: 6px;

    span {
      font-size: 15px;
      font-weight: 600;
      color: ${colors.grey[500]};
    }
  }

  .footer__right {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 15px;
      font-weight: 600;
      color: ${colors.grey[500]};
    }
  }
`;

const HomePostCard = () => {
  return (
    <Wrapper>
      <Top>
        <div className="top__left">
          <Badge color="blue" size="medium">
            모집중
          </Badge>
          <Badge color="blue" size="medium">
            스터디
          </Badge>
        </div>
      </Top>
      <Title>title</Title>
      <Description>description</Description>
      <CreatedAt>2023.04.01</CreatedAt>
      <Footer>
        <div className="footer__left">
          <span>문어햄</span>
        </div>
        <div className="footer__right">
          <span>
            <div>
              <CiRead size={24} color={colors.grey[500]} />
            </div>
            151
          </span>
          <span>
            <div>
              <FaRegComment size={17} color={colors.grey[500]} />
            </div>
            12
          </span>
        </div>
      </Footer>
    </Wrapper>
  );
};

export default HomePostCard;