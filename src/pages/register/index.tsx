import RegisterSelect from "@/src/components/register/RegisterSelect";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const BasicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 30px;
  margin-bottom: 60px;

  & > * {
    flex: 1 1 45%;
  }
`;

const DetailContainer = styled.div``;

const Register = () => {
  return (
    <Wrapper>
      <Title>1. 기본 정보</Title>
      <BasicContainer>
        <RegisterSelect title="모집 구분" options={["프로젝트", "스터디"]} />
      </BasicContainer>
      <Title>2. 상세 내용</Title>
      <DetailContainer></DetailContainer>
    </Wrapper>
  );
};

export default Register;
