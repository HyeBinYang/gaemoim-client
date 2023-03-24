import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill, RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const Wrapper = styled.div`
  width: 40vw;
  padding: 40px 100px 120px;
  background-color: #fff;
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

const OauthList = styled.ul`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }

  .kakao {
    background-color: #fae100;
  }

  .github {
    background-color: #171515;
  }

  .google {
  }
`;

const LoginModal = () => {
  return (
    <Wrapper>
      <Title>로그인을 해주세요!</Title>
      <OauthList>
        <li className="kakao">
          <RiKakaoTalkFill size={50} />
        </li>
        <li className="github">
          <RiGithubFill size={50} color="#fff" />
        </li>
        <li className="google">
          <FcGoogle size={50} />
        </li>
      </OauthList>
    </Wrapper>
  );
};

export default LoginModal;
