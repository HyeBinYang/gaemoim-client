import colors from "@/src/style/color";
import { Post } from "@/src/types/post";
import React from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import HTMLReactParser from "html-react-parser";

const Wrapper = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 30px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  span {
    font-size: 20px;
    font-weight: 500;
    color: ${colors.grey[500]};

    &.info__author {
      color: ${colors.grey[900]};
    }
  }
`;

const Content = styled.div`
  margin-top: 40px;

  p {
    font-size: 20px;
    line-height: 1.5em;
  }
`;

interface PostTemplateProps {
  post: Post;
}

const PostTemplate: React.FC<PostTemplateProps> = ({ ...props }) => {
  return (
    <Wrapper>
      <Title>💙 프로젝트(프론트엔드 개발자) 멤버 모집 💙</Title>
      <PostInfo>
        <span className="info__author">문어햄</span>
        <span>|</span>
        <span className="info__created">2023.03.24</span>
      </PostInfo>
      <hr style={{ border: `1px solid ${colors.grey[200]}` }} />
      <Content>
        {HTMLReactParser(
          '<p>💙 앱 개발 프로젝트 멤버 모집 💙</p><p>▶️PRINT(‘HELLO 앱 개발 WORLD’)</p><p><br /></p><p>안녕하세요 🫧</p><p>함께 앱(웹뷰) 개발하여 출시까지 하실 팀원을 모집합니다 ‼️</p><p><br /></p><p>현재 아이디어 구상까지 완료되었고, 백엔드와 디자인은 작업 시작했습니다. (우선 가톨릭대 커뮤니티 개발 예정으로 추후 넓혀나갈 계획입니다.)</p><p><br /></p><p>📍모집 기간 </p><p>• 모집시 마감 </p><p><br /></p><p>📍개발 기간</p><p>• 4월 말 앱 출시 예정</p><p><br /></p><p>📍모집 분야 및 대상 </p><p>• 프론트엔드 </p><p>-&gt; React 다뤄본 경험이 있는 분</p><p><br /></p><p><br /></p><p>현재 팀원: 기획(1), 마케터(1), 프론트(2), 백엔드(4), 디자이너(2)</p><p><br /></p><p>📍지원 방법</p><p><br /></p><p>🔽하단의 구글폼 작성 후 제출🔽</p><p><br /></p><p><a href="https://docs.google.com/forms/d/e/1FAIpQLSciLGf4KqoyBK90HGT7IyE_rmsEvnYHYyrcu5Pv2JRpVc-flw/viewform" target="_blank">https://docs.google.com/forms/d/e/1FAIpQLSciLGf4KqoyBK90HGT7IyE_rmsEvnYHYyrcu5Pv2JRpVc-flw/viewform</a></p><p><br /></p><p>나도 괜찮을까 …? 이런 걱정은 놉 ! </p><p>망설이지 말고 많은 지원 부탁드립니다 😊 </p><p><br /></p><p>함께 좋은 결과물 만들어보아요 💪🏻</p>',
        )}
      </Content>
      <CommentList />
    </Wrapper>
  );
};

export default PostTemplate;
