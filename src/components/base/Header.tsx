import { open } from "@/src/store/modal";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoginModal from "./LoginModal";

const Container = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: #fff;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #000;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;

  a,
  button {
    font-size: 20px;
    font-weight: 500;
    color: #000;
    transition: color 0.1s linear;

    &:hover {
      color: #787878;
    }
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

const Header = () => {
  let user = null;
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      user = JSON.parse(storedUser);
    }
  }

  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(open(<LoginModal />));
  };

  const handleClickLogout = () => {};

  return (
    <Container>
      <Link href="/">
        <Logo>GAEMOIM</Logo>
      </Link>
      <Navigation>
        {user && <Link href="">글쓰기</Link>}
        {user ? (
          <button onClick={handleClickLogout}>로그아웃</button>
        ) : (
          <button onClick={handleClickLogin}>로그인</button>
        )}
      </Navigation>
    </Container>
  );
};

export default Header;
