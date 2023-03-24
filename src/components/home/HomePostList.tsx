import colors from "@/src/style/color";
import { Post } from "@/src/types/post";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import HomePostCard from "./HomePostCard";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
  width: 1260px;
  margin: 0 auto;
  padding: 20px 30px 40px;
  background-color: ${colors.grey[100]};

  a {
    display: block;
    width: 300px;
  }

  @media screen and (max-width: 1340px) {
    width: 940px;
  }

  @media screen and (max-width: 1000px) {
    width: 660px;

    a {
      width: 320px;
    }
  }

  @media screen and (max-width: 720px) {
    width: calc(100% - 60px);

    a {
      width: 100%;
    }
  }
`;

interface HomePostListProps {
  posts: Post[];
}

const HomePostList: React.FC<HomePostListProps> = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map(post => (
        <Link href={`/post/${post._id}`} key={post._id}>
          <HomePostCard {...post} />
        </Link>
      ))}
    </Wrapper>
  );
};

export default HomePostList;
