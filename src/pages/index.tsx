import axios from "axios";
import React from "react";
import HomePostList from "../components/home/HomePostList";
import HomeTab from "../components/home/HomeTab";
import { Post } from "../types/post";

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:8080/posts");
  return {
    props: {
      posts: res.data,
    },
  };
}

interface HomeProps {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <main>
      <HomeTab />
      <HomePostList posts={posts} />
    </main>
  );
};

export default Home;
