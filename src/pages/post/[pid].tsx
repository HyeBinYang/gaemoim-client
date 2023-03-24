import PostTemplate from "@/src/components/post/PostTemplate";
import { Post } from "@/src/types/post";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import React from "react";

export async function getStaticProps({ params }: GetStaticPropsContext<{ pid: string }>) {
  const res = await axios.get(`http://localhost:8080/post/${params?.pid}`);
  const post = res.data;
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:8080/post");
  const posts: Post[] = res.data;
  const paths = posts.map(post => ({
    params: {
      pid: post.id,
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return <PostTemplate post={post} />;
};

export default PostDetail;
